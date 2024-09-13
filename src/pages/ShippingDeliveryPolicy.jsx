import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks.jsx';

const ShippingDeliverySection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-12"
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping and Delivery Policy</h2>
    <p className="text-gray-700 mb-4">Last updated: [Current Date]</p>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Digital Services</h3>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">1.1. Delivery</h4>
        <p className="text-gray-700">Our digital marketing and web development services are delivered electronically. No physical shipping is involved.</p>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">1.2. Timeframe</h4>
        <p className="text-gray-700">Delivery timeframes for digital services will be specified in individual service agreements.</p>
      </div>
      {/* Add more sections here */}
    </div>
  </motion.div>
);

const ShippingDeliveryPolicy = () => (
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
            Shipping and Delivery Policy
          </h1>
          <p className="text-lg text-gray-700">
            Learn about our shipping and delivery processes for both digital and physical products.
          </p>
        </motion.div>

        <ShippingDeliverySection />
        <SocialLinks />
      </div>
    </section>
    <Footer />
  </>
);

export default ShippingDeliveryPolicy;