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
            Our Marketing Achievements at Aspire Sports Club
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Explore how we leverage comprehensive digital marketing strategies to boost sports coaching, enhance membership sign-ups, and promote various events effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">25,000+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Leads Generated</p>
              <p className="text-sm text-gray-600 mt-2">
                Generating leads through targeted campaigns for events and membership drives.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">10M+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Audience Reach</p>
              <p className="text-sm text-gray-600 mt-2">
                Expanding our reach with effective digital marketing to promote sports coaching and events.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">₹50 Lakhs+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Sales in 3 Months</p>
              <p className="text-sm text-gray-600 mt-2">
                Driving sales through strategic ad placements and robust marketing techniques.
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
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Comprehensive Digital Marketing</h3>
            <p className="text-gray-700">
              Implementing a holistic approach to digital marketing to cover all aspects of the sports club's operations, from coaching to events and membership drives.
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
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Targeted Ad Campaigns</h3>
            <p className="text-gray-700">
              Crafting targeted ad campaigns for Google and Meta platforms to maximize exposure and attract potential members and participants.
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
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Event Promotion and Management</h3>
            <p className="text-gray-700">
              Utilizing digital tools and social media to promote and manage sports events, ensuring high engagement and participation.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketingStats;
