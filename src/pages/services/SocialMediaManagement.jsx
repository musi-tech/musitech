import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';

import logo1 from '../../assets/images/AAgamingg.png';
import logo2 from '../../assets/images/Aspire.png';
import logo3 from '../../assets/images/pdea2.svg';
import logo4 from '../../assets/images/hespro1.jpg';
import logo5 from '../../assets/images/hotel.jpg';
import logo6 from '../../assets/images/pdea3.svg';
import logo7 from '../../assets/images/cade.png';
import logo8 from '../../assets/images/puneridd.png';
import logo9 from '../../assets/images/shree.jpg';
import logo10 from '../../assets/images/city.JPG'
import logo11 from '../../assets/images/efent.png'
import logo12 from '../../assets/images/iyc.jpg'
import logo13 from '../../assets/images/sm.jpg'

const faqs = [
  { question: 'What is included in your social media management services?', answer: 'Our social media management services include content creation, scheduling, and engagement on various social platforms. We also provide analytics and reporting to track performance and optimize strategies.' },
  { question: 'How do you handle social media strategy?', answer: 'We develop a tailored social media strategy that aligns with your business goals and target audience. This includes content planning, platform selection, and performance metrics to ensure effective results.' },
  { question: 'Can you manage multiple social media accounts?', answer: 'Yes, we can manage multiple social media accounts across various platforms including Facebook, Twitter, Instagram, LinkedIn, and more. Our team ensures consistent branding and messaging across all channels.' },
  { question: 'How do you measure the success of social media campaigns?', answer: 'We use various metrics such as engagement rates, follower growth, website traffic, and conversion rates to measure the success of social media campaigns. Regular reports are provided to keep you informed of performance.' },
];

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SocialMediaManagementPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
              Boost Your Brand with Expert Social Media Management
            </h1>
            <p className="text-lg text-gray-700">
              Our social media management services help you build a strong online presence and engage with your audience effectively. We create and manage content, track performance, and optimize strategies to ensure your social media channels drive results.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaFacebookF className="text-blue-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Facebook Management</h2>
                  <p>
                    Managing and optimizing your Facebook presence, including content creation, scheduling, and engagement to grow your audience and enhance brand visibility.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaTwitter className="text-blue-400 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Twitter Management</h2>
                  <p>
                    Crafting and scheduling engaging tweets, interacting with followers, and tracking performance to increase engagement and reach on Twitter.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaInstagram className="text-pink-600 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Instagram Management</h2>
                  <p>
                    Creating visually appealing posts and stories, engaging with your audience, and analyzing metrics to enhance your brand's presence on Instagram.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaLinkedinIn className="text-blue-700 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">LinkedIn Management</h2>
                  <p>
                    Developing professional content, managing connections, and optimizing your LinkedIn profile to build a strong network and enhance your professional reputation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 mb-8">Trusted By</h2>
  <div className="relative">
    <Slider {...slickSettings} className="py-4">
      {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13].map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-4">
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-contain w-48 h-32" /* Adjusted width and height for proper scaling */
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                      <div>
                        {activeIndex === index ? (
                          <FaArrowUp className="text-green-500 text-xl" />
                        ) : (
                          <FaArrowDown className="text-green-500 text-xl" />
                        )}
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <a
              href="https://wa.me/7822857872" // Replace with your WhatsApp number
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with Us on WhatsApp
            </a>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SocialMediaManagementPage;
