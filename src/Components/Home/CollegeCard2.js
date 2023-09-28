import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const CollegeCard2 = ({ college }) => {
  const [ratingValue, setRatingValue] = useState(0);
  useEffect(() => {
    setRatingValue(college.rating);
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/college/${id}`);
  };

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 0; i < ratingValue; i++) {
//       stars.push(<AiFillStar key={i} />);
//     }
//     return stars;
//   };

  return (
    <div>
      <div
       
        className="relative px-5 m-5 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
      >
        <a href="#">
          <img
            className="h-60 rounded-t-lg object-cover"
            src={college.image}
            alt="product image"
          />
        </a>
        <h2 className="text-2xl font-semibold mb-2 ">{college.name}</h2>
        <p className="text-gray-600 text-sm text-lg mb-4">
          Admission Date: {college.admissionDates}
        </p>
        <div className="mb-4 flex flex-wrap">
        {Array(ratingValue)
            .fill(null)
            .map((_, index) => (
              <AiFillStar
                key={index}
                style={{ color: 'yellow' }} // Add yellow color to the star icons
              />
            ))}
        </div>
        <div className="mb-4">
          <p className="text-gray-700 mt-2">Research Count: {college.researchWorks.length}</p>
        </div>
        <button  onClick={() => handleNavigate(college._id)} className="relative my-3 mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
          Details
        </button>
      </div>
    </div>
  );
};

export default CollegeCard2;
