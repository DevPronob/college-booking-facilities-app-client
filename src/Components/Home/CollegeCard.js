import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeCard = ({college}) => {
    const navigate=useNavigate()
    const handleNavigate = (id) =>{
        navigate(`/college/${id}`);
    }
    return (
        <div onClick={() => handleNavigate(college._id)} class="relative px-5 m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
        <a href="#">
          <img class="h-60 rounded-t-lg object-cover" src={college.image} alt="product image" />
        </a>
        <h2 className="text-2xl font-semibold mb-2 ">{college.name}</h2>
      <p className="text-gray-600 text-sm mb-4">Admission Dates: {college.admissionDates}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Events:</h3>
        <div className="flex flex-wrap">
          {college.events.map((event, index) => (
            <div key={index} className="bg-blue-500 text-white rounded-full py-1 px-2 text-sm mr-2 mb-2">{event}</div>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{college.researchHistory}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Sports:</h3>
        <div className="flex flex-wrap">
          {college.sports.map((sport, index) => (
            <div key={index} className="bg-green-500 text-white rounded-full py-1 px-2 text-sm mr-2 mb-2">{sport}</div>
          ))}
        </div>
      </div>
      <button class="relative my-3 mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
    Details
  </button>
      </div>
    );
}

export default CollegeCard;
