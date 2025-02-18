import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const COEMMarketing = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            Digital Marketing Insights at PDEA's COEM
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Discover how our targeted digital marketing strategies boost event awareness, increase admissions, and enhance participant engagement.
          </p>
        </div>

        {/* Key Performance Metrics */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-10">
          {/* Awareness Campaigns */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-green-500">20+ Events</h2>
            <p className="mt-4 text-lg font-medium text-gray-800">Hosted Annually</p>
            <p className="text-sm text-gray-600 mt-2">
              Elevating awareness through dynamic event promotions, ensuring high visibility across multiple channels.
            </p>
          </motion.div>
          {/* Lead Generation */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-5xl font-bold text-green-500">5,000+</h2>
            <p className="mt-4 text-lg font-medium text-gray-800">Leads Generated</p>
            <p className="text-sm text-gray-600 mt-2">
              Targeted ad campaigns tailored to attract prospective students and conference attendees.
            </p>
          </motion.div>
          {/* Conversion Rates */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-green-500">30% Conversion</h2>
            <p className="mt-4 text-lg font-medium text-gray-800">Rate Increase</p>
            <p className="text-sm text-gray-600 mt-2">
              Effective conversion strategies that turn inquiries into enrollments and participants.
            </p>
          </motion.div>
        </div>

        {/* Strategy Detail Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20 my-10">
          {/* Overall Strategy Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Integrated Marketing Solutions</h3>
            <p className="text-gray-700">
              A full spectrum of digital marketing strategies focusing on admissions, events, and conferences, utilizing the latest trends and technologies.
            </p>
          </motion.div>

          {/* Krushi Unnati Farm Services Highlight */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Krushi Unnati Farm Collaboration</h3>
            <p className="text-gray-700">
              Leveraging services from Krushi Unnati Farm to provide unique experiential learning opportunities and promote green initiatives at events.
            </p>
          </motion.div>

          {/* Advanced Analytics Card */}
          <motion.div
            className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-500">Data-Driven Decision Making</h3>
            <p className="text-gray-700">
              Utilizing advanced analytics to refine marketing tactics, enhance user engagement, and measure the success of each campaign.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEMMarketing;
