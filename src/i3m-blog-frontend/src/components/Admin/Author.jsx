import React, { useState } from 'react';

const Authors = () => {
  const [activeTab, setActiveTab] = useState('addUser');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: 'Admin',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      image: e.target.files[0], 
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }

    // Add user to the list (you can replace this with actual backend API call)
    setUsers([...users, newUser]);
    setNewUser({ username: '', email: '', password: '', passwordConfirmation: '', role: 'Author', image: null });
    alert('User added successfully');
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    setNewUser(userToEdit);
    setActiveTab('addUser');
    handleDeleteUser(index);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Tab Navigation */}
      <div className="flex justify-start space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'addUser' ? 'bg-i3m-pink text-white' : 'bg-gray-200 text-i3m-pink'}`}
          onClick={() => setActiveTab('addUser')}
        >
          Add User
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'manageUsers' ? 'bg-i3m-pink text-white' : 'bg-gray-200 text-i3m-pink'}`}
          onClick={() => setActiveTab('manageUsers')}
        >
          Manage Users
        </button>
      </div>

      {/* Add User Form */}
      {activeTab === 'addUser' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-start">Create Admin User</h2>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={newUser.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password Confirmation</label>
              <input
                type="password"
                name="passwordConfirmation"
                value={newUser.passwordConfirmation}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Role</label>
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              >
                <option value="Author">Author</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Upload Profile Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="bg-i3m-purple text-white px-4 py-2 rounded">
              Save User
            </button>
          </form>
        </div>
      )}

      {/* Manage Users List */}
      {activeTab === 'manageUsers' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Manage Users</h2>
          {users.length === 0 ? (
            <p className="text-gray-600 text-center">No users available. Please add users first.</p>
          ) : (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Username</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Role</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="text-center border-b">
                    <td className="py-2">{user.username}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">{user.role}</td>
                    <td className="py-2">
                      <button
                        onClick={() => handleEditUser(index)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Authors;
