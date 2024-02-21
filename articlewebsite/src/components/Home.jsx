import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Fetch blogs from the backend API
    // For simplicity, let's assume you have a function to fetch blogs
    
    const fetchBlogs = async () => {
      try {
        // Fetch blogs from backend
        const blogsData = await fetchBlogsFromAPI();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
