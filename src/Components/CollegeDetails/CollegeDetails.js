import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Footer from '../../Shared/Footer/Footer';
const CollegeDetails = () => {
    const { id } = useParams();
    console.log(id)
    const { data: collegeDetails, isLoading, isError, refetch } = useQuery(
        ['college', id], // A unique query key
        () => getPostById(id), // Function to fetch the post data
        {
          refetchOnWindowFocus: false, // Disable auto-refetch on window focus (optional)
        }
      );
    
      async function getPostById(id) {
        try {
          const headers = {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          };
    
          // Make a GET request to fetch the post data
          const response = await axios.get(`http://localhost:5000/api/college/${id}`, {
            headers,
          });
    
          return response.data; // Return the fetched data
        } catch (error) {
          throw error; // Let React Query handle the error
        }
      }
    
    //   useEffect(() => {
    //     // Fetch post data when the component mounts
    //     refetch(); // Use refetch to trigger the query
    
    //     // You can optionally include any cleanup code here
    //     return () => {
    //       // Cleanup code, if needed
    //     };
    //   }, [id, refetch]);
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error loading data</div>;
      }
    return (
        <div>
          <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8 text-center">
            <div className="  overflow-hidden mx-auto border-4 ">
            <img
              src={collegeDetails.image}
              alt={collegeDetails.name}
              className=" overflow-hidden mx-auto border-4 "
            />
            </div>
            <h1 className="text-3xl font-semibold mt-4 text-blue-700">{collegeDetails.name}</h1>
            <p className="text-gray-600 text-lg">Admission Dates: {collegeDetails.admissionDates}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Events</h2>
            <div className="flex flex-wrap">
              {collegeDetails.events.map((event, index) => (
                <div key={index} className="mb-2 mr-4">
                  <div className="bg-blue-100 text-blue-700 py-1 px-2 rounded-md">{event}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Research History</h2>
            <p className="text-gray-700">{collegeDetails.researchHistory}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Sports</h2>
            <div className="flex flex-wrap">
              {collegeDetails.sports.map((sport, index) => (
                <div key={index} className="mb-2 mr-4">
                  <div className="bg-blue-100 text-blue-700 py-1 px-2 rounded-md">{sport}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Admission Process</h2>
            <p className="text-gray-700">{collegeDetails.admissionProcess.howToApply}</p>
            <ol className="list-decimal list-inside ml-6 text-gray-700">
              {collegeDetails.admissionProcess.steps.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
            <p className="text-gray-700">{collegeDetails.admissionProcess.admissionRequirements}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Research Works</h2>
            <ul className="list-disc list-inside text-gray-700">
              {collegeDetails.researchWorks.map((work, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {work.title}
                  </a>{' '}
                  by {work.author} ({work.publicationDate})
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full inline-block mt-4 block text-center"
          >
            Back to College List
          </Link>
        </div>
      </div>
    </div>
    <div className='my-6'>
           <Footer></Footer>
           </div>
        </div>
    );
}

export default CollegeDetails;
