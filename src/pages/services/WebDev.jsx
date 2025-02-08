import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// Import images properly
import image1 from '../../assets/images/ass1.png';
import image2 from '../../assets/images/efents.png';
import image3 from '../../assets/images/hespros.png';
import image4 from '../../assets/images/krushif.png';
import image5 from '../../assets/images/linuxs.png';
import image6 from '../../assets/images/pdeas.png';
import image7 from '../../assets/images/note.png';

// Projects data moved outside component to prevent recreation
const projects = [
  {
    id: 1,
    name: 'Aspire Sports Club',
    image: image1,
    link: 'https://aspiresportsclub.com/',
    category: 'Sports',
    description: 'A modern sports club management platform'
  },
  {
    id: 2,
    name: 'Efent',
    image: image2,
    link: 'https://efent.in/',
    category: 'Events',
    description: 'Event management and booking platform'
  },
  {
    id: 3,
    name: 'Hespro Sports Club',
    image: image3,
    link: 'https://hespro.in/',
    category: 'Sports',
    description: 'Professional sports training and management'
  },
  {
    id: 4,
    name: 'Krushi Unnati Farm',
    image: image4,
    link: 'https://krushiunnati.vercel.app/',
    category: 'Agriculture',
    description: 'Smart farming solutions platform'
  },
  {
    id: 5,
    name: 'Linux Club',
    image: image5,
    link: 'https://linclub.vercel.app/',
    category: 'Technology',
    description: 'Open-source community platform'
  },
  {
    id: 6,
    name: 'PDEA COEM',
    image: image6,
    link: '#',
    category: 'Education',
    description: 'Educational institution website'
  },
  {
    id: 7,
    name: 'Note Vid',
    image: image7,
    link: 'https://notevid.vercel.app/',
    category: 'Productivity',
    description: 'Video note-taking application'
  },
];

// Separated ProjectCard component with proper error handling
const ProjectCard = React.memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
      <img
        src={imageError ? '/placeholder-image.jpg' : project.image}
        alt={project.name}
        onError={handleImageError}
        className="w-full h-full object-cover transform transition-transform duration-700 ease-out hover:scale-110"
        loading="lazy"
      />
      
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end p-6 bg-black bg-opacity-75"
      >
        <span className="text-green-400 text-sm font-medium mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 w-fit"
        >
          <span>View Project</span>
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Memoize categories to prevent unnecessary recalculation
  const categories = useMemo(() => 
    ['All', ...new Set(projects.map(p => p.category))],
    []
  );

  // Memoize filtered projects
  const filteredProjects = useMemo(() => 
    projects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter;
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    }),
    [filter, searchTerm]
  );

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600">Discover our latest web projects and creative works</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              aria-label="Search projects"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-600">No projects found matching your criteria</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;