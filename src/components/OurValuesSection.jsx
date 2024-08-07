import React from 'react';
import { motion } from 'framer-motion';

const OurValuesSection = () => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Values</h2>
    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-5 text-center lg:text-left">
      <div className="lg:w-1/3 mb-4 lg:mb-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
        <p className="text-lg text-gray-700">We continuously push the boundaries of technology to deliver cutting-edge solutions.</p>
      </div>
      <div className="lg:w-1/3 mb-4 lg:mb-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
        <p className="text-lg text-gray-700">We uphold the highest standards of honesty and transparency in all our dealings.</p>
      </div>
      <div className="lg:w-1/3">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Client-Centricity</h3>
        <p className="text-lg text-gray-700">Our clients' success is our success. We are dedicated to understanding and meeting their needs.</p>
      </div>
    </div>
  </motion.div>
);

export default OurValuesSection;
