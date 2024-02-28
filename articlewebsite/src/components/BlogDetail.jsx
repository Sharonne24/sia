import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './supabase';

const BlogDetail = () => {
  const { postId } = useParams(); // blog post id from supabase
  const [blogDetails, setBlogDetails] = useState(null);
  const [error, setError] = useState('');