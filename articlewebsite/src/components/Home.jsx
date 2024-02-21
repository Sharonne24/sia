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

  // top posts based on likes
  const topPostsBasedOnLikes = blogs
    .slice() // Create a copy of blogs array to avoid modifying the original
    .sort((a, b) => b.likes - a.likes) // Sort by likes in descending order
    .slice(0, 4); // Get the top 4 posts

// Get unique categories
const categories = Array.from(new Set(blogs.flatMap((blog) => blog.categories)));

