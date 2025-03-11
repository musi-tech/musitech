import React from "react";
import { motion } from "framer-motion";

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

const Testimonials = () => (
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-accent"
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
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
