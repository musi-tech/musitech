import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

import aspireImg from "../../assets/images/Aspire.png";
import event2Img from "../../assets/images/cade.png";
import event3Img from "../../assets/images/logoo.jpg";
import event4Img from "../../assets/images/ku1.JPG";

const events = [
  { id: 1, image: aspireImg, title: "Aspire Sports Club", link: "https://www.instagram.com/aspiresportsclub/" },
  { id: 2, image: event4Img, title: "Krushi Unnati Farm", link: "https://www.instagram.com/krushi_unnati_farm/" },
  { id: 3, image: event3Img, title: "Efent Event Planner", link: "https://www.instagram.com/efent_/" },
  { id: 4, image: event2Img, title: "Cadency Academy", link: "https://www.instagram.com/cadencepune/" },
];

export default function Timeline() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-white">
        <h2 className="mb-12 text-4xl font-bold text-center text-black">
          Boost Your Brand with Expert Social Media Management
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute h-full transform -translate-x-1/2 border-l-2 border-green-500 left-1/2"></div>
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 w-8 h-8 bg-green-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">
                  {index + 1}
                </h1>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="order-1 w-5/12 p-6 bg-white rounded-lg shadow-xl flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="w-32 h-32 flex justify-center items-center bg-gray-100 rounded-lg p-2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                  {event.title}
                </h3>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
