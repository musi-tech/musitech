import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TeamCard from './TeamCard';

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
      style={{
        backgroundColor: '#1F2937', // Accent color
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaChevronLeft size={20} color="white" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
      style={{
        backgroundColor: '#1F2937', // Accent color
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaChevronRight size={20} color="white" />
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4, // Default to show 4 items
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1250, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobiles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-6 lg:px-12 bg-secondary relative">
      <motion.h2
        className="text-3xl font-bold text-accent mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <div className="relative">
        <Slider {...settings}>
          {members.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              linkedin={member.linkedin}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
