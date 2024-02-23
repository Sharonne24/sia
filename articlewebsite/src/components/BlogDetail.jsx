import React, { useState } from 'react';

const BlogDetail = ({ title, content, date, likes, dislikes, comments }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [comment, setComment] = useState('');
  const [blogComments, setBlogComments] = useState(comments);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
    // You can send an API request to update the likes count on the backend
  };

  const handleDislike = () => {
    setDislikeCount((prevCount) => prevCount + 1);
    // You can send an API request to update the dislikes count on the backend
  };

  const handleComment = () => {
    setBlogComments((prevComments) => [...prevComments, comment]);
    setComment('');
    // You can send an API request to add the comment to the backend
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Date Published: {date}</p>
      <p>{content}</p>
      
      <div>
        <button onClick={handleLike}>👍 {likeCount}</button>
        <button onClick={handleDislike}>👎 {dislikeCount}</button>
      </div>


export default BlogDetail;
