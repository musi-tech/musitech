import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaUsers, FaBriefcase, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo.svg'; // Use ES6 import syntax

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-6 bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="MusiTech Logo" className="h-[1.5rem]" />
        </Link>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-accent z-50">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Menu items */}
        <ul className={`fixed top-0 right-0 w-full bg-secondary lg:bg-transparent lg:relative lg:flex lg:space-x-8 lg:items-center lg:justify-end transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 pt-16' : 'translate-x-full lg:translate-x-0'} ${isOpen ? 'flex flex-col items-center' : ''} shadow-lg lg:shadow-none`}>
          {/* Menu Links */}
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/about"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="mr-2" /> About
            </Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/services"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaServicestack className="mr-2" /> Services
            </Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/Blog"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaBookOpen className="mr-2" /> Blog
            </Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/our-team"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaUsers className="mr-2" /> Our Team
            </Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link
              to="/work-with-us"
              className="py-2 px-4 lg:py-0 lg:px-4 text-black hover:text-green-500 transition-colors duration-300 ease-in-out flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaBriefcase className="mr-2" /> Contact Us
            </Link>
          </li>

          {/* Call-to-Action Button */}
          <li className={`${isOpen ? 'text-center mb-6' : ''}`}>
            <Link
              to='/Services/Mentorship-Internship'
              className="bg-green-500 text-primary block py-2 px-4 rounded hover:bg-opacity-80 transition-opacity duration-300 ease-in-out lg:py-2 lg:px-4"
              onClick={() => setIsOpen(false)}
            >
              MusiTrix 1.0
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
