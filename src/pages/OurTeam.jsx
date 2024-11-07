import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample data for team member
const teamMembers = [
  { name: 'Aditya Jadhav', title: 'Director', image: require('../assets/images/Adi.PNG'), linkedin: 'https://www.linkedin.com/in/the-adityajadhav/' },
  { name: 'Sayuri Kamble', title: 'Web Architect', image: require('../assets/images/sayuri.JPG'), linkedin: 'https://www.linkedin.com/in/sayurikamble/' },
  { name: 'Shubham Kshetre', title: 'Cloud Engineer', image: require('../assets/images/Shubham.jpg'), linkedin: 'https://www.linkedin.com/in/shubhamkshetre/' },
  { name: 'Raj Raut', title: 'DevOps Engineer', image: require('../assets/images/raj.jpeg'), linkedin: 'https://www.linkedin.com/in/raj-raut-devops/' },
  { name: 'Athrava Ralegankar', title: 'Full-Stack Developer', image: require('../assets/images/Athra.jpeg'), linkedin: 'https://www.linkedin.com/in/atharvaralegankar/' },
  { name: 'Abhishek Katale', title: 'Front-End Developer', image: require('../assets/images/abhii.JPG'), linkedin: 'https://www.linkedin.com/in/abhishek-katale/' },
  { name: 'Saurabh Thakur', title: 'Creative Analyst', image: require('../assets/images/Sau.jpeg'), linkedin: 'https://www.linkedin.com/in/saurabh36/' },
  { name: 'Ghanshyam Kadam', title: 'Visual Designer', image: require('../assets/images/shyam.JPG'), linkedin: 'https://www.linkedin.com/in/ghanashyamkadam/' },
  { name: 'Pratik Mahalle', title: 'DevRel', image: require('../assets/images/pratik.JPG'), linkedin: 'https://www.linkedin.com/in/mahalle-pratik/' },
  { name: 'Varun Nigde', title: 'Content Producer', image: require('../assets/images/varun.jpeg'), linkedin: 'https://www.linkedin.com/in/varunnigade18/' },
];

const MemberCard = ({ member }) => (
  <motion.div
    className="relative text-center cursor-pointer"
    whileHover={{ scale: 1.1, zIndex: 10 }}
    transition={{ duration: 0.3 }}
    onClick={() => window.open(member.linkedin, '_blank')}
  >
    <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
      <motion.img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <h3 className="text-lg font-medium">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.title}</p>
  </motion.div>
);

const MeetOurTeam = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MeetOurTeam;
