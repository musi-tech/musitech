import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaUserGraduate, FaChalkboardTeacher, FaArrowRight, FaClock, FaUsers, FaCertificate, FaLaptopCode, FaHandshake, FaRocket } from 'react-icons/fa';

const MentorPage = () => {
  const [hoverTraining, setHoverTraining] = useState(false);
  const [hoverWorkshop, setHoverWorkshop] = useState(false);

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4 text-center">Empower Your Tech Career</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            Learn from industry experts and gain real-world experience in tech technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path to Success</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Training & Internship Programs Section */}
          <Link 
            to="/services/mentorship-internship"
            className="block"
            onMouseEnter={() => setHoverTraining(true)}
            onMouseLeave={() => setHoverTraining(false)}
          >
            <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full ${hoverTraining ? 'transform -translate-y-2 shadow-xl' : ''}`}>
              <div className="bg-green-600 p-6 text-white">
                <FaUserGraduate className="text-5xl mb-2 mx-auto" />
                <h3 className="text-2xl font-bold text-center">Empower Your Career with Our Training & Internship Programs</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Gain practical skills and hands-on experience through our comprehensive training and internship opportunities tailored for the music technology industry.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <FaClock className="text-green-600 mr-2 mt-1" />
                    <span>3-6 month programs</span>
                  </div>
                  <div className="flex items-start">
                    <FaUsers className="text-green-600 mr-2 mt-1" />
                    <span>Small group training</span>
                  </div>
                  <div className="flex items-start">
                    <FaCertificate className="text-green-600 mr-2 mt-1" />
                    <span>Industry certification</span>
                  </div>
                  <div className="flex items-start">
                    <FaLaptopCode className="text-green-600 mr-2 mt-1" />
                    <span>Real project experience</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <span className={`inline-flex items-center text-green-600 font-semibold transition-all duration-300 ${hoverTraining ? 'translate-x-2' : ''}`}>
                    Explore Programs <FaArrowRight className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Guidance Workshop Programs Section */}
          <Link 
            to="/services/mentorship-guidence"
            className="block"
            onMouseEnter={() => setHoverWorkshop(true)}
            onMouseLeave={() => setHoverWorkshop(false)}
          >
            <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full ${hoverWorkshop ? 'transform -translate-y-2 shadow-xl' : ''}`}>
              <div className="bg-green-600 p-6 text-white">
                <FaChalkboardTeacher className="text-5xl mb-2 mx-auto" />
                <h3 className="text-2xl font-bold text-center">Empower Your Career with Our Guidance Workshop Programs</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Accelerate your professional growth with our expert-led workshops focused on career development, industry trends, and essential skills in music technology.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <FaHandshake className="text-green-600 mr-2 mt-1" />
                    <span>Industry networking</span>
                  </div>
                  <div className="flex items-start">
                    <FaRocket className="text-green-600 mr-2 mt-1" />
                    <span>Career acceleration</span>
                  </div>
                  <div className="flex items-start">
                    <FaUsers className="text-green-600 mr-2 mt-1" />
                    <span>Expert mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <FaCertificate className="text-green-600 mr-2 mt-1" />
                    <span>Workshop certificates</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <span className={`inline-flex items-center text-green-600 font-semibold transition-all duration-300 ${hoverWorkshop ? 'translate-x-2' : ''}`}>
                    Discover Workshops <FaArrowRight className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
       
     
      </div>
    </div>

    <Footer />
    </>
  );
};

export default MentorPage;