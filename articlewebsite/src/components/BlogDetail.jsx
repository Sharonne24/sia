import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './supabase';

const BlogDetail = () => {
  const { postId } = useParams(); // blog post id from supabase
  const [blogDetails, setBlogDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the details of the specific blog post using Supabase ID
    const fetchBlogDetails = async () => {
      try {
        const { data, error } = await supabase.from('blogs').select().eq('id', postId);

        if (error) {
          setError('Failed to fetch blog details. Please try again.');
        } else {
          // Set the blog details in the local state
          setBlogDetails(data[0]);
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError('An unexpected error occurred. Please try again.');
      }
    };
    fetchBlogDetails();
  }, [postId]);

  // Render the blog details
  return (
    <div>
      {blogDetails ? (
        <>
          <h2>{blogDetails.title}</h2>
          <img src={blogDetails.imageUrl} alt={blogDetails.title} />
          <p>{blogDetails.content}</p>
          <p>Created At: {blogDetails.createdAt}</p>
          <p>Category: {blogDetails.category}</p>
          <p>Author: {blogDetails.authorName}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BlogDetail;
