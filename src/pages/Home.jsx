import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Testinomials from '../components/Testinomials.jsx';
import Slider from 'react-slick';

// Import your images
import logo1 from '../assets/images/AAgamingg.png';
import logo2 from '../assets/images/Aspire.png';
import logo3 from '../assets/images/pdea2.svg';
import logo4 from '../assets/images/hespro1.jpg';
import logo5 from '../assets/images/hotel.jpg';
import logo6 from '../assets/images/pdea3.svg';
import logo7 from '../assets/images/cade.png';
import logo8 from '../assets/images/puneridd.png';
import logo9 from '../assets/images/shree.jpg'
import logo10 from '../assets/images/city.JPG'
import logo11 from '../assets/images/efent.png'


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

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-primary text-text">
      <Navbar/>
      <Hero/>

      <main className="container mx-auto px-4 py-12" id='services'>
        <ServicesSection />
        <AboutUs />
        <WhyChooseUs />
        <Projects />
        <Testinomials />
        <section className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 mb-8">Trusted By</h2>
  <div className="relative">
    <Slider {...slickSettings} className="py-4">
      {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11].map((logo, index) => (
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
      </main>
      
      <Footer/>
    </div>
  );
};

export default Home;
