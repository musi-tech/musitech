import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "MusiTech redefined our digital strategy, boosting engagement and ROI. Their innovative and strategic approach has made them indispensable partners in our growth.",
    author: "Mayuri gavhane, Director, Cadence Academy",
  },
  {
    text: "Partnering with MusiTech doubled our web traffic and expanded our customer base. Their targeted campaigns don’t just draw crowds; they draw customers.",
    author: "Dr. R. V. Patil, Principle, PDEACOEM",
  },
  {
    text: "MusiTech's content has transformed our brand story, captivating our audience with innovative designs and compelling visuals that resonate and engage",
    author: "Sanket Tilekar, Founder, Aspire sports club",
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
