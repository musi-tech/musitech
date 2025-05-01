import React from 'react';
import { motion } from 'framer-motion';

const CompanyHistorySection = () => (
  <motion.div
    className="mb-16 px-6 py-4 bg-gradient-to-r from-green-50 via-white to-gray-200 shadow-2xl rounded-2xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-5xl font-extrabold text-black mb-8 text-center">
      Company History
    </h2>
    <div className="bg-white rounded-xl shadow-xl p-8 mb-16 transform transition-all duration-700 hover:shadow-2xl">
  <p className="text-lg text-gray-700 leading-relaxed">
    MusiTech was founded by a group of tech enthusiasts and creative thinkers who shared a vision of turning innovative ideas into tangible results for businesses. What began as a small passion project quickly evolved into a full-fledged agency as our team proved the value of blending technological innovation with marketing creativity. 
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mt-4">
    Over the years, MusiTech expanded its services to provide a comprehensive suite of digital solutions, including digital marketing, social media management, content creation, website development, and video production – all aimed at driving client success. Today, MusiTech stands as a trusted partner for organizations across industries, and we remain driven by the same spirit of innovation and commitment to impactful results that defined our beginning.
  </p>
</div>
  </motion.div>
);

export default CompanyHistorySection;
  {/* Main history text card */}
 
