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