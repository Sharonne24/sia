import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="text-2xl font-bold">
        CECE
      </div>
      <nav className="flex space-x-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;