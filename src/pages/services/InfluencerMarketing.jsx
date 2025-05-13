import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaUserTie, FaChartLine, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';

// Move all imports to the top of the file
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
import logo13 from '../../assets/images/sm.png'
import logo14 from '../../assets/images/technova.png'


const faqs = [
  {
    question: 'How do you select influencers for my brand?',
    answer:
      'We identify influencers based on your brand goals, target audience, industry relevance, engagement rate, and content style. Our goal is to ensure authentic collaboration.',
  },
  {
    question: 'Can I approve influencers before a campaign goes live?',
    answer:
      'Absolutely. You’ll have complete transparency and approval rights before we initiate partnerships or campaigns.',
  },
  {
    question: 'Do you manage influencer contracts and payments?',
    answer:
      'Yes, we handle end-to-end management including outreach, contracts, content deadlines, and payment processing to ensure a smooth experience.',
  },
  {
    question: 'What kind of reporting will I receive?',
    answer:
      'You will get a detailed campaign report that includes impressions, reach, engagement, clicks, and ROI metrics.',
  },
];

const InfluencerMarketingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <>
      <Navbar />
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Amplify Your Reach with Influencer Marketing
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Leverage the voice of trusted influencers to drive authentic engagement, brand awareness, and meaningful conversions. We connect your business with the right creators to tell your story.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaInstagram className="text-pink-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Instagram Campaigns</h2>
              <p>Boost brand presence through curated influencer stories, reels, and posts that resonate with followers.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaYoutube className="text-red-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">YouTube Endorsements</h2>
              <p>Drive product awareness via long-form YouTube videos, unboxings, tutorials, and review content.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaUserTie className="text-blue-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Micro-Influencer Network</h2>
              <p>Work with niche influencers who bring loyal communities and high engagement within specific demographics.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Analytics & ROI</h2>
              <p>Track the real impact with deep analytics, performance metrics, and conversion tracking dashboards.</p>
            </div>
          </div>

          <section className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 mb-8">Trusted By</h2>
  <div className="relative">
    <Slider {...slickSettings} className="py-4">
      {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14].map((logo, index) => (
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

          {/* FAQ Section */}
          <section className="py-16 px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {activeIndex === index ? (
                      <FaArrowUp className="text-green-500" />
                    ) : (
                      <FaArrowDown className="text-green-500" />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* WhatsApp CTA */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Start Your Campaign</h2>
            <a
              href="https://wa.me/7822857872"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className="mr-2 text-2xl" />
              Chat with Our Team on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InfluencerMarketingPage;
