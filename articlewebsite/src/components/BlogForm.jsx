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
        cacheControl: '3600', // Set cache control for the image (in seconds)
      });