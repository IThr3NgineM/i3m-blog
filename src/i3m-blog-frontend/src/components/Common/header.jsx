import React, { useState } from 'react';
import Logo from "../../assets/IThreeM.png";
import AllContent from "../Tabs/Allcontent";
import NewsContent from "../Tabs/News";
import EventsContent from "../Tabs/Events";
import ReleasesContent from "../Tabs/Release";
// import ShowcaseContent from "../Tabs/Showcase";

const Header = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-300 bg-inherit">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="I3M Logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold text-gray-800">Newsroom</h1>
        </div>

        {/* Tab Navigation */}
        <nav className="space-x-4">
          {["All", "News", "Events", "Releases", "Showcase"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-gray-600 hover:text-gray-900 font-medium ${
                activeTab === tab ? "text-gray-900 font-semibold border-b-2 border-gray-800" : ""
              } px-3 py-1`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Admin Login and Subscribe */}
        <div className="flex items-center space-x-4">
          {/* Subscribe Button */}
          <button 
            onClick={togglePopup} 
            className="px-4 py-2 rounded-md bg-i3m-purple text-white hover:bg-i3m-pink"
          >
            Subscribe
          </button>
          {/* Admin Login Button */}
          <button className="px-4 py-2 rounded-md bg-i3m-pink text-white hover:bg-i3m-purple">
            Login
          </button>
        </div>
      </header>

      {/* Content Based on Active Tab */}
      <div className="p-6 text-black">
        {activeTab === "All" && <AllContent />}
        {activeTab === "News" && <NewsContent />}
        {activeTab === "Events" && <EventsContent />}
        {activeTab === "Releases" && <ReleasesContent />}
        {/* {activeTab === "Showcase" && <ShowcaseContent />} */}
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h2>
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
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            <button 
              onClick={togglePopup} 
              className="mt-4 text-gray-800 hover:text-gray-600"
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
