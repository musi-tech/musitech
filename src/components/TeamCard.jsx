import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ image, name, position, linkedin }) => (
  <motion.div
    className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5 rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className="group-hover:scale-110 w-full h-60 bg-cover duration-500"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-black/50 group-hover:to-transparent duration-500 z-10">
      <div className="flex flex-col items-center text-white">
        <span className="text-xl font-bold">{name}</span>
        <p className="mt-2">{position}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-accent text-primary rounded-full px-4 py-2 hover:bg-opacity-80"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </motion.div>
);

export default TeamCard;
