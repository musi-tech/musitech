import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/ass1.png';
import image2 from '../../assets/images/efents.png';
import image3 from '../../assets/images/hespros.png';
import image4 from '../../assets/images/krushis.png';
import image5 from '../../assets/images/linuxs.png';
import image6 from '../../assets/images/pdeas.png';
import image7 from '../../assets/images/note.png';

const projects = [
  {
    id: 1,
    name: 'Aspire Sports Club',
    image: image1,
    link: 'https://aspiresportsclub.com/',
  },
  {
    id: 2,
    name: 'Efent',
    image: image2,
    link: 'https://efent.in/',
  },
  {
    id: 3,
    name: 'Hespro Sports Club',
    image: image3,
    link: 'https://hespro.in/',
  },
  {
    id: 4,
    name: 'Krushi Unnati Farm',
    image: image4,
    link: 'https://krushiunnati.vercel.app/',
  },
  {
    id: 5,
    name: 'Linux Club',
    image: image5,
    link: 'https://linclub.vercel.app/',
  },
  {
    id: 6,
    name: 'PDEA COEM',
    image: image6,
    link: '#',
  },
  {
    id: 7,
    name: 'Note Vid',
    image: image7,
    link: 'https://notevid.vercel.app/',
  },
];

const ProjectCard = ({ project }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-500">
    <div className="relative bg-gray-900 group-hover:bg-green-500 transition-all duration-500">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
      >
        View Project
      </a>
    </div>
    <div className="p-4 bg-white rounded-b-xl group-hover:bg-green-100 transition-colors duration-500">
      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-all duration-300">{project.name}</h3>
    </div>
  </div>
);

const Portfolio = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card) => {
        const offset = card.getBoundingClientRect().top;
        const opacity = Math.min(1, 1 - (offset - window.innerHeight) / window.innerHeight);
        card.style.opacity = opacity;
        card.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Our Website Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pb-24">
          {projects.map((project) => (
            <div
              className="project-card transition-opacity duration-500"
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
