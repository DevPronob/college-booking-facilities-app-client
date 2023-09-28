import React, { useEffect, useState } from 'react';

function ResearchPapers({data}) {
    const [randomResearchWorks, setRandomResearchWorks] = useState([]);

    useEffect(() => {
      // Combine all researchWorks from all colleges into one array
      const allResearchWorks = data.flatMap(college => college.researchWorks);
  
      // Shuffle the array of researchWorks
      const shuffledResearchWorks = shuffleArray(allResearchWorks);
  
      // Get the first 3 researchWorks from the shuffled array
      const numberOfResearchWorksToDisplay = 3; // Change this to the number of items you want to display
      const selectedResearchWorks = shuffledResearchWorks.slice(0, numberOfResearchWorksToDisplay);
  
      setRandomResearchWorks(selectedResearchWorks);
    }, [data]);
  
    // Function to shuffle an array randomly
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    return (
        <section className="bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Recommended Research Papers</h2>
        
        {/* Use a flex container to display research papers in a row */}
        <div className="flex justify-around items-center flex-wrap -mx-2">
          {randomResearchWorks.map((paper, index) => (
            <div class="mx-auto my-10 max-w-xs rounded-xl px-6 py-10 bg-white shadow">
            <div class="mb-4 text-2xl text-center pt-3 h-10 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">{paper.title}</div>
            <p class="mb-2 ">By {paper.author} ({paper.publicationDate})</p>
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
            <button  class="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
              <span>Research Paper </span>
              <span
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
            </a>
           
          </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default ResearchPapers;