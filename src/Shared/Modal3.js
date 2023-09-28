import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/Firebase/Firebase.init';
import Swal from 'sweetalert2';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios'
const Modal3 = ({ isOpen, onClose,setUser }) => {
    // const[user1,setUser] =useState()
    const [user, loading, error] = useAuthState(auth)
    useEffect(() =>{
        handleSearch()
    },)
    const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/profile/${user?.email}`);
          setUser(response.data);
          console.log(response.data,"datatta")
        } catch (error) {
          console.error(error);
          setUser(null);
        }
      };
   
    const queryClient = useQueryClient();

  // Define the mutation function
  const createPost = async (postData) => {
    const response = await axios.post('http://localhost:5000/profile/', postData);
    return response.data;
  };

  // Use the useMutation hook
  const { mutate, isLoading, isError } = useMutation(createPost, {
    // onSuccess is called when the mutation is successful
    onSuccess: () => {
      // Invalidate and refetch the relevant query to update the data
      queryClient.invalidateQueries('posts'); // Replace 'posts' with your query key
    },
  });
    
    const onSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const university = form.university.value;
        const address = form.address.value;
        const email=user?.email
      const booking ={
              name,
              university,
              address,
              email
            }
           
            mutate(booking)
            
        }
     
    return (
        <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pb-10">
            <div className=" flex  items-center justify-center">
              <div className="m-2 inline-flex rounded-xl bg-gray-100 sm:p-2">
                <div className="flex flex-col rounded-lg bg-white sm:w-[500px]">
                  <div className="flex w-full justify-between self-start px-8 py-4">
                    <button onClick={onClose} className="cursor-pointer text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
        
  {/* <form onSubmit={handleSubmit(onSubmit)}  method="dialog" className=" text-center flex flex-col items-center py-8"> */}
  <form onSubmit={onSubmit}  method="dialog" className="modal-box text-center flex flex-col items-center">
    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="text-lg font-bold">Update Profile</h3>
     {/* <form className=''> */}
    <input name='name' type="text" placeholder='Name'   class="input mt-1 my-1 input-bordered w-full max-w-xs" />
    <input name='university'  type="text" placeholder="University" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input name='address'  type="text" placeholder="Address" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
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

export default Modal3;
