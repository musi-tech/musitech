import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks.jsx';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-white-900">
                <div className="container mx-auto p-4">
                    <motion.div
                        className="bg-gray-500 text-white rounded-lg shadow-lg flex flex-col md:flex-row"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        {/* Left Section - Form */}
                        <motion.div
                            className="w-full md:w-1/2 p-4 sm:p-6 md:p-8"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send us a message</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-400 mb-2" htmlFor="name">
                                        Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-400 mb-2" htmlFor="email">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-400 mb-2" htmlFor="phone">
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-400 mb-2" htmlFor="subject">
                                        Subject<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your subject"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-400 mb-2" htmlFor="message">
                                        Message<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="not-a-robot" className="mr-2" />
                                        <label className="text-gray-400" htmlFor="not-a-robot">
                                            I'm not a robot
                                        </label>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit <span className="ml-2">🚀</span>
                                </motion.button>
                            </form>
                        </motion.div>
                        {/* Right Section - Contact Info */}
                        <motion.div
                            className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-green-500 flex flex-col items-center justify-center"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="text-center">
                                <span className="text-4xl">📧</span>
                                <p className="text-lg sm:text-xl mt-2">contact@musitech.in</p>
                            </div>
                            <div className="flex mt-4 space-x-4">
                                <a href="#" className="text-white hover:text-gray-200">🎥</a>
                                <a href="#" className="text-white hover:text-gray-200">🔗</a>
                                <a href="#" className="text-white hover:text-gray-200">✈️</a>
                                <a href="#" className="text-white hover:text-gray-200">👾</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
                <SocialLinks />
            </div>

            <Footer />
        </>
    );
};

export default ContactUs;
