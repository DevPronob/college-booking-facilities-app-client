import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Modal = ({ isOpen, onClose,data,findData }) => {
    const [user, loading, error] = useAuthState(auth);
    // const fetchDataById = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/college/${id}`);
    //         if (!response.ok) {
    //           throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
            
    //         const data = await response.json();
    //         // Handle the response data here
    //         console.log(data);
    //         return data;
    //       } catch (error) {
    //         // Handle any errors here
    //         console.error('Error fetching data:', error);
    //         throw error;
    //       }
    //   };
    //   useEffect(() =>{
    //     fetchDataById(id)
    //   },[])
      
    
    const image = useRef(null);
  const college = useRef(null);
  const userName = useRef(null);
  const dateOfBirth = useRef(null);
  const addesss = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
    // Event handler to submit the form data
    const handleSubmit = async(e) => {
        e.preventDefault();
        const imageFile = image.current.files[0];
  const collegeValue = college.current.value;
  const userNameValue = userName.current.value;
  const dateOfBirthValue = dateOfBirth.current.value;
  const addressValue = addesss.current.value;
  const phoneValue = phone.current.value;
  const emailValue = email.current.value;
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    // Make a POST request to ImageBB API to upload the image
    const response = await axios.post('https://api.imgbb.com/1/upload?key=3865938eefff3a14cd02acc91c1d32e1', formData);

    // The ImageBB API response will contain the URL of the uploaded image
    const imageUrl = response.data.data.url;

    const data ={
        imageFile:imageUrl,
        collegeValue,
        userNameValue,
        dateOfBirthValue,
        addressValue,
        phoneValue,
        emailValue
      }
      fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
               Swal.fire({
                position: 'top-up',
                icon: 'success',
                title: `Data added Successfully`,
                showConfirmButton: false,
                timer: 1500
              })
            //    notify()
            // refetch();
        });

    } catch (error) {
        console.error('Error uploading image:', error);
      }

    // You can now use avatarFile and commentText as needed.
    // console.log('Avatar:', avatarFile);
    // console.log('Comment:', commentText);
    // You can also send the form data to an API or perform other actions here.
  };
   
return (
        <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pb-10">
            <div className=" flex  items-center justify-center">
              <div className="m-2 inline-flex rounded-xl bg-gray-100 sm:p-2">
                <div className="flex flex-col rounded-lg bg-white sm:w-[500px]">
                  <div className="flex w-full justify-between self-start px-8 py-4">
                    <h2 className="text-lg font-medium text-gray-700">Admission Form</h2>
                    <button onClick={onClose} className="cursor-pointer text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
        
                  <form onSubmit={handleSubmit}  method="dialog" className=" text-center flex flex-col items-center py-8">
    <h3 className="text-lg font-bold"></h3>
     {/* <form className=''> */}
     <input  ref={college}  name='college' type="text" value={findData?.[0]?.name || ""}    class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input ref={userName}  name='name' type="text" placeholder='Name'   class="input my-1 mt-1 input-bordered w-full max-w-xs" />
        <input type="file" 
        ref={image}
               class="ml-4 p-1 max-w-xs text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"/>
    <input ref={dateOfBirth}  name='dateOfBirth' type="date"  placeholder='Date Of Birth'  class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input ref={addesss}  name='address'  type="text" placeholder="Address" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input ref={phone} name='phone'  type="text" placeholder="Phone Number" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input ref={email} value={user?.email} name='email'  type="text" placeholder="Email" class="input my-1 input-bordered w-full max-w-xs" />
 <input for="my-modal-6" type="submit" className='btn my-1 block w-80 mx-auto text-black mx-4'  value="Submit" />
 
  {/* </form> */}
  </form>
                 
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Modal;
