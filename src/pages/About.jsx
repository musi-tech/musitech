import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompanyHistorySection from '../components/CompanyHistorySection.jsx';
import OurValuesSection from '../components/OurValuesSection.jsx';
import MissionSection from '../components/MissionSection.jsx';
import { motion } from 'framer-motion';

const AboutUs = () => (
  <>
    <Navbar />
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to MusiTech!
          </h1>
          <p className="text-lg text-gray-700">
           MusiTech is a digital-first agency helping businesses build powerful online presence through marketing, content, and tech solutions. We combine creativity with strategy to drive real growth, reach wider audiences, and turn visibility into success.
          </p>
        </motion.div>


   
        <CompanyHistorySection />
        <OurValuesSection />
        <MissionSection />
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUs;
