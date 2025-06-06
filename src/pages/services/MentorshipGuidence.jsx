import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  FaUserTie,
  FaBookOpen,
  FaHandshake,
  FaCalendarAlt,
  FaClock,
  FaLaptop,
  FaCheckCircle
} from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "react-slick";

const faqs = [
  {
    question: "What is included in your mentorship program?",
    answer:
      "Our mentorship program includes one-on-one sessions with industry professionals, guidance on career development, and support for personal growth.",
  },
  {
    question: "How can I apply for an internship?",
    answer:
      "You can apply for an internship by submitting your resume through our application portal. Our team will review your application and contact you with further steps.",
  },
  {
    question: "What are the benefits of participating in your programs?",
    answer:
      "Participants gain valuable industry experience, receive mentorship from experts, and have the opportunity to network with professionals in their field.",
  },
  {
    question: "Are the programs paid?",
    answer:
      "Yes, both our mentorship and internship programs offer compensation based on the role and level of responsibility.",
  },
];

const testimonials = [
  {
    name: "Arnav Kulkarni",
    image: require("../../assets/images/arnav.jpeg"),
    role: "AWS Intern",
    testimonial:
      "The mentorship program at MusiTech was an invaluable experience. I gained insights and guidance that greatly contributed to my career development.",
  },
  {
    name: "Abhishek Kaware",
    image: require("../../assets/images/abhishek.jpeg"),
    role: "Web Developer Intern",
    testimonial:
      "The internship program was incredibly well-organized and provided real-world experience that helped me secure a full-time position.",
  },
  {
    name: "Pradip Girhe",
    image: require("../../assets/images/pradip.jpeg"),
    role: "AWS Intern",
    testimonial:
      "MusiTech's programs are top-notch. The mentorship I received helped me refine my skills and the internship gave me hands-on experience in my field.",
  },
  {
    name: " Bhushan Sawarkar",
    image: require("../../assets/images/bhushan.jpeg"),
    role: "Web Developer Intern",
    testimonial:
      "Participating in MusiTech's internship program was a game-changer for my career. The experience and networking opportunities were exceptional.",
  },
];

const MentorshipAndInternshipPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            Empower Your Career with Our Guidance Workshop Programs
            </h1>
            <p className="text-lg text-gray-700">
                At MusiTech, we provide career path with confidence through 
                our specialized workshops led by industry pioneers.
                Gain insights, build connections, and develop the skills 
                needed to thrive in today's competitive landscape
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Workshops</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <div className="mb-4">
                    <FaBookOpen className="text-green-500 text-4xl mb-2" />
                    <h2 className="text-2xl font-semibold mb-2">
                    Learn Digital Marketing & Start Earning 
                    </h2>
                    <p className="text-gray-600">
                    Master Mata Ads, build your first campaign, and start freelancing.{" "}
                    </p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Starting from 11th May 2025</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-500 mr-2" />
                    <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <FaLaptop className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Online</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <img
                      src={require("./../../assets/images/adii.jpg")}
                      alt="Instructor"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">
                        Aditya Jadhav
                      </p>
                      <p className="text-gray-500 text-sm">
                        Founder: Musitech, Meta Certified Professional
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-green-600 mb-4">
                    ₹49{" "}
                    <span className="text-gray-500 line-through text-lg ml-2">
                      ₹299
                    </span>
                  </div>

                  {/* Call-to-Action Button */}
                  <a
                    href="/InquiryForms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                      Enroll Now
                    </button>
                  </a>
                </div>
            
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <div className="mb-4">
                    <FaBookOpen className="text-green-500 text-4xl mb-2" />
                    <h2 className="text-2xl font-semibold mb-2">
                      Career Guidance Workshop
                    </h2>
                    <p className="text-gray-600">
                      This session will give you the clarity you need to make
                      confident decisions for your future.{" "}
                    </p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Starting from 20th May 2025</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-500 mr-2" />
                    <p className="text-gray-600">6:00 PM - 7:00 PM</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <FaLaptop className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Online</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <img
                      src={require("./../../assets/images/sd.jpg")}
                      alt="Instructor"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">
                        Satish Dhage
                      </p>
                      <p className="text-gray-500 text-sm">
                        Voice solution architect ( Tech Mahindra )
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-green-600 mb-4">
                    ₹49
                  </div>

                  {/* Call-to-Action Button */}
                  <a
                    href="/InquiryForm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                      Enroll Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Recently Completed Workshops Section */}
          <section className="py-16 px-6 lg:px-12 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recently Completed Workshops</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                  <div className="mb-4">
                    <FaBookOpen className="text-green-500 text-4xl mb-2" />
                    <div className="flex items-center mb-2">
                      <h2 className="text-2xl font-semibold mr-2">
                        Will AI/ML Replace Jobs?
                      </h2>
                      <FaCheckCircle className="text-green-500" />
                    </div>
                    <p className="text-gray-600">
                      An in-depth exploration of AI's impact on the future job market and how professionals can adapt to thrive in an AI-driven economy.
                    </p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Completed on 23rd April 2025</p>
                  </div>

                  <div className="flex items-center mb-2">
                    <FaClock className="text-gray-500 mr-2" />
                    <p className="text-gray-600">5:00 PM - 7:00 PM</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <FaLaptop className="text-gray-500 mr-2" />
                    <p className="text-gray-600">Online</p>
                  </div>

                  <div className="flex items-center mb-6">
                    <img
                      src={require("./../../assets/images/sd.jpg")}
                      alt="Instructor"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">
                        Satish Dhage
                      </p>
                      <p className="text-gray-500 text-sm">
                        Voice solution architect ( Tech Mahindra )
                      </p>
                    </div>
                  </div>
                  

                  {/* Workshop Highlights */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold mb-2">Workshop Highlights:</h3>
                    <ul className="text-gray-700">
                      <li className="flex items-start mb-1">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>AI's impact on traditional vs. emerging roles</span>
                      </li>
                      <li className="flex items-start mb-1">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Essential skills for an AI-driven workforce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>How to future-proof your career</span>
                      </li>
                    </ul>
                  </div>

                  {/* Join Waiting List Button */}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                      Join Waitlist for Next Session
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
         
          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
              <div className="max-w-2xl mx-auto">
                <Slider {...slickSettings} className="py-4">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg mx-2 bg-white shadow-lg"
                    >
                      {" "}
                      {/* Card with shadow */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        {/* Left Side: Image, Name, and Role */}
                        <div className="flex items-center md:flex-col md:items-start text-left">
                          <img
                            src={testimonial.image} // Now using the correct image from the array
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mr-4 md:mr-0"
                          />
                          <div className="ml-4 md:ml-0 md:mt-4">
                            <p className="font-semibold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>

                        {/* Right Side: Testimonial */}
                        <div className="col-span-2">
                          <p className="text-lg italic text-left md:text-center">
                            "{testimonial.testimonial}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MentorshipAndInternshipPage;