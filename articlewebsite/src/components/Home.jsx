import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);