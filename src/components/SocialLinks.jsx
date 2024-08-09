// components/SocialLinks.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => (
  <section className="bg-secondary py-8 my-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold text-accent mb-4">Follow Us On</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/company/musitech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-gray-700 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/musitech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-gray-700 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com/musitech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-gray-700 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="mailto:contact@musitech.com"
          className="text-accent hover:text-gray-700 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  </section>
);

export default SocialLinks;
