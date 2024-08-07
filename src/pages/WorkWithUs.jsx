import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WorkWithUsPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center relative pt-16 pb-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <div className="container mx-auto text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Work With Us
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We are always looking for talented and passionate individuals to join our team. If you're interested in working with us, please fill out the form linked below. We look forward to hearing from you!
            </p>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" // Replace with your Google Form link
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkWithUsPage;
