import React from 'react';
import { motion } from 'framer-motion';

const CompanyHistorySection = () => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Company History</h2>
    <p className="text-lg text-gray-700 mx-auto max-w-3xl text-center">
      Founded in 2010, MusiTech started with a mission to transform digital experiences. Over the years, we have evolved into a leading digital solutions provider, handling projects of all sizes and complexities. From our humble beginnings to becoming a key player in the digital space, our journey has been marked by innovation, excellence, and client satisfaction.
    </p>
  </motion.div>
);

export default CompanyHistorySection;
