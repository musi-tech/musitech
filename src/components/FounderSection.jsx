import React from 'react';
import { motion } from 'framer-motion';

// Sample image URL for the founder
const founderImage = require('../assets/images/Adi.PNG');

const FounderSection = () => (
  <motion.div
  className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 mx-4 lg:mx-16 p-8 bg-gray-200 shadow-2xl rounded-lg"


    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Text Section */}
    <div className="lg:w-1/2 lg:pr-8">
      <h2 className="text-5xl font-extrabold text-black mb-6">Meet Our Founder</h2>
      <p className="text-2xl font-semibold text-black-100 mb-2">Aditya Jadhav</p>
      <p className="text-lg text-gray-700 mb-6">
        As the Founder of MusiTech, I lead a vibrant team dedicated to propelling our clients into digital excellence. With a profound grasp of the digital landscape and an unwavering passion for innovation, I ensure that MusiTech stays ahead of the curve, setting trends and embracing the latest technologies.
      </p>
      <p className="text-lg text-gray-700">
        MusiTech has celebrated numerous achievements, including the launch of groundbreaking projects and the expansion of our service range. My vision for the future is clear: to harness cutting-edge technology and inventive strategies to deliver unmatched solutions that evolve with business needs.
      </p>
    </div>

    {/* Image Section */}
    <motion.div
      className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <img
        src={founderImage}
        alt="Aditya Jadhav"
        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-2xl object-cover border-4 border-white"
      />
    </motion.div>
  </motion.div>
);

export default FounderSection;
