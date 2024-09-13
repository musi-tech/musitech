import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks.jsx';
import { motion } from 'framer-motion';

const PrivacyPolicySection = ({ title, children }) => (
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

const PrivacyPolicy = () => (
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700">
            At MusiTech, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <PrivacyPolicySection title="1. Introduction">
            <p className="text-gray-700 mb-4">
              Welcome to MusiTech ("we", "our", or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website musitech.in or use our services.
            </p>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="2. Information We Collect">
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Personal information (such as name, email address, phone number)</li>
              <li>Payment information</li>
              <li>Information provided during the internship application process</li>
              <li>Usage data and cookies</li>
            </ul>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="3. How We Use Your Information">
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Provide and maintain our services</li>
              <li>Process payments</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="4. Sharing Your Information">
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Service providers and business partners</li>
              <li>Legal and regulatory authorities</li>
              <li>Potential buyers or investors (in the event of a sale, merger, or acquisition)</li>
            </ul>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="5. Data Security">
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="6. Your Rights">
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict the processing of your information</li>
              <li>Data portability</li>
            </ul>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="7. Changes to This Policy">
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </PrivacyPolicySection>

          <PrivacyPolicySection title="8. Contact Us">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              MusiTech<br />
              [Address]<br />
              Email: [contact email]<br />
              Phone: [contact phone number]
            </p>
          </PrivacyPolicySection>
        </div>

        <SocialLinks />
      </div>
    </section>
    <Footer />
  </>
);

export default PrivacyPolicy;