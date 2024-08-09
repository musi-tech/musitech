import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-accent text-primary py-12 px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 lg:mb-6 text-center lg:text-left"
          >
            Your Digital Partner for Growth and Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg lg:text-xl mb-8 text-center lg:text-left max-w-lg"
          >
            Let's accelerate your business growth together! Your one-stop shop for all your digital needs.
          </motion.p>
          <div className="flex justify-center lg:justify-start">
            <a href="#services" className="bg-primary text-accent py-3 px-6 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition duration-300 flex items-center">
              Explore Our Services
              <FaArrowDown className="ml-2 text-xl" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="https://ideogram.ai/assets/image/lossless/response/9AkfSuVaRo6kkYbHUWy_YA" alt="Hero" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
