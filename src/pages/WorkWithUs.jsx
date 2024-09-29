import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoLogoWhatsapp } from 'react-icons/io'; // Import the WhatsApp icon

const WorkWithUsPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center relative pt-16 pb-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h1>
          {/* Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* First Card: I want to work for Musitech */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">I Want to Work for Musitech</h2>
              <p className="text-gray-700 mb-4">
                Join Our Team of Creators! Musitech is always looking for passionate individuals who thrive in a dynamic, creative, and digital environment. Whether you specialize in videography, content creation, marketing, or digital strategy, we welcome innovative minds eager to make an impact.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfN1-3j4KLiE0PwYkYfbkhSgfv0WtKxnWKdjly8FdJdJPVzwA/viewform?usp=sf_link"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                                <IoLogoWhatsapp className="mr-2 text-2xl" />

                Contact Me
              </a>
            </motion.div>

            {/* Second Card: Onboard Musitech as your creative agency */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Onboard Musitech as Your Creative Agency</h2>
              <p className="text-gray-700 mb-4">
                Let's Grow Together! At Musitech, we specialize in delivering exceptional digital marketing, videography, and content creation services. We’ve helped sports clubs, educational institutions, and brands reach their goals with tailored strategies and high-quality content.
              </p>
              <a
                href="https://wa.me/917822827875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <IoLogoWhatsapp className="mr-2 text-2xl" />
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkWithUsPage;
