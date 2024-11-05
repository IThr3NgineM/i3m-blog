import React from 'react';
import image1 from "../../assets/cardImage1.jpg";
import image2 from "../../assets/cardImage1.jpg";
import image3 from "../../assets/cardImage1.jpg";
import image4 from "../../assets/cardImage1.jpg";
import image5 from "../../assets/cardImage1.jpg";
import ceoImage from "../../assets/Founder.png"; 

const HomePage = () => {
  const blogs = [
    { id: 1, title: 'I3M 2D Game Testing', date: '20th Oct 2024', image: image1, category: 'News' },
    { id: 2, title: 'Supported Platforms on I3M', date: '20th Oct 2024', image: image2, category: 'Report' },
    { id: 3, title: 'I3M Editor News By November', date: '20th Oct 2024', image: image3, category: 'Events' },
    { id: 4, title: 'I3M Developer Documentation', date: '20th Oct 2024', image: image4, category: 'Releases' },
    { id: 5, title: 'I3M Website 2024 Article', date: '20th Oct 2024', image: image5, category: 'Showcase' },
  ];

  return (
    <div className="min-h-screen bg-cover bg-fixed text-gray-900 font-sans">
      {/* Overlay for better readability */}
      <div className="bg-inherit bg-opacity-50 min-h-screen text-white">
      
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6 p-8 border-b border-gray-200">
          {/* Main Article */}
          <div className="md:w-2/3 bg-inherit bg-opacity-70 p-6 rounded-lg">
            <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-96 object-cover rounded-lg mb-4" />
            <h2 className="text-4xl font-bold leading-tight mb-2">{blogs[0].title}</h2>
            <p className="text-slate-950 mb-4">{blogs[0].date}</p>
            <p className="text-lg text-black mb-6">
              Discover the latest developments and upcoming features in I3M 2D Game Testing.
            </p>
            <button className="px-6 py-3 bg-i3m-purple text-black rounded-full">Continue Reading</button>
          </div>

          {/* Sidebar - Latest News */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-white">Latest News</h3>
            <ul className="space-y-4">
              {blogs.slice(1).map((post) => (
                <li key={post.id} className="flex items-start bg-white border-i3m-purple border-x-2 border-y-2  bg-opacity-70 p-4 rounded-lg">
                  <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <a href="#" className="text-lg font-semibold text-slate-950 hover:underline">{post.title}</a>
                    <p className="text-gray-700">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-8 text-black">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-inherit  bg-opacity-70 p-6 rounded-lg shadow-md">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-slate-950">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.date}</p>
                <p className="text-black mb-6">Brief insights on {blog.title.toLowerCase()}...</p>
                <a href="#" className="text-i3m-pink hover:underline font-medium">Read more</a>
              </div>
            ))}
          </div>
        </section>

        {/* A Word from Our CEO Section */}
        <section className="flex flex-col md:flex-row items-center bg-inherit bg-opacity-70 p-8 rounded-lg mx-4 my-8 border-x-4 border-y-4">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img src={ceoImage} alt="CEO" className="w-40 h-40 rounded-full object-cover shadow-md border-x-2 border-y-2 border-i3m-pink" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-3xl font-bold mb-4 text-slate-950">A Word from Our CEO</h3>
            <p className="text-gray-700 mb-6">
              Our CEO shares insights on how we are advancing secure, private, and effective solutions for modern challenges. 
              Discover our latest efforts to enhance the safety and experience of our community.
            </p>
            <button className="px-6 py-2 border border-i3m-pink text-black rounded-full font-medium hover:bg-slate-950 hover:text-white">
              Read the Story
            </button>
          </div>
        </section>

        {/* Trending Articles */}
        <section className="px-8 py-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-black">Trending Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className="bg-inherit bg-opacity-70 p-6 rounded-lg shadow-sm">
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-950">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.date}</p>
                <a href="#" className="text-i3m-pink hover:underline font-medium">Read more</a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="p-8 bg-inherit bg-opacity-70 mt-8">
          <p className="text-center text-slate-950">&copy; 2024 I3M Newsroom. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
