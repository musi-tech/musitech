import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ image, name, position, linkedin }) => (
  <motion.div
    className="w-80 rounded-lg border-2 border-accent bg-primary p-4 text-center shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <figure className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent bg-secondary">
      <img src={image} alt={name} className="h-full w-full rounded-full object-cover" />
    </figure>
    <h2 className="mt-4 text-xl font-bold text-accent">{name}</h2>
    <p className="mb-4 text-text">{position}</p>
    <div className="flex items-center justify-center">
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-accent px-4 py-2 text-primary hover:bg-opacity-80"
      >
        LinkedIn
      </a>
    </div>
  </motion.div>
);

export default TeamCard;
