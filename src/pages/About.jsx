import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FounderSection from '../components/FounderSection.jsx';
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
            At MusiTech, we're dedicated to propelling our clients' businesses forward. As a leading firm based in Pune, Maharashtra, India, we specialize in Development, Digital Production, and Marketing. Our team is passionate about creating innovative solutions that amplify your brand's presence and drive extensive results.
          </p>
        </motion.div>


        <FounderSection />
        <CompanyHistorySection />
        <OurValuesSection />
        <MissionSection />
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUs;
