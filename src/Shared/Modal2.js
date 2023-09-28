import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const Modal2 = ({ isOpen, onClose }) => {
    const [data,setData] =useState([])
    const handleGetRequest = async () => {
        try {
          // Define your custom headers
          const headers = {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          };
      
          // Make the GET request using Axios with headers
          const response = await axios.get('http://localhost:5000/api/college', { headers });
      
          // Handle the response data as needed
          console.log('GET Response:', response.data);
          setData(response.data)
        } catch (error) {
          // Handle any errors that occur during the GET request
          console.error('Error:', error);
        }
      };
      useEffect(() => {
        handleGetRequest();
      }, []); //
      console.log(data)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const review ={
            comment:data.text,
            rating:data.rating,
            college:data.college,

          }
          fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              Swal.fire({
                position: 'top-up',
                icon: 'success',
                title: `Review added Successfully`,
                showConfirmButton: false,
                timer: 1500
              })
            });
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
        
    <h3 className="text-lg font-bold ms-8">Add Review</h3>
  <form onSubmit={handleSubmit(onSubmit)}  method="dialog" className=" text-center flex flex-col items-center py-8">
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">College</span>
      
    </label>

    <select {...register("college", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text"  className="select select-primary w-full max-w-xs">
        {
      data?.map(item =><option >{item.name}</option>)
  }
  {/* <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option> */}
</select>

    
    <label className="label">
    {errors.college?.type === 'required' && <span className="label-text-alt text-red-500">{errors.college.message}</span>}

  </label>
  </div>

  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Comment</span>
      
    </label>
    <input className='' {...register("text", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="Comment" class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

  </label>
  </div>
  
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Add Rating Between 1 to 5</span>
    
  </label>
  <input class="input input-bordered w-full max-w-xs" type="number" {...register("rating", { min: 1, max: 5 })} />
  <label className="label">
  {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  </label>
  </div>

   <input className='w-full max-w-xs btn btn-outline' type="submit" />
  </form>
                 
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Modal2;
