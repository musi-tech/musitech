import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const MarketingStats = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        {/* Top Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            Digital Marketing Success at Cadence Academy
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Dive into our strategic exploits as we propel Cadence Academy through targeted digital marketing campaigns focusing on events, admissions, promotions, and conversions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            {/* Leads Generated */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">45,000+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Leads Generated</p>
              <p className="text-sm text-gray-600 mt-2">
                Utilizing state-of-the-art digital tactics to enhance lead generation for admissions and special events.
              </p>
            </motion.div>
            {/* Audience Reach */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">15M+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Audience Reached</p>
              <p className="text-sm text-gray-600 mt-2">
                Expanding our digital footprint to maximize audience reach and drive awareness across multiple platforms.
              </p>
            </motion.div>
            {/* Sales Generated */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">₹1 Crore+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Revenue in 6 Months</p>
              <p className="text-sm text-gray-600 mt-2">
                Achieving significant sales milestones by leveraging comprehensive marketing strategies and data-driven insights.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Detailed Digital Marketing Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          {/* Comprehensive Strategy Overview Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Integrated Digital Approach</h3>
            <p className="text-gray-700">
              Employing a synchronized digital approach to marketing that encompasses social media, SEO, content marketing, and direct email campaigns.
            </p>
          </motion.div>

          {/* Targeted Ad Campaigns Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Precision Targeted Campaigns</h3>
            <p className="text-gray-700">
              Crafting precision-targeted ad campaigns that are strategically designed to boost admissions and event participation while optimizing conversion rates.
            </p>
          </motion.div>

          {/* Event Promotion and Management Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Advanced Event Marketing</h3>
            <p className="text-gray-700">
              Using advanced digital tools and platforms to promote and manage Cadence Academy’s events, ensuring high visibility and engagement.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketingStats;
