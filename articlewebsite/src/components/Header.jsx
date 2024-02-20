import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-red p-4">
      <h2 className="text-lg font-bold">CECE</h2>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;