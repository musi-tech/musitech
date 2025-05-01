import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OurValuesSection = () => (
  <motion.div
    className="mb-12 px-6 py-8 bg-gray-100 shadow-md rounded-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
      Who We Are
    </h2>
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-6">
      <motion.div
        className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-base text-gray-600">
        Our mission is to transform our clients’ visions into reality through innovative digital marketing, content creation, and technology solutions. Through a combination of creativity, expertise, and a deep commitment to excellence, we deliver strategies and content that drive growth, engage audiences, and achieve measurable results that truly matter in the real world. Above all, our clients’ success is the measure of our own success.        </p>
      </motion.div>
      <motion.div
        className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-base text-gray-600">
        Our vision is to become a global leader in harnessing technology and creativity to empower businesses worldwide. By pioneering innovative digital solutions, we seek to drive tangible success for our clients. In doing so, we aspire to create a positive real-world impact beyond the digital realm.        </p>
      </motion.div>
      
    </div>
  </motion.div>
);

export default OurValuesSection;
