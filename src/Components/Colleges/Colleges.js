import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollegeCard2 from '../Home/CollegeCard2';
import Footer from '../../Shared/Footer/Footer';

const Colleges = () => {
    const [data,setData]=useState([])
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
      }, []); // The empty dependency array means this effect runs once when the component mounts
      const defaultCollegeCards = (
        <section className="college-cards flex flex-wrap justify-center items-start">
        {data.map((college, index) => (
          <CollegeCard2 key={index} college={college} />
        ))}
      </section>
      );
    return (
        <div>
           <div className='my-6'>
            <h4 className='text-3xl text-center font-semibold mb-2'>Colleges</h4>
            {defaultCollegeCards}
           </div> 
           <div className='my-6'>
           <Footer></Footer>
           </div>
        </div>
    );
}

export default Colleges;
