import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import CollegeCard from './CollegeCard';
import ImageGallery from './ImageGallery';
import ResearchPapers from './ResearchPapers';
import Modal2 from '../../Shared/Modal2';
import Review from './Review';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    const [data,setData]=useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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
    const handleSubmit = (e) => {
        e.preventDefault();
        const results = data.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
        // Call the onSearch function and pass the search query as an argument
        // onSearch(searchQuery);
      };
      console.log(searchQuery,"from home")
      const defaultCollegeCards = (
        <section className="college-cards flex flex-wrap justify-center items-start">
        {data.slice(0, 3).map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </section>
      );
     
    return (
        <div>
           <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSubmit={handleSubmit}></SearchBar>
           <div className='my-6'>
            {/* <h4 className='mb-12 text-center text-3xl font-bold'>Colleges</h4> */}
            {searchQuery ? ( // Render search results if there's a search term
        <section className="college-cards">
          {searchResults.map((college, index) => (
            <CollegeCard key={index} college={college} />
          ))}
        </section>
      ) : null}
           </div>

           <div className="my-6">
      <h4 className="mb-12 text-center text-3xl font-bold">Feature Colleges</h4>
      <section className="default-college-cards">
        {defaultCollegeCards}
      </section>
    </div>
           <div className='my-6'>
            <ImageGallery></ImageGallery>
           </div>
           <div className='my-6'>
            <ResearchPapers data={data}></ResearchPapers>
           </div>
           <div className='my-6'>
           <Review></Review>
           </div>
           <div className='my-6'>
           <Footer></Footer>
           </div>
        </div>
    );
}

export default Home;




