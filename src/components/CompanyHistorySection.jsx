import React from 'react';
import { motion } from 'framer-motion';

const CompanyHistorySection = () => (
  <motion.div
    className="mb-16 px-6 py-12 bg-gradient-to-r from-green-50 via-white to-gray-300 shadow-2xl rounded-2xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-5xl font-extrabold text-black mb-8 text-center">
      Company History
    </h2>
    <p className="text-xl text-gray-700 mx-auto max-w-3xl text-center leading-relaxed">
      MusiTech was founded by a group of tech enthusiasts with a vision to bridge the gap between academic rigor and real-world technology solutions. Since its inception, MusiTech has grown into a comprehensive digital solutions provider, delivering innovative and customized tech solutions that drive business growth. Our journey has been marked by our commitment to staying ahead of the technology curve and our unwavering dedication to client success.
    </p>
  </motion.div>
);

export default CompanyHistorySection;
