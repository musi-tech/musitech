import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks.jsx';

const TermsAndConditionsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-12"
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
    <p className="text-gray-700 mb-4">Last updated: [Current Date]</p>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h3>
        <p className="text-gray-700">
          By accessing and using musitech.in, you accept and agree to be bound by these Terms and Conditions.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Services</h3>
        <p className="text-gray-700">
          MusiTech provides digital marketing, web development, and internship services. The specific details, deliverables, and costs of each service will be agreed upon separately.
        </p>
      </div>
      {/* Add more sections here */}
    </div>
  </motion.div>
);

const TermsAndConditions = () => (
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
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-700">
            Please read these terms and conditions carefully before using our services.
          </p>
        </motion.div>

        <TermsAndConditionsSection />
        <SocialLinks />
      </div>
    </section>
    <Footer />
  </>
);

export default TermsAndConditions;