import React, { useState } from 'react';
import { supabase } from './supabase'; // Import the Supabase client instance

const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    imageUrl: '',
    content: '',
    createdAt: '',
    category: '',
    authorName: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  const handleImageUpload = async () => {
    try {
      // Use Supabase client to upload the image file
      const { data, error } = await supabase.storage.from('blog-images').upload('blog-image.png', imageFile, {
        
      });
      if (error) {
        setError('Failed to upload image. Please try again.');
      } else {
        // Set the imageUrl in the blogData after successful image upload
        setBlogData({ ...blogData, imageUrl: data[0].url });
    }
} catch (error) {
  console.error('Error uploading image:', error);
  setError('An unexpected error occurred. Please try again.');
}
};

const handleImageDelete = async () => {
// Implement image deletion logic based on your requirements
// You might need to store the image metadata in the database for proper deletion
setBlogData({ ...blogData, imageUrl: '' });
};
const handleBlogUpload = async () => {
    try {
      // Use Supabase client to insert a new blog into the database
      const { data, error } = await supabase.from('blogs').insert([blogData]);

      if (error) {
        setError('Failed to upload blog. Please try again.');
      } else {
        // Clear form fields after successful blog upload
        setBlogData({
          title: '',
          imageUrl: '',
          content: '',
          createdAt: '',
          category: '',
          authorName: '',
        });
    });
    setImageFile(null);
    setError('');
  }
} catch (error) {
  console.error('Error uploading blog:', error);
  setError('An unexpected error occurred. Please try again.');
}
};
return (
    <div>
      <h2>Blog Form</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={blogData.imageUrl}
          onChange={(e) => setBlogData({ ...blogData, imageUrl: e.target.value })}
        />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <button onClick={handleImageUpload}>Upload Image</button>
        {blogData.imageUrl && <button onClick={handleImageDelete}>Delete Image</button>}
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={blogData.content}
          onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
        />
      </div>
      <div>
        <label>Created At (dd/mm/yy):</label>
        <input
          type="text"
          value={blogData.createdAt}
          onChange={(e) => setBlogData({ ...blogData, createdAt: e.target.value })}
        />
      </div>