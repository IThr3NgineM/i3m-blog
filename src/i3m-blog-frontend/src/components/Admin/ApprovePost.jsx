import React, { useState } from 'react';

const initialPosts = [
  { id: 1, title: 'I3M 2D Game Testing', status: 'Pending' },
  { id: 2, title: 'Supported Platforms on I3M', status: 'Pending' },
  { id: 3, title: 'New Features in I3M', status: 'Approved', message: 'Approved for publishing' },
  { id: 4, title: 'Issues in Beta Testing', status: 'Declined', message: 'Not meeting the guidelines' },
];

const ApprovePost = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) => {
    if (activeTab === 'Approved') return post.status === 'Approved';
    if (activeTab === 'Declined') return post.status === 'Declined';
    return post.status === 'Pending' ;
  }).filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

  const handleApprove = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, status: 'Approved', message } : post
      )
    );
    setSelectedPost(null);
    setMessage('');
  };

  const handleDecline = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, status: 'Declined', message } : post
      )
    );
    setSelectedPost(null);
    setMessage('');
  };

  return (
    <div className=" bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-start mb-6">Approve or Decline Posts</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-2 border border-gray-300 rounded"
      />

      {/* Tabs */}
      <div className="flex justify-start space-x-4 mb-6">
        {['All', 'Approved', 'Declined'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab ? 'text-i3m-pink border-b-2 border-i3m-pink' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Post List */}
      <ul className="space-y-4">
        {filteredPosts.map((post) => (
          <li key={post.id} className="flex justify-between items-center p-4 border border-gray-200 rounded">
            <div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-500">Status: {post.status}</p>
              {post.message && <p className="text-sm text-gray-400">Message: {post.message}</p>}
            </div>
            <div className="space-x-2">
              {post.status === 'Pending' && (
                <>
                  <button
                    onClick={() => {
                      setSelectedPost(post.id);
                      setMessage('');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPost(post.id);
                      setMessage('');
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  >
                    Decline
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Approval/Decline Message Input */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              {posts.find((post) => post.id === selectedPost).title}
            </h3>
            <textarea
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            <div className="flex justify-between">
              <button
                onClick={() => handleApprove(selectedPost)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Confirm Approval
              </button>
              <button
                onClick={() => handleDecline(selectedPost)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Confirm Decline
              </button>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovePost;
