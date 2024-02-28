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