import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-center mb-4">
        {/*Blog Logo */}
        <img src="logo.png" alt="Blog Logo" className="mr-2" />
        {/* Blog Name */}
        <h2 className="text-lg font-bold">CECE</h2>
      </div>
      {/*blog name*/}
      <p className="text-sm">@cece enterprise</p>
      {/* About Us */}
      <p className="text-sm mb-4">About Us:
        Welcome to CECE, your go-to source for insightful articles, tips, and inspiration.
        We are passionate about technology, lifestyle, travel, creativity, and culture.
        and our mission is to provide valuable information, and share experiences.
        Explore our diverse range of content crafted to inform, entertain, educate. 
        We have something for everyone. Join us on this exciting journey, and feel free to reach out if you have
        any questions or suggestions!. Thank you for being part of our community!
                        - The CECE Team
</p>
      {/* Contact Us Section */}
      <div className="flex items-center">
        {/* Email */}
        <div className="mt-4">
        <p>Contact Us:</p>
        <a href="cece:your-email@gmail.com" className="text-blue-500 hover:underline">
            cece@your-email.com
        </a>
      </div>
        {/* Social Media Links */}
        <div className="flex space-x-2">
          <a href="/link-to-X" target="_blank" rel="noopener noreferrer">
            <img src="X-icon.png" alt="X" className="h-4 w-4" />
          </a>
          <a href="/link-to-instagram" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" className="h-4 w-4" />
            </a>
            <a href="/link-to-facebook" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" className="h-4 w-4" />
            </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;