import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Web Development',
    description: 'Building innovative websites that inspire and engage.',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/ZsKybphBTdC91mDqh59VEg',
    link: 'https://notevid.vercel.app/'
  },
  {
    title: 'Digital Marketing',
    description: 'Empowering brands with creative digital strategies.',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/3KJduscSQriZyzk6gQd7Zw',
    link: 'https://www.dropbox.com/scl/fo/72qzlsxjbh18ihdb4zbx7/AJKXPzYxGmpNVvrxgr0LUBQ?rlkey=a0g8x3xwlo59m0zq3ujtutxdv&dl=0'
  },
  {
    title: 'Content Creation',
    description: 'Transforming ideas into captivating visual stories.',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/Dp3uvAmcR1OkXVLne3DHmw',
    link: 'https://www.dropbox.com/scl/fo/uhbrneo9tefgsrf7n65tq/AGHDtkJ_UfS2UoM4zWVIjXA?rlkey=sup1qus9dg4c2ptny7jl66vwz&st=bukblvkk&dl=0'
  },
  {
    title: 'Social Media Management',
    description: 'Enhancing online presence through smart design and strategy.',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/A06-6ZIiRpylGpU_K0fLIA',
    link: 'https://www.dropbox.com/scl/fo/72qzlsxjbh18ihdb4zbx7/AJKXPzYxGmpNVvrxgr0LUBQ?rlkey=a0g8x3xwlo59m0zq3ujtutxdv&dl=0'
  },
  {
    title: 'Training & Internship',
    description: 'Empowering future leaders with practical skills and hands-on industry experience.',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/09LcPG7PRxGeZcvjVrMTNQ',
    link: '/services/mentorship-internship'
  }
];

const Projects = () => (
  <section className="pb-12 px-4">
    <h2 className="text-4xl font-bold text-accent mb-6 text-center">Our Projects</h2>
    <p className="text-lg mb-8 text-center">Explore our diverse range of projects</p>
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map(({ title, description, image, link }) => (
        <Link to={link} key={title} className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
          >
            <div
              className="group-hover:scale-110 w-full h-60 bg-cover duration-500"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:via-black/50 group-hover:to-transparent duration-500 z-10">
              <div className="flex flex-col items-center text-white">
                <span className="text-xl text-center font-bold">{title}</span>
                <p className="text-center mt-2">{description}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>
);

export default Projects;
