import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-text py-6">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-accent mb-4">MusiTech</h2>
          <p className="text-lg mb-4">Your comprehensive digital partner for growth and success.</p>
        </div>
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li><a href="https://facebook.com" aria-label="Facebook" className="text-accent hover:text-green-500"><FaFacebookF size={24} /></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter" className="text-accent hover:text-green-500"><FaTwitter size={24} /></a></li>
            <li><a href="https://linkedin.com" aria-label="LinkedIn" className="text-accent hover:text-green-500"><FaLinkedinIn size={24} /></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram" className="text-accent hover:text-green-500"><FaInstagram size={24} /></a></li>
          </ul>
        </div>
        <div>
          <p>&copy; 2024 MusiTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
