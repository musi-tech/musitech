import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

// Sample data for team members
const teamData = {
  'Web Development Team': [
    { image: 'data:image/jpeg;base64,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', name: 'Atharva Ralegankar', position: 'Full Stack Developer', linkedin: 'https://www.linkedin.com/in/atharvaralegankar/' },
    { image: 'https://via.placeholder.com/150', name: 'Bob Smith', position: 'SEO Specialist', linkedin: 'https://linkedin.com/in/bobsmith' },
    { image: 'https://via.placeholder.com/150', name: 'Alice Doe', position: 'Marketing Manager', linkedin: 'https://linkedin.com/in/alicedoe' },
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
