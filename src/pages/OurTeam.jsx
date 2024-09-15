import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample data for team members
const teamMembers = [
  { name: 'Shubham Kshetre', title: 'Cloud Engineer', image: 'https://shorturl.at/N7yqC' },
  { name: 'Raj Raut', title: 'Devops Engineer', image: 'https://shorturl.at/SxOOi' },
  { name: 'Sayuri Kamble', title: 'Full-Stack Developer', image: 'https://shorturl.at/mGawO' },
  { name: 'Athrava Ralegankar', title: 'Full-Stack Developer', image: 'https://shorturl.at/3IrTo' },
  { name: 'Abhishek Katale', title: 'Frontend Developer', image: 'https://shorturl.at/WjwY0' },
  { name: 'Saurabh Thakur', title: 'Product Designer', image: 'https://rb.gy/qeqc7j' },
  { name: 'Ghanshyam Kadam', title: 'Graphic Designer', image: 'https://rb.gy/4fht3q' },
  { name: 'Pratik Mahalle', title: 'System Administrator', image: 'https://rb.gy/1zur1v' },
  { name: 'Prathamesh Pichkate', title: 'Frontend Developer', image: 'https://rb.gy/wwdbvl' },
  { name: 'Varun Nigde', title: 'Content Producer', image: 'https://rb.gy/m2kcmv' },
];

const MeetourTeam = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MeetourTeam;
