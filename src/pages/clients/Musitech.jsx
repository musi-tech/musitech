import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const MusiTechMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        {/* MusiTech SEO and Organic Growth Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            MusiTech’s Organic Growth & SEO Achievements
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Discover how our targeted SEO strategies enhance website visibility, increase organic traffic, and boost engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">500K+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Monthly Visitors</p>
              <p className="text-sm text-gray-600 mt-2">
                Significant growth in monthly visitors through effective on-page and off-page SEO techniques.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">30%+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Increase in Engagement</p>
              <p className="text-sm text-gray-600 mt-2">
                Enhancing user engagement with optimized content and interactive website features.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">Top 10</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Rankings for Key Terms</p>
              <p className="text-sm text-gray-600 mt-2">
                Achieving top search engine rankings for key industry terms through strategic content planning and keyword optimization.
              </p>
            </motion.div>
          </div>
        </div>
        {/* SEO Strategies Detail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          {/* SEO Overview Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Comprehensive SEO Management</h3>
            <p className="text-gray-700">
              Managing all aspects of SEO from technical audits to content creation to ensure top performance in search results.
            </p>
          </motion.div>

          {/* Content Optimization Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Content Optimization</h3>
            <p className="text-gray-700">
              Optimizing website content to ensure high relevance for targeted keywords, enhancing visibility and user experience.
            </p>
          </motion.div>

          {/* Link Building Strategies Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Strategic Link Building</h3>
            <p className="text-gray-700">
              Developing and executing a strategic link building plan to increase site authority and improve search engine ranking.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MusiTechMarketing;
