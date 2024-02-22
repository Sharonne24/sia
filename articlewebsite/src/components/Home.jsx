import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend API or database
    // Replace 'fetchBlogsFromAPI' with your actual function
    const fetchBlogs = async () => {
      try {
        // Fetch blogs from the backend
        const response = await fetch('https://your-api-endpoint.com/api/blogs');
        const blogsData = await response.json();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Get top posts based on more likes and comments
  const topPosts = blogs
    .slice() // Create a copy of blogs array to avoid modifying the original
    .sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments)) // Sort by likes + comments
    .slice(0, 4); // Get the top 4 posts

  // Get unique categories
  const categories = Array.from(new Set(blogs.flatMap((blog) => blog.categories)));

  return (
    <div>
      <section>
        <h3>Top posts</h3>
        {topPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </section>

      <section>
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>All Blogs</h2>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </section>
    </div>
  );
};

export default Home;
