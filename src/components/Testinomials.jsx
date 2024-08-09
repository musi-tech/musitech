import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "MusiTech transformed our online presence with their innovative solutions. Their dedication and expertise made a significant impact on our business.",
    author: "Client Name",
  },
  {
    text: "The team at MusiTech exceeded our expectations. Their creative strategies and commitment to excellence are unmatched.",
    author: "Another Client",
  },
  {
    text: "The team at MusiTech exceeded our expectations. Their creative strategies and commitment to excellence are unmatched.",
    author: "Another Client",
  },
  // Add more testimonials as needed
];

const Testimonials = () => (
  <section className=" py-12">
    <div className="container mx-auto px-4">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-accent mb-7 text-center">Client Testimonials</h2>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 mb-6 lg:mb-0">
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-accent pl-4">
                "{testimonial.text}"
                <footer className="mt-4 text-gray-800 font-semibold">- {testimonial.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
