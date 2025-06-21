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
        <p className="text-base text-gray-600">Our mission is to empower businesses of all sizes to establish and grow their digital presence in today’s competitive market. We help brands reach wider audiences through strategic digital marketing, impactful content creation, and innovative tech solutions. At MusiTech, we are committed to turning online visibility into real-world success — because we believe every business deserves to be seen, heard, and remembered.       </p>
      </motion.div>
      <motion.div
        className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-base text-gray-600">At MusiTech, we believe that every business deserves a strong online presence — not just to survive, but to lead in today’s competitive market. As the digital space becomes essential for visibility, growth, and success, we aim to empower brands, products, and services to reach wider audiences through strategic online solutions. Our vision is to be the driving force behind this transformation, helping businesses grow digitally and thrive globally.      </p>
      </motion.div>
      
    </div>
  </motion.div>
);

export default OurValuesSection;
