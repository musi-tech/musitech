import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-6 bg-secondary shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-accent">MusiTech</h1>
        <button onClick={toggleMenu} className="lg:hidden text-accent z-50">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
        <ul className={`fixed top-0 right-0 w-full bg-secondary lg:bg-transparent lg:relative lg:flex lg:space-x-8 lg:items-center lg:justify-end transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 pt-16' : 'translate-x-full lg:translate-x-0'} ${isOpen ? 'flex flex-col items-center' : ''} shadow-lg lg:shadow-none`}>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link to="/" className="block py-2 px-4 lg:py-0 lg:px-4 hover:text-accent" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link to="/about" className="block py-2 px-4 lg:py-0 lg:px-4 hover:text-accent" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link to="/services" className="block py-2 px-4 lg:py-0 lg:px-4 hover:text-accent" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link to="/our-team" className="block py-2 px-4 lg:py-0 lg:px-4 hover:text-accent" onClick={() => setIsOpen(false)}>Our Team</Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-4' : ''}`}>
            <Link to="/work-with-us" className="block py-2 px-4 lg:py-0 lg:px-4 hover:text-accent" onClick={() => setIsOpen(false)}>Work With Us</Link>
          </li>
          <li className={`${isOpen ? 'text-center mb-6' : ''}`}>
            <Link to="https://wa.me/7822857872" className="bg-green-500 text-primary block py-2 px-4 rounded hover:bg-opacity-80 lg:py-2 lg:px-4" onClick={() => setIsOpen(false)}>Let’s Talk 👋</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
