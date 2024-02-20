import React from 'react';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';


const Home = ({ categories }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your API or any other data source
    // For now, let's assume you have a function to fetch blogs
    const fetchBlogs = async () => {
      try {
        const response = await fetch('api_endpoint_blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    // Call the fetchBlogs function
    fetchBlogs();
  }, []);

  
export default Home;
