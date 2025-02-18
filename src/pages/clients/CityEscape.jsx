import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const RealEstateMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-10 px-4">
        {/* Marketing Headline */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-black text-4xl font-extrabold leading-snug">
            Elevate Your Real Estate with CityEscape
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Harnessing cutting-edge digital marketing strategies to amplify property visibility, drive substantial lead generation, and accelerate sales conversions.
          </p>
        </div>

        {/* Marketing Metrics */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Awareness Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-green-500">2M+</h2>
            <p className="text-base font-semibold text-gray-800">Impressions Monthly</p>
            <p className="text-sm text-gray-500 mt-2">
              Broadening reach with meticulously planned content and advertising on key digital platforms.
            </p>
          </motion.div>

          {/* Lead Generation Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-green-500">15,000+</h2>
            <p className="text-base font-semibold text-gray-800">Leads Generated</p>
            <p className="text-sm text-gray-500 mt-2">
              Crafting targeted campaigns to captivate and convert prospective buyers.
            </p>
          </motion.div>

          {/* Conversion Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-green-500">₹100M+</h2>
            <p className="text-base font-semibold text-gray-800">Sales Closed</p>
            <p className="text-sm text-gray-500 mt-2">
              Utilizing strategic follow-ups and data-driven nurturing to seal deals efficiently.
            </p>
          </motion.div>
        </div>

        {/* Strategy Detail Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
          {/* Comprehensive Strategy Card */}
          <motion.div
            className="border p-6 rounded-lg text-center shadow-lg bg-white hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-green-500">Integrated Digital Marketing</h3>
            <p className="text-gray-700">
              A well-rounded approach encompassing SEO, PPC, and social media to maximize property exposure.
            </p>
          </motion.div>

          {/* Targeted Advertising Card */}
          <motion.div
            className="border p-6 rounded-lg text-center shadow-lg bg-white hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-green-500">Precision Targeted Ads</h3>
            <p className="text-gray-700">
              Pinpointing and engaging potential buyers through highly targeted and efficient advertising campaigns.
            </p>
          </motion.div>

          {/* Event Management and Promotion Card */}
          <motion.div
            className="border p-6 rounded-lg text-center shadow-lg bg-white hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-green-500">Event-Driven Marketing</h3>
            <p className="text-gray-700">
              Leveraging virtual and on-site events to create interactive and engaging experiences for prospects.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RealEstateMarketing;
