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
    MusiTech was founded by a group of tech enthusiasts with a vision to bridge the gap between academic rigor and real-world technology solutions. Since its inception, MusiTech has grown into a comprehensive digital solutions provider, delivering innovative and customized tech solutions that drive business growth. Our journey has been marked by our commitment to staying ahead of the technology curve and our unwavering dedication to client success.
    </p>
  </motion.div>
);

export default CompanyHistorySection;
