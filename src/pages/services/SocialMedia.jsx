import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InstagramProfiles = () => {
  const profiles = [
    { name: "Aspire Sports Club", handle: "aspiresportsclub", img: require("../../assets/images/Aspire.png") },
    { name: "Efent", handle: "efent_", img: require("../../assets/images/logoo.jpg") },
    { name: "Cadence Academy", handle: "cadencepune", img: require("../../assets/images/cade.png") },
    { name: "Krushi Unnati Farm", handle: "krushi_unnati_farm", img: require("../../assets/images/ku1.JPG") },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden relative px-8 py-4">
        {/* Floating Background Effects */}
        <motion.div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl" />
        <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl" />

        {/* Page Title & Description */}
        <div className="text-center mb-20">
  <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
    Boost Your Brand with Expert Social Media Management
  </h1>
  <p className="text-lg md:text-xl text-gray-400 font-medium">
    Maximize your online presence with our professional social media management services. 
    We create engaging content, grow your audience, and enhance brand visibility across platforms.
  </p>
</div>


        {/* Profile Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={`https://www.instagram.com/${profile.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transform transition-all duration-500 flex flex-col items-center"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Profile Image with Green Hover Effect */}
              <motion.div
                className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-[3px] border-gray-300 shadow-lg transition-transform duration-500 group-hover:scale-105 bg-white flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1, boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.8)" }} // Green glow effect
              >
                <motion.img
                  src={profile.img}
                  alt={`${profile.name} Instagram`}
                  className="w-[80%] h-[80%] object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                />
              </motion.div>

              {/* Instagram Name Overlay with Green Hover Effect */}
              <motion.div
                className="mt-3 bg-gray-900 bg-opacity-10 backdrop-blur-md px-4 py-2 rounded-lg shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.8)", color: "white" }} // Green effect
              >
                <h2 className="text-gray-900 text-sm md:text-base font-semibold text-center group-hover:text-white transition-colors duration-300">
                  {profile.name}
                </h2>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default InstagramProfiles;
