import React from 'react';
import { motion } from 'framer-motion';

// Sample image URL for the founder
const founderImage = 'https://media.licdn.com/dms/image/D4D03AQFf9YQf9CCjWQ/profile-displayphoto-shrink_400_400/0/1716027411481?e=1728518400&v=beta&t=GbdyvVw29a79kWaDnmBQSsGbYxbjBImFFvwYJsh7mfA'; // Replace with actual image URL

const FounderSection = () => (
  <motion.div
    className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="lg:w-1/2 lg:pr-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
      <p className="text-xl font-semibold text-gray-800 mb-2">Aditya Jadhav</p>
      <p className="text-lg text-gray-700 mb-4">
      As the Founder MusiTech, I leads a vibrant team dedicated to propelling our clients into digital excellence. With a profound grasp of the digital landscape and an unwavering passion for innovation, Aditya ensures that MusiTech stays ahead of the curve, setting trends and embracing the latest technologies.
      </p>
      <p className="text-lg text-gray-700">
      MusiTech has celebrated numerous achievements, including the launch of groundbreaking projects and the expansion of our service range. My vision for the future is clear: to harness cutting-edge technology and inventive strategies to deliver unmatched solutions that evolve with business needs.
      </p>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-center">
      <img
        src={founderImage}
        alt="Aditya Jadhav"
        className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-lg object-cover"
      />
    </div>
  </motion.div>
);

export default FounderSection;
