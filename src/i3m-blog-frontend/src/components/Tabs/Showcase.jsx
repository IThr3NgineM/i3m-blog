// components/Tabs/Showcase.jsx
import React from 'react';
import showcaseImage1 from "../../assets/industryImage3.jpg";
import showcaseImage2 from "../../assets/industryImage3.jpg";
import showcaseImage3 from "../../assets/industryImage3.jpg";
import showcaseImage4 from "../../assets/industryImage3.jpg";
import highlightImage from "../../assets/industryImage3.jpg";

const Showcase = () => {
  const resources = [
    { id: 1, title: 'I3M Engine Overview', author: 'John Doe', date: '10/26/24', image: showcaseImage1 },
    { id: 2, title: 'Getting Started with I3M', author: 'Jane Smith', date: '10/26/24', image: showcaseImage2 },
    { id: 3, title: 'Advanced I3M Features', author: 'Alex Brown', date: '10/26/24', image: showcaseImage3 },
    { id: 4, title: 'Troubleshooting Guide', author: 'Taylor White', date: '10/26/24', image: showcaseImage4 },
  ];

  const aiResources = [
    { id: 1, title: 'AI-Driven Game Mechanics', author: 'Chris Lee', date: '10/24/24', image: showcaseImage1 },
    { id: 2, title: 'Automating Workflows with AI in I3M', author: 'Alex Green', date: '10/23/24', image: showcaseImage2 },
    { id: 3, title: 'AI-Powered Design Tools', author: 'Cassie Wilson', date: '10/24/24', image: showcaseImage3 },
    { id: 4, title: 'Top AI Integrations for I3M', author: 'Rachel Blue', date: '10/18/24', image: showcaseImage4 },
  ];

  return (
    <div className="px-8 py-6">
      {/* Latest Resources Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Latest Resources</h2>
          <span className="flex-grow border-t-2 border-red-500 ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={resource.image} alt={resource.title} className="w-1/3 h-32 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="text-gray-500">{resource.author}</p>
                <p className="text-gray-600 mt-2">{resource.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artificial Intelligence Resources Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
          <span className="flex-grow border-t-2 border-red-500 ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {aiResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <p className="text-gray-500">{resource.author}</p>
                <p className="text-gray-600 mt-2">{resource.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted Resource Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-10 bg-i3m-purple rounded-lg my-8 shadow-lg max-w-5xl mx-auto">
        <div className="md:w-1/3">
          <img src={highlightImage} alt="Highlighted Resource" className="rounded-lg w-full h-48 object-cover md:h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800">The State of Marketing Trends Report</h3>
          <p className="text-gray-700 mt-4">
            Discover insights into marketing strategies and explore trends shaping the industry today. Download this comprehensive report to stay informed.
          </p>
          <button className="mt-6 px-4 py-2 bg-i3m-pink text-white font-semibold rounded shadow-lg hover:bg-orange-600">
            Download Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
