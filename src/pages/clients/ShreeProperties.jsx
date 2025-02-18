import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const PropertyMarketingStats = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        {/* Top Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            Shree Properties Digital Marketing Performance
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Showcasing our digital strategies that enhance visibility & accelerate sales in real estate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">3,000+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Qualified Leads</p>
              <p className="text-sm text-gray-600 mt-2">
                Achieving quality leads with targeted digital campaigns focused on property sales.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">1.2M+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Views on Listings</p>
              <p className="text-sm text-gray-600 mt-2">
                Enhancing property visibility through optimized listing techniques and widespread digital outreach.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">₹80 Crores+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Revenue Generated</p>
              <p className="text-sm text-gray-600 mt-2">
                Driving significant sales results through strategic digital marketing campaigns.
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
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Integrated Marketing Approach</h3>
            <p className="text-gray-700">
              A complete and integrated approach to digital marketing, ensuring all aspects of property sales from lands to flats are well-promoted.
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
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Precision Targeting for Ads</h3>
            <p className="text-gray-700">
              Utilizing data-driven targeting to reach potential buyers on platforms like Google and Meta, optimizing both awareness and conversion rates.
            </p>
          </motion.div>

          {/* Conversion Optimization Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Conversion Optimization</h3>
            <p className="text-gray-700">
              Focusing on converting interest into action with effective CTA placements, landing pages, and follow-up strategies to close sales.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyMarketingStats;
