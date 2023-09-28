import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../../Shared/Modal';
import { useQuery } from 'react-query';
import Footer from '../../Shared/Footer/Footer';

const Admission = () => {
    const [data,setData]=useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[id,setId] =useState()
    const[findData,setFindData]=useState()
   

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
      }, []); // The empty depe
      useEffect(() =>{
        const filterData = data.filter((d) => d._id.includes(id));
        console.log(filterData,"filterData")
        setFindData(filterData)
      },[id])
    
    //   console.log(findData?.[0]?.name || "")
      
    
    //   console.log(collegeDetails,"collegeDetails")
    return (
        <div>
       <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
<div class="w-screen">
  
<div class="mx-auto mt-8 max-w-screen-lg px-2">
  <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
    <p class="flex-1 text-base font-bold text-gray-900">College Admission</p>

    <div class="mt-4 sm:mt-0">
      <div class="flex items-center justify-start sm:justify-end">
        <div class="flex items-center">
          <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
          <select name="" class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
            <option class="whitespace-no-wrap text-sm">Recent</option>
          </select>
        </div>

      </div>
    </div>
  </div>

  <div class="mt-6 overflow-hidden rounded-xl border shadow text center">
    <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2 text-center">
      <thead class="hidden border-b lg:table-header-group">
        <tr class="">
          <td  class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">College Names</td>

        </tr>
      </thead>

      <tbody class="text-center">
       {
        data.map(items =>{
            return <div onClick={openModal} className='lg:border-gray-300'>
                <tr onClick={() => setId(items._id)}   class="">
           <td  class="py-4 cursor-pointer text-blue-500 text-2xl font-bold sm:px-6">
  <h4 className=''>{items.name}</h4>
</td>
          </tr>
            </div>
        })
       }

      </tbody>
    </table>
  </div>
</div>

</div>

<div>
           {/* <button className="btn" >open modal</button> */}
           <Modal findData={findData} data={data} isOpen={isModalOpen} onClose={closeModal} />
           </div>
           <div className='my-6'>
           <Footer></Footer>
           </div>
        </div>
    );
}

export default Admission;
