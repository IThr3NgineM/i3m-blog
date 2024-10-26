import React, { useState } from 'react';
import Logo from "../../assets/IThreeM.png";
import AllContent from "../Tabs/Allcontent";
import NewsContent from "../Tabs/News";
import EventsContent from "../Tabs/Events";
import ReleasesContent from "../Tabs/Release";
import ShowcaseContent from "../Tabs/Showcase";

const Header = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-purple-900 text-white">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="I3M Logo" className="w-12 h-12" />
        </div>

        {/* Tab Navigation */}
        <nav className="space-x-6">
          {["All", "News", "Events", "Releases", "Showcase"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-white px-4 py-2 ${
                activeTab === tab ? "bg-purple-700 rounded" : "hover:text-purple-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

         {/* Search and Subscribe */}
         <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-2 text-gray-900 pr-10"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </span>
          </div>

          {/* Subscribe Button */}
          <button 
            onClick={togglePopup} 
            className="bg-i3m-pink hover:bg-i3m-pink text-white font-semibold px-4 py-2 rounded"
          >
            Subscribe
          </button>
        </div>
      </header>

      {/* Content Based on Active Tab */}
      <div className="p-6">
        {activeTab === "All" && <AllContent />}
        {activeTab === "News" && <NewsContent />}
        {activeTab === "Events" && <EventsContent />}
        {activeTab === "Releases" && <ReleasesContent />}
        {activeTab === "Showcase" && <ShowcaseContent />}
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Subscribe</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-900 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button 
              onClick={togglePopup} 
              className="mt-4 text-purple-900 hover:text-purple-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
