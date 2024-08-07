import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaUserTie, FaBookOpen, FaHandshake } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Slider from 'react-slick';

const faqs = [
  { question: 'What is included in your mentorship program?', answer: 'Our mentorship program includes one-on-one sessions with industry professionals, guidance on career development, and support for personal growth.' },
  { question: 'How can I apply for an internship?', answer: 'You can apply for an internship by submitting your resume through our application portal. Our team will review your application and contact you with further steps.' },
  { question: 'What are the benefits of participating in your programs?', answer: 'Participants gain valuable industry experience, receive mentorship from experts, and have the opportunity to network with professionals in their field.' },
  { question: 'Are the programs paid?', answer: 'Yes, both our mentorship and internship programs offer compensation based on the role and level of responsibility.' },
];

const testimonials = [
  { name: 'Jane Doe', role: 'Software Engineer', testimonial: 'The mentorship program at MusiTech was an invaluable experience. I gained insights and guidance that greatly contributed to my career development.' },
  { name: 'John Smith', role: 'Marketing Specialist', testimonial: 'The internship program was incredibly well-organized and provided real-world experience that helped me secure a full-time position.' },
  { name: 'Emily Johnson', role: 'Content Creator', testimonial: 'MusiTech’s programs are top-notch. The mentorship I received helped me refine my skills and the internship gave me hands-on experience in my field.' },
  { name: 'Michael Brown', role: 'Project Manager', testimonial: 'Participating in MusiTech’s internship program was a game-changer for my career. The experience and networking opportunities were exceptional.' },
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
              Empower Your Career with Our Mentorship & Internship Programs
            </h1>
            <p className="text-lg text-gray-700">
              At MusiTech, we provide exceptional mentorship and internship opportunities to help you grow professionally and achieve your career goals. Whether you're looking for guidance or hands-on experience, our programs are designed to support your success.
            </p>
          </motion.div>

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaUserTie className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Mentorship Programs</h2>
                  <p>
                    Our mentorship programs offer personalized guidance from industry experts to help you navigate your career path and achieve your goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaBookOpen className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
                  <p>
                    Gain valuable hands-on experience through our internship programs. Work on real projects and learn from experienced professionals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FaHandshake className="text-green-500 text-4xl mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Career Development</h2>
                  <p>
                    Benefit from career development workshops and resources to enhance your skills and improve your employability.
                  </p>
                </div>
              </div>
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

          <section className="py-16 px-6 lg:px-12">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
              <div className="max-w-2xl mx-auto">
                <Slider {...slickSettings} className="py-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4  rounded-lg mx-2"> {/* Added mx-2 */}
                      <p className="text-lg italic">"{testimonial.testimonial}"</p>
                      <p className="mt-4 font-semibold">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>

          <section className="py-12 px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Check Out Internship Program</h2>
            <a
              href="/internship-program" // Replace with the actual link to your internship program page
              className="relative inline-flex items-center justify-center w-auto min-w-[200px] h-12 p-7 bg-black text-white text-lg font-bold rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-in-out delay-200"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out delay-400"></span>
              <span className="relative z-10">Explore Internship Opportunities</span>
            </a>


          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MentorshipAndInternshipPage;
