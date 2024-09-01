import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

// Sample data for team members
const teamData = {
  'Web Development Team': [
    { image: 'https://shorturl.at/ZVe38', name: 'Atharva Ralegankar', position: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/atharvaralegankar/' },
    { image: 'https://shorturl.at/NnlIB', name: 'Sayuri Kamble', position: 'Project Manager', linkedin: 'https://www.linkedin.com/in/sayurikamble/' },
    { image: 'https://shorturl.at/LCzr4', name: 'Abhishek Katale', position: 'Web Developer', linkedin: 'https://www.linkedin.com/in/abhishek-katale/' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    
    // Add more team members
  ],
  'Digital Marketing Team': [
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    
    // Add more team members
  ],
  'Operations Team': [
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    
    // Add more team members
  ],
  'Photography & Videography Team': [
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    
    // Add more team members
  ],
  'Music Team': [
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    // Add more team members
  ],
  'Content Creation Team': [
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
    { image: 'https://via.placeholder.com/150', name: 'Charlie Brown', position: 'Music Director', linkedin: 'https://linkedin.com/in/charliebrown' },
    { image: 'https://via.placeholder.com/150', name: 'David Wilson', position: 'Audio Engineer', linkedin: 'https://linkedin.com/in/davidwilson' },
    // Add more team members
  ],
};

const OurTeam = () => (
  <>
    <Navbar />
    <main>
      {Object.keys(teamData).map(team => (
        <TeamSection key={team} title={team} members={teamData[team]} />
      ))}
    </main>
    <Footer />
  </>
);

export default OurTeam;
