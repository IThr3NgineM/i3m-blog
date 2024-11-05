import React, { useState } from 'react';

const CreatePost = () => {
  const [activeTab, setActiveTab] = useState('addPost');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Physics');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Title and content are required.');
    } else {
      setError('');
      // Add new post to the list
      const newPost = { id: Date.now(), title, category, content, file, published: false };
      setPosts([...posts, newPost]);
      setTitle('');
      setCategory('Physics');
      setContent('');
      setFile(null);
      alert('Post created successfully!');
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handlePublish = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, published: !post.published } : post));
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setCategory(post.category);
    setContent(post.content);
    setFile(post.file);
    handleDelete(post.id); // Remove post temporarily to edit
    setActiveTab('addPost'); // Switch back to Add Post tab
  };

  return (
    <div className=" mx-auto bg-white shadow-lg p-6 rounded-lg">
      {/* Tabs for switching between Add Post and Manage Posts */}
      <div className="flex justify-start space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'addPost' ? 'text-i3m-pink border-b-2 border-i3m-pink' : 'text-gray-500'}`}
          onClick={() => setActiveTab('addPost')}
        >
          Add Post
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'managePosts' ? 'text-i3m-pink border-b-2 border-i3m-pink' : 'text-gray-500'}`}
          onClick={() => setActiveTab('managePosts')}
        >
          Manage Posts
        </button>
      </div>

      {/* Add Post Form */}
      {activeTab === 'addPost' && (
        <div>
          <h2 className="text-3xl font-bold text-start mb-6">Create Post</h2>
          {error && <div className="bg-red-500 text-white text-center p-2 rounded mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="Physics">Physics</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
            </select>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="w-full h-32 p-2 mb-4 border border-gray-300 rounded"
            ></textarea>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4"
            />
           <button
                type="submit"
                className="w-1/12 bg-i3m-purple hover:bg-i3m-pink text-white py-2 rounded-lg text-center flex justify-center"
                >
                Create
                </button>
          </form>
        </div>
      )}

      {/* Manage Posts Table */}
      {activeTab === 'managePosts' && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">Manage Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-600 text-center">No posts available. Please add a post first.</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id} className="text-center border-b border-gray-300">
                    <td className="py-2 px-4">{post.title}</td>
                    <td className="py-2 px-4">{post.category}</td>
                    <td className="py-2 px-4">
                      {post.published ? 'Published' : 'Draft'}
                    </td>
                    <td className="py-2 px-4 text-center ">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-i3m-main text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handlePublish(post.id)}
                        className={`px-3 py-1 rounded ${post.published ? 'bg-gray-500 text-white' : 'bg-green-500 text-white'}`}
                      >
                        {post.published ? 'Unpublish' : 'Publish'}
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

export default CreatePost;
