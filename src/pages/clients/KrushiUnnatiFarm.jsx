import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const KrushiUnnatiMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        {/* Top Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            Digital Marketing Highlights at Krushi Unnati Farm
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Discover how our targeted digital marketing efforts elevate event bookings, enhance party organizing, and boost overall engagement at Krushi Unnati Farm.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
            {/* Example Metrics Updated for Krushi Unnati Farm */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-green-500">50+ Events</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Successfully Organized</p>
              <p className="text-sm text-gray-600 mt-2">
                From weddings to corporate gatherings, increasing event bookings through powerful online campaigns.
              </p>
            </motion.div>
            {/* Additional Metrics for Lead Conversion */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold text-green-500">3000+ Leads</h2>
              <p className="mt-4 text-lg font-medium text-gray-800">Generated Monthly</p>
              <p className="text-sm text-gray-600 mt-2">
                Focused campaigns to enhance visibility and attract new clientele for various farm events.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services and Event Management Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          {/* Detailed Event Management and Promotion */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Event Promotion & Management</h3>
            <p className="text-gray-700">
              Utilizing advanced digital strategies to market and manage diverse events at the farm, ensuring memorable experiences and maximum engagement.
            </p>
          </motion.div>

          {/* Customized Marketing for Special Occasions */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Customized Party Planning</h3>
            <p className="text-gray-700">
              Crafting unique marketing campaigns for birthdays, weddings, and special occasions to ensure high turnout and satisfaction.
            </p>
          </motion.div>

          {/* Awareness and Engagement */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Awareness and Engagement</h3>
            <p className="text-gray-700">
              Implementing targeted awareness campaigns to educate and engage potential customers about what Krushi Unnati Farm has to offer.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KrushiUnnatiMarketing;
