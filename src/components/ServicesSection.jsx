import { motion } from 'framer-motion';
import { FaCode, FaBullhorn, FaPenNib, FaUsers, FaHandshake, FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaCode />, title: 'Web Development', description: 'Innovative web solutions tailored to your needs.', link: '/services/web-development', color: '#11BE86', hoverColor: '#0A8EA8' },
  { icon: <FaBullhorn />, title: 'Digital Marketing', description: 'Strategic marketing to elevate your online presence.', link: '/services/digital-marketing', color: '#F26C4F', hoverColor: '#C8ACD6' },
  { icon: <FaHandshake />, title: 'Training & Internship', description: 'Guidance and opportunities to nurture your talent.', link: '/services/mentorship-internship', color: '#8D5B9D', hoverColor: '#17153B' },
  { icon: <FaStar />, title: 'Influencer Marketing', description: 'Leverage influencers to amplify your brand’s reach.', link: '/services/influencer-marketing', color: '#FF8C42',  hoverColor: '#6A0DAD'   }
];
const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 300
    }
  }
};

const ServicesSection = () => (
  <section className="text-center mb-12">
    <h2 className="text-4xl font-bold text-accent mb-4">Our Services</h2>
    <p className="text-lg mb-8">Managing your business with our best services</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(({ icon, title, description, link, color, hoverColor }) => (
        <motion.div
          key={title}
          className="relative overflow-hidden flex flex-col justify-between gap-4 p-4 md:p-6 rounded-2xl cursor-pointer group"
          variants={cardVariants}
          whileHover="hover"
          style={{ borderColor: hoverColor }}
        >
          <div className={`absolute top-0 left-0 w-2 h-full bg-opacity-10 ${color} duration-300 group-hover:w-full`} style={{ backgroundColor: color }}></div>
          <div className={`absolute top-0 left-0 h-full w-0 bg-opacity-10 group-hover:bg-opacity-20 duration-300`} style={{ backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/6956/4aec/59afa93303a34a23ecc13368dc4094db?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFrwNwC7QeqlIUsWFsC-jbQzlVTUSh7T5VfJ9vMNaAEsoOS92kRDH-OjWcAX~dmuZ77fPWjZJX0v1kXaZENeqa--USg1BcCN8z~Z1id5y5RQT1ZTU5OR4PRrLISHbowyTAu65h2jCKOSYXCrXN3F6fH8epD-Pm9TCGCYvD9svkhnbTSZxPKZhn8okHm7W~3wWyIhJBaZyQ30qWwD~JAh5r0BRE6XIfIpgTlUWeLq9wwCbwFZQR5RWInuHUfLrfhvAnxmzVVoTO1TxyjHOeXVb68Tc~nJuypwlDmcd0Sg02sJu3-uj7vFXRul6qw0LRfsQrWS5c5RJ~P-z5-eS~1jTA__")' }}></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="text-5xl text-black group-hover:text-white">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-white">{title}</h3>
            <p className="text-sm mb-4 text-gray-700 group-hover:text-white">{description}</p>
            <Link to={link} className="flex items-center gap-2 text-sm xl:text-base font-medium text-black group-hover:text-white transition-colors duration-300">
              See Details
              <svg className="w-4 h-4" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
