import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const MusiTechServices = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-20">
        <div className="text-center mb-16">
          <h2 className="text-black text-5xl font-extrabold leading-tight">
            Digital Marketing Services at Hespro Sports Club
          </h2>
          <p className="text-xl mt-4 text-gray-700">
            Discover how MusiTech enhances Hespro Sports Club's online presence and engagement through expert social media and digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
          <ServiceCard 
            title="Instagram Management"
            description="Daily content posting and engagement to build a strong brand presence and interact with the community."
            delay={0.2}
          />
          <ServiceCard 
            title="Post Boosting"
            description="Strategically boosting posts to reach a broader audience and increase visibility and interaction."
            delay={0.4}
          />
          <ServiceCard 
            title="Social Media Management"
            description="Comprehensive management of all social media channels to ensure consistency and quality in communications."
            delay={0.6}
          />
          <ServiceCard 
            title="Meta Ads"
            description="Leveraging Meta platforms for targeted ad campaigns designed to maximize lead generation and event participation."
            delay={0.8}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceCard = ({ title, description, delay }) => {
  return (
    <motion.div
      className="border rounded-lg p-8 text-center shadow-lg bg-white transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-green-500">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default MusiTechServices;
