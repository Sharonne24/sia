import React, { useState } from 'react';

const BlogDetail = ({ title, content, date, likes, dislikes, comments }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [comment, setComment] = useState('');
  const [blogComments, setBlogComments] = useState(comments);

export default BlogDetail;
