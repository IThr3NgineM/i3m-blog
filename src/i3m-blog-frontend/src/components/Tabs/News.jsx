// components/Tabs/News.jsx
import React from 'react';
import newsImage1 from "../../assets/cardImage2.jpg";
import newsImage2 from "../../assets/cardImage2.jpg";
import newsImage3 from "../../assets/cardImage2.jpg";
import newsImage4 from "../../assets/cardImage2.jpg";
import highlightImage1 from "../../assets/cardImage2.jpg";
import highlightImage2 from "../../assets/industryImage2.jpg";

const News = () => {
  const latestArticles = [
    { id: 1, title: 'One Question That Will Reinvigorate Your Approach to Marketing...', author: 'Laura M. Browning', date: '10/25/24', image: newsImage1 },
    { id: 2, title: 'Goals vs Objectives: The Simple Breakdown', author: 'Basha Coleman', date: '10/25/24', image: newsImage2 },
    { id: 3, title: 'The Power of Silence in Negotiation', author: 'Phill Agnew', date: '10/24/24', image: newsImage3 },
    { id: 4, title: 'A Deep Dive Into Concept Maps: What They Are and How to Use...', author: 'Kasia Kowalska', date: '10/25/24', image: newsImage4 },
  ];

  const aiArticles = [
    { id: 1, title: 'How to Generate Video Scripts With AI', author: 'Rachael Nicholson', date: '10/24/24', image: newsImage1 },
    { id: 2, title: 'How Marketers Save Time and Make Data-Backed Decisions with AI', author: 'Ankit Vora', date: '10/23/24', image: newsImage2 },
    { id: 3, title: '9 Best AI Marketing Bots I Use at Work in 2024', author: 'Cassie Wilson', date: '10/24/24', image: newsImage3 },
    { id: 4, title: 'I Tested 7 AI Tools for Graphic Design, Here Are My Favorites...', author: 'Rachael Nicholson', date: '10/18/24', image: newsImage4 },
  ];

  const instagramArticles = [
    { id: 1, title: 'How to Use Instagram: A Beginner’s Guide [Expert Insights]', author: 'Curt del Principe', date: '5/30/24', image: newsImage1 },
    { id: 2, title: 'How to Get More Followers on Instagram: 17 Ways to Your First 1K', author: 'Ramona Sukhraj', date: '7/24/24', image: newsImage2 },
    { id: 3, title: 'When Is the Best Time to Post on Instagram in 2024?', author: 'Jana Rumberger', date: '6/19/24', image: newsImage3 },
    { id: 4, title: 'How to Repost on Instagram: Ways to Reshare Content From Others', author: 'Sophia Bernazzani Barron', date: '5/24/22', image: newsImage4 },
  ];

  return (
    <div className="px-8 py-6">
      {/* Latest Articles Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <span className="flex-grow border-t-2 border-i3m-pink ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestArticles.map((article) => (
            <div key={article.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-1/3 h-32 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-500">{article.author}</p>
                <p className="text-gray-600 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artificial Intelligence Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
          <span className="flex-grow border-t-2 border-i3m-pink ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {aiArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-500">{article.author}</p>
                <p className="text-gray-600 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Marketing Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Instagram Marketing</h2>
          <span className="flex-grow border-t-2 border-i3m-pink ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {instagramArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-500">{article.author}</p>
                <p className="text-gray-600 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-10 bg-inherit border-x-2 border-y-2 border-i3m-pink  rounded-lg my-8 shadow-lg max-w-5xl mx-auto">
        <div className="md:w-1/3">
          <img src={highlightImage1} alt="State of Marketing Trends" className="rounded-lg w-full h-48 object-cover md:h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800">The State of Marketing Trends Report</h3>
          <button className="mt-4 px-4 py-2 bg-i3m-pink text-white font-semibold rounded shadow-lg hover:bg-orange-600">
            Download Now
          </button>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row items-center px-8 py-10 bg-inherit border-x-2 border-y-2 border-i3m-pink rounded-lg my-8 shadow-lg max-w-5xl mx-auto">
        <div className="md:w-1/3">
          <img src={highlightImage2} alt="Marketing & Trends Report" className="rounded-lg w-full h-48 object-cover md:h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800">The 2024 State of Marketing & Trends Report</h3>
          <p className="text-gray-700 mt-4">Discover the digital marketing industry trends, winning opportunities, and challenges brands face this year, with data from 1,400+ B2B and B2C marketers.</p>
          <button className="mt-6 px-4 py-2 bg-i3m-pink text-white font-semibold rounded shadow-lg hover:bg-red-600">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
