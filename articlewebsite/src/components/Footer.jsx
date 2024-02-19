import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-center mb-4">
        {/*Blog Logo */}
        <img src="/path/to/your/logo.png" alt="Blog Logo" className="mr-2" />
        {/* Blog Name */}
        <h2 className="text-lg font-bold">Your Blog Name</h2>
      </div>
      {/*blog name*/}
      <p className="text-sm">@ Created by Your Name</p>
      {/* About Us */}
      <p className="text-sm mb-4">Brief about us...</p>