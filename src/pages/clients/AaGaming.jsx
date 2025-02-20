import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const GamingMarketingStats = () => {
  return (
    <>
      <Navbar />
      <div className="bg-dark py-20">
        {/* Top Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
          Our Marketing Achievements at AA Gaming </h2>
          <p className="text-xl mt-4 text-gray-600">
            Discover how we amplify gaming experiences through targeted social media campaigns and robust digital strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            <motion.div
              className="bg-dark p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">1K+</h2>
              <p className="mt-4 text-lg font-medium text-gray-600">Social Media Posts</p>
              <p className="text-sm text-gray-500 mt-2">
                Engaging content tailored for gamers to boost interaction and follower growth.
              </p>
            </motion.div>
            <motion.div
              className="bg-dark p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">2M+</h2>
              <p className="mt-4 text-lg font-medium text-gray-600">Impressions Generated</p>
              <p className="text-sm text-gray-500 mt-2">
                Maximizing visibility through effective ad placements and content strategies.
              </p>
            </motion.div>
            <motion.div
              className="bg-dark p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">₹20 Lakhs+</h2>
              <p className="mt-4 text-lg font-medium text-gray-600">Revenue Generated</p>
              <p className="text-sm text-gray-500 mt-2">
                Driving significant revenue through strategic campaign execution and analytics.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Detailed Digital Marketing Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          {/* Comprehensive Strategy Overview Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-dark transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Comprehensive Social Media Strategies</h3>
            <p className="text-gray-600">
              Tailoring marketing efforts to captivate gaming audiences, enhancing user engagement and brand loyalty.
            </p>
          </motion.div>

          {/* Targeted Ad Campaigns Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-dark transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Effective Ad Targeting</h3>
            <p className="text-gray-600">
              Creating and managing dynamic ad campaigns focused on maximizing reach and conversion within the gaming community.
            </p>
          </motion.div>

          {/* Event Promotion and Management Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-dark transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Gaming Events Promotion</h3>
            <p className="text-gray-600">
              Leveraging digital platforms to promote gaming events and tournaments, ensuring optimal engagement and participant turnout.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamingMarketingStats;
