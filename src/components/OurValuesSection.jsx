import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OurValuesSection = () => (
  <motion.div
    className="mb-12 px-6 py-8 bg-gray-50 shadow-md rounded-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
      Our Values
    </h2>
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-6">
      <motion.div
        className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
        <p className="text-base text-gray-600">
          We continuously push the boundaries of technology to deliver cutting-edge solutions.
        </p>
      </motion.div>
      <motion.div
        className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
        <p className="text-base text-gray-600">
          We uphold the highest standards of honesty and transparency in all our dealings.
        </p>
      </motion.div>
      <motion.div
        className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client-Centricity</h3>
        <p className="text-base text-gray-600">
          Our clients' success is our success. We are dedicated to understanding and meeting their needs.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

export default OurValuesSection;
