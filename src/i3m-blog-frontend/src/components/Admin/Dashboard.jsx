import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import ApprovePost from './ApprovePost';
import Author from './Author';
import { FiPower } from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('CreatePost');
  const navigate = useNavigate();
  const user = {
    name: 'Admin User',
    avatar: 'https://via.placeholder.com/40', 
  };

  const handleLogout = () => {
    navigate('/')
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col py-4 px-6">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <nav className="space-y-4">
          <button
            className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'Authors' ? 'bg-i3m-purple' : 'hover:bg-i3m-pink'
            }`}
            onClick={() => setActiveTab('Authors')}
          >
            Authors
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'CreatePost' ? 'bg-i3m-purple' : 'hover:bg-i3m-pink'
            }`}
            onClick={() => setActiveTab('CreatePost')}
          >
            Posts
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'ApprovePost' ? 'bg-i3m-purple' : 'hover:bg-i3m-pink'
            }`}
            onClick={() => setActiveTab('ApprovePost')}
          >
            Approve/Decline Post
          </button>
        </nav>
      </aside>

        {/* Main Content */}
      <main className="flex-1 p-8">
         {/* Header */}
         <header className="flex justify-between items-center mb-8 bg-white shadow-lg p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <img src={user.avatar} alt="User avatar" className="w-10 h-10 rounded-full" />
            <span className="text-lg font-semibold">{user.name}</span>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700 focus:outline-none"
              title="Logout"
            >
              <FiPower size={24} />
            </button>
          </div>
        </header>

          {/* Dynamic Content */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {activeTab === 'Authors' && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Users</h2>
             
              <Author />
            </div>
          )}
          {activeTab === 'CreatePost' && (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Posts</h2>
              
              <CreatePost />
            </div>
          )}
          {activeTab === 'ApprovePost' && (
            <div>
              
              <ApprovePost />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
