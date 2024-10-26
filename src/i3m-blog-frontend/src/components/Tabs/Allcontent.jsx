import React from 'react';
import image1 from "../../assets/cardImage1.jpg";
import image2 from "../../assets/cardImage1.jpg";
import image3 from "../../assets/cardImage1.jpg";
import image4 from "../../assets/cardImage1.jpg";
import image5 from "../../assets/cardImage1.jpg";
import highlightImage from "../../assets/Community1.png"; // Replace with the correct image for the highlighted section

const HomePage = () => {
  const blogs = [
    { id: 1, title: 'I3M 2D Game Testing', date: '20th Oct 2024', image: image1, category: 'News' },
    { id: 2, title: 'Supported Platforms on I3M', date: '20th Oct 2024', image: image2, category: 'Report' },
    { id: 3, title: 'I3M Editor News By November', date: '20th Oct 2024', image: image3, category: 'Events' },
    { id: 4, title: 'I3M Developer Documentation', date: '20th Oct 2024', image: image4, category: 'Releases' },
    { id: 5, title: 'I3M Website 2024 Article', date: '20th Oct 2024', image: image5, category: 'Showcase' },
  ];

  const featuredPost = blogs[0];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">I3M Blogs</h1>
      </header>

      {/* Featured Section */}
      <section className="flex flex-col md:flex-row gap-6 px-8 py-6">
        <div className="md:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-bold">{featuredPost.title}</h2>
            <p className="text-gray-700 mt-2">{featuredPost.date}</p>
            <p className="text-gray-600 mt-4">Short description for the featured blog post here.</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Featured Posts</h3>
          <ul>
            {blogs.slice(1).map((post) => (
              <li key={post.id} className="mb-4">
                <a href="#" className="text-purple-600 hover:underline">{post.title}</a>
                <p className="text-gray-500">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-purple-700">{blog.date}</p>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="mt-2 text-gray-600">Brief description for the blog post here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Category Sections */}
      <section className="px-8 py-6">
        <h2 className="text-xl font-bold mb-4">Next in AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.slice(0, 2).map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-700 mt-2">{blog.date}</p>
                <p className="text-gray-600 mt-2">Additional description for this section.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Service Section */}
      <section className="px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center w-full">
            <h2 className="text-xl font-bold mr-4">Service</h2>
            <span className="flex-grow border-t-2 border-i3m-pink"></span>
          </div>
          <a href="#" className="text-i3m-pink hover:underline ml-4 whitespace-nowrap">See more service articles</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.slice(2).map((blog) => (
            <div key={blog.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-1/3 h-32 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-500">{blog.date}</p>
                <p className="text-gray-600 mt-2">Content for service-related articles.</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Highlighted Section */}
      <section className="flex flex-col md:flex-row items-center px-8 py-10 bg-i3m-purple rounded-lg my-8 shadow-lg max-w-5xl mx-auto">
        <div className="md:w-1/3">
          <img src={highlightImage} alt="Digital Marketing" className="rounded-lg w-full h-48 object-cover md:h-auto" />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-gray-800">An Introduction to Our Developer Documentation</h3>
          <p className="text-gray-700 mt-4">
            Learn the basics of building a game and understanding the basic of building a game and getting introduction to our game .
          </p>
          <button className="mt-6 px-4 py-2 bg-i3m-purple text-white font-semibold rounded shadow-lg hover:bg-i3m-pink">
            Download the Free Guide
          </button>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 my-6">
        <button className="px-4 py-2 bg-purple-500  text-white rounded-full">Previous</button>
        <button className="px-4 py-2 bg-purple-500  text-white rounded-full">1</button>
        <button className="px-4 py-2 bg-purple-700  text-white rounded-full">2</button>
        <button className="px-4 py-2 bg-purple-700 text-white rounded-full">Next</button>
      </div>
    </div>
  );
};

export default HomePage;
