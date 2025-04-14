import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { FaCode, FaBullhorn, FaEdit, FaShareAlt, FaHandshake, FaStar } from 'react-icons/fa'; // Example icons

const servicesData = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'We build responsive and dynamic websites tailored to your needs, using the latest technologies and best practices.',
    link: '/services/web-development',
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description: 'Boost your online presence with our targeted marketing strategies, including SEO, PPC, and social media campaigns.',
    link: '/services/digital-marketing',
  },
  {
    icon: FaEdit,
    title: 'Content Creation',
    description: 'Engage your audience with high-quality content, including blog posts, videos, and infographics designed to drive traffic and conversions.',
    link: '/services/content-creation',
  },
  {
    icon: FaShareAlt,
    title: 'Social Media Management',
    description: 'Manage your social media profiles effectively with our comprehensive services, including content scheduling, audience engagement, and analytics.',
    link: '/services/social-media-management',
  },
  {
    icon: FaHandshake,
    title: 'Mentorship & Internship',
    description: 'Gain valuable industry experience and guidance through our mentorship and internship programs designed for aspiring professionals.',
    link: '/services/mentorship-internship',
  },
  {
    icon: FaStar,
    title: 'Influencer Marketing',
    description:
      'Boost your brand visibility by collaborating with top influencers in your niche, driving authentic engagement and audience trust.',
    link: '/services/influencer-marketing',
  }
];

const ServicesPage = () => (
  <>
    <Navbar />
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 mb-12">
          Discover the range of services we offer to help you achieve your business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default ServicesPage;
