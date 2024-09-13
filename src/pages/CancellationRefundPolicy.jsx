import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks.jsx';
import { motion } from 'framer-motion';

const PolicySection = ({ title, children }) => (
  <motion.section
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    {children}
  </motion.section>
);

const CancellationAndRefundPolicy = () => (
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
            Cancellation and Refund Policy
          </h1>
          <p className="text-lg text-gray-700">
            At MusiTech, we strive to ensure your satisfaction with our services. This policy outlines our approach to cancellations and refunds.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <PolicySection title="1. Digital Marketing and Web Development Services">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1. Cancellation</h3>
            <p className="text-gray-700 mb-4">
              Clients may cancel services at any time by providing written notice to our customer support team.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2. Refunds</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Full refund if cancelled within 24 hours of purchase.</li>
              <li>50% refund if cancelled within 7 days of purchase.</li>
              <li>No refund for cancellations after 7 days of purchase or if work has already commenced.</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. Internship Program">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1. Cancellation</h3>
            <p className="text-gray-700 mb-4">
              Participants may cancel their enrollment in the internship program by providing written notice to our program coordinator.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2. Refunds</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Full refund if cancelled at least 14 days before the program start date.</li>
              <li>50% refund if cancelled between 7-13 days before the program start date.</li>
              <li>No refund for cancellations within 7 days of the program start date or after the program has begun.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Exceptional Circumstances">
            <p className="text-gray-700 mb-4">
              In cases of unexpected serious illness or force majeure events, we may consider refunds on a case-by-case basis. Please contact our customer support team with any such requests.
            </p>
          </PolicySection>

          <PolicySection title="4. Refund Process">
            <p className="text-gray-700 mb-4">
              Approved refunds will be processed within 14 business days using the original payment method. Please note that bank transfer fees or other transaction costs may be deducted from the refund amount.
            </p>
          </PolicySection>

          <PolicySection title="5. Non-refundable Items">
            <p className="text-gray-700 mb-4">
              Certain fees, such as registration fees or administrative costs, may be non-refundable. These will be clearly communicated at the time of purchase.
            </p>
          </PolicySection>

          <PolicySection title="6. Quality Guarantee">
            <p className="text-gray-700 mb-4">
              If you are unsatisfied with the quality of our services, please contact us within 30 days of service completion. We will work with you to address your concerns and may offer partial or full refunds at our discretion.
            </p>
          </PolicySection>

          <PolicySection title="7. Changes to This Policy">
            <p className="text-gray-700 mb-4">
              We reserve the right to modify this Cancellation and Refund Policy at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review this policy periodically.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact Us">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Cancellation and Refund Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              MusiTech<br />
              [Address]<br />
              Email: [contact email]<br />
              Phone: [contact phone number]
            </p>
          </PolicySection>
        </div>

        <SocialLinks />
      </div>
    </section>
    <Footer />
  </>
);

export default CancellationAndRefundPolicy;