import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, imageUrl, date, author, description, postId }) => {
  return (
  <div className="blog-card">
  <img src={imageUrl} alt={title} className="blog-card-image" />
  <div className="blog-card-content">
    <h3 className="blog-card-title">{title}</h3>
    <p className="blog-card-date">Published on {date}</p>
    <p className="blog-card-author">By {author}</p>
    <p className="blog-card-description">{description}</p>
    <Link to={`/blog/${postId}`} className="blog-card-read-more">
      Read More
    </Link>
  </div>
</div>
);
};

export default BlogCard;