import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6'; // Example placeholder for Twitter's "X" logo
import Logo from './../assets/images/logo.svg'; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="bg-secondary text-text py-6">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <img src={Logo} alt="MusiTech Logo" className="h-[1.5rem] mx-auto mb-4" />
          <p className="text-lg mb-4">Your comprehensive digital partner for growth and success.</p>
        </div>
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li><a href="https://www.facebook.com/profile.php?id=61563872920892" aria-label="Facebook" className="text-accent hover:text-green-500"><FaFacebookF size={24} /></a></li>
            <li><a href="https://x.com/musitech_" aria-label="Twitter" className="text-accent hover:text-green-500"><FaX size={24} /></a></li>
            <li><a href="https://www.linkedin.com/company/musitech-in/posts/?feedView=all" aria-label="LinkedIn" className="text-accent hover:text-green-500"><FaLinkedinIn size={24} /></a></li>
            <li><a href="https://www.instagram.com/musitech_in?igsh=NndncTA3aHYxZHJk" aria-label="Instagram" className="text-accent hover:text-green-500"><FaInstagram size={24} /></a></li>
          </ul>
        </div>
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li><a href="/terms-and-conditions" className="hover:text-green-500">Terms of Use</a></li>
            <li><a href="/contact-us" className="hover:text-green-500">Contact Us</a></li>
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
