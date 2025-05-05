import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown, FaCode, FaRocket, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
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
import logo13 from '../../assets/images/sm.jpg'


const faqs = [
  { question: 'What is included in your web development services?', answer: 'Our web development services include everything from initial consultation to the final launch of your website. We cover UI/UX design, front-end and back-end development, and ongoing maintenance.' },
  { question: 'How long does it take to build a website?', answer: 'The timeline depends on the complexity of the project. Typically, a standard website takes between 4 to 8 weeks from start to finish.' },
  { question: 'Do you offer support after the website is live?', answer: 'Yes, we provide ongoing support and maintenance to ensure your website remains up-to-date and functional.' },
  { question: 'Can you help with SEO?', answer: 'Absolutely! We offer SEO optimization as part of our services to help your website rank higher in search engine results.' },
];

const WebDevelopmentPage = () => {
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
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Transform Your Business with Our Web Development Services
            </h1>
            <p className="text-lg text-gray-700">
              At MusiTech, we offer top-notch web development services designed to boost your online presence and enhance user experience. From custom websites to e-commerce platforms, our expert team is here to help you achieve your business goals.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaCode className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Custom Web Development</h2>
                  <p>
                    We create tailored web solutions to match your specific business needs. Our team of experts uses the latest technologies to build responsive and dynamic websites.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaRocket className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
                  <p>
                    Enhance your website's speed and performance. We optimize your site for faster load times and better user experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaLaptopCode className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Responsive Design</h2>
                  <p>
                    Ensure your website looks great on any device. We design and develop websites that are fully responsive and mobile-friendly.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaRegLightbulb className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Innovative Solutions</h2>
                  <p>
                    We provide creative and innovative solutions to help your business stand out. Our designs are modern and engaging, ensuring a great user experience.
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

          {/* Other sections */}

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

export default WebDevelopmentPage;


          
