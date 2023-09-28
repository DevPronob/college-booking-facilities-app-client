import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal2 from '../../Shared/Modal2';

const MyCollege = () => {
    const [data,setData]=useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const handleGetRequest = async () => {
        try {
          // Define your custom headers
          const headers = {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          };
      
          // Make the GET request using Axios with headers
          const response = await axios.get('http://localhost:5000/api/booking', { headers });
      
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
      }, []); // The empty dependency array means this effect runs once when the component mounts
    return (
        <div>
          <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-700">Apply Colleges</h2>
      {/* <span class="text-xs text-gray-500">View accounts of registered users</span> */}
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">Email</th>
            <th class="px-5 py-3">Institute</th>
            {/* <th class="px-5 py-3">Email</th> */}
            <th class="px-5 py-3">Phone</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">

         
           {
            data.map(items =>{
                return  <tr>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-full w-full rounded-full" src={items.imageFile} alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="whitespace-no-wrap">{items.emailValue}</p>
                    </div>
                  </div>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{items.collegeValue}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{items.phone}</p>
                </td>
    
              </tr>
            })
           }
          
        </tbody>
      </table>
    </div>
  </div>
</div>

<div className="mb-12 mt-20 text-center">
      {/* <Link to="/dashboard/add-review"> */}
        <button onClick={openModal}  className="btn mb-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white  btn-outline">
          Review Us
        </button>
      {/* </Link> */}
    </div>
    <Modal2  isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default MyCollege;
