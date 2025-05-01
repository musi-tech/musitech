import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaServicestack, FaUsers, FaBriefcase, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo.svg';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Bell animation effect that triggers automatically
  useEffect(() => {
    // Initial delay before first animation
    const initialTimeout = setTimeout(() => {
      setIsRinging(true);
      
      // Show tooltip after bell starts ringing
      setTimeout(() => {
        setShowTooltip(true);
      }, 500);
      
      // Hide tooltip and stop ringing after a few seconds
      setTimeout(() => {
        setShowTooltip(false);
        setIsRinging(false);
      }, 3000);
    }, 2000);
    
    // Set up recurring animations
    const animationInterval = setInterval(() => {
      setIsRinging(true);
      
      // Show tooltip after bell starts ringing
      setTimeout(() => {
        setShowTooltip(true);
      }, 500);
      
      // Hide tooltip and stop ringing after a few seconds
      setTimeout(() => {
        setShowTooltip(false);
        setIsRinging(false);
      }, 3000);
    }, 15000); // Repeat every 15 seconds
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <header className="p-6 bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="MusiTech Logo" className="h-[1.5rem]" />
        </Link>

        {/* Bell Notification for Mobile View Only - Hidden on Desktop */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Bell notification for mobile view */}
          <Link
            to="/services/mentorship-internship"
            className="relative group"
            onMouseEnter={() => {
              setIsRinging(true);
              setShowTooltip(true);
            }}
            onMouseLeave={() => {
              setIsRinging(false);
              setShowTooltip(false);
            }}
          >
            {/* Bell icon with animations */}
            <div className="relative">
              {/* Pulsing ring animation behind the bell */}
              <div className={`absolute -inset-1 rounded-full bg-green-300 opacity-75 ${isRinging ? 'animate-ping' : 'opacity-0'} transition-opacity duration-300`}></div>
              
              {/* Bell shake animation */}
              <FaBell 
                className={`text-2xl text-accent relative ${isRinging ? 'animate-bounce' : ''} transition-all duration-300`} 
              />
              
              {/* Badge */}
              <span className={`absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md ${isRinging ? 'animate-pulse' : ''}`}>
                2
              </span>

              {/* Popup tooltip */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black bg-opacity-80 text-white text-sm rounded-lg whitespace-nowrap z-50 ${
                  showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                } transition-all duration-300 ease-in-out`}
              >
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black bg-opacity-80 rotate-45"></div>
                <p>New mentorship opportunities!</p>
              </div>
            </div>
          </Link>

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-accent z-50">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

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
          
          {/* Notifications Bell with enhanced animations - Desktop Only */}
          <li className="ml-4 hidden lg:block">
            <Link
              to="/services/mentorship-internship"
              className="relative group"
              onMouseEnter={() => {
                setIsRinging(true);
                setShowTooltip(true);
              }}
              onMouseLeave={() => {
                setIsRinging(false);
                setShowTooltip(false);
              }}
            >
              {/* Bell icon with animations */}
              <div className="relative">
                {/* Pulsing ring animation behind the bell */}
                <div className={`absolute -inset-1 rounded-full bg-green-300 opacity-75 ${isRinging ? 'animate-ping' : 'opacity-0'} transition-opacity duration-300`}></div>
                
                {/* Bell shake animation */}
                <FaBell 
                  className={`text-2xl text-accent relative ${isRinging ? 'animate-bounce' : ''} transition-all duration-300`} 
                />
                
                {/* Badge */}
                <span className={`absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md ${isRinging ? 'animate-pulse' : ''}`}>
                  2
                </span>

                {/* Popup tooltip */}
                <div 
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-black bg-opacity-80 text-white text-sm rounded-lg whitespace-nowrap z-50 ${
                    showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  } transition-all duration-300 ease-in-out`}
                >
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black bg-opacity-80 rotate-45"></div>
                  <p>New mentorship opportunities!</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Add global styles for custom animations */}
      <style jsx>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-ring {
          animation: ring 0.5s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;