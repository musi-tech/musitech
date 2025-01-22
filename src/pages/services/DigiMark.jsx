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
            Our Marketing Achievements
          </h2>
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
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-5xl font-bold text-green-500">50 Lakhs+</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Sales in 3 Months</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          {/* Meta Ads Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Meta Ads</h3>
            <img
              src={require("../../assets/images/Meta-Logo.png")}
              alt="Meta Ads"
              className="h-12 mx-auto mb-4"
            />
            <p className="text-gray-700">
              We run targeted Facebook and Instagram ad campaigns to drive engagement, leads, and conversions.
            </p>
          </motion.div>

          {/* Google Ads Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Google Ads</h3>
            <img
              src={require("../../assets/images/goad.webp")}
              alt="Google Ads"
              className="h-12 mx-auto mb-4"
            />
            <p className="text-gray-700">
              Expertly crafted Google Ads campaigns to boost visibility, drive targeted traffic, and maximize ROI through effective keyword strategies and performance analytics.
            </p>
          </motion.div>

          {/* SEO Management Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">SEO Management</h3>
            <img
              src={require("../../assets/images/seom.png")}
              alt="SEO Management"
              className="h-12 mx-auto mb-4"
            />
            <p className="text-gray-700">
              Expert SEO services focused on improving search rankings and driving organic traffic to your website.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketingStats;
