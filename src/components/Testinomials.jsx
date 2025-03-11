import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "MusiTech redefined our digital strategy, boosting engagement and ROI. Their innovative and strategic approach has made them indispensable partners in our growth.",
    author: "Mayuri Gavhane, Director, Cadence Academy",
  },
  {
    text: "Partnering with MusiTech doubled our web traffic and expanded our customer base. Their targeted campaigns don’t just draw crowds; they draw customers.",
    author: "Dr. R. V. Patil, Principal, PDEACOEM",
  },
  {
    text: "MusiTech's content has transformed our brand story, captivating our audience with innovative designs and compelling visuals that resonate and engage.",
    author: "Sanket Tilekar, Founder, Aspire Sports Club",
  },
  {
    text: "MusiTech boosted our online visibility, attracting more couples with expert digital marketing. Highly recommended!",
    author: "Sangram Jawalgekar – Pre-Wedding Studio",
  },
  {
    text: "MusiTech elevated my firm's digital presence, bringing in more client inquiries with their innovative strategies!",
    author: "Krushna Sanas – Architect",
  },
  {
    text: "MusiTech’s targeted campaigns increased our student enrollment and brand awareness. A truly game-changing partnership!",
    author: "Santoshi Suthar – Head Manager, Cadence Academy Pune",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-accent mb-8 text-center">
            Client Testimonials
          </h2>
        </motion.div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-accent mx-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-gray-700 italic text-lg">
                “{testimonial.text}”
              </blockquote>
              <footer className="mt-4 text-gray-900 font-semibold">
                - {testimonial.author}
              </footer>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
