import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/aspire.jpg';
import image2 from '../../assets/images/cade.jpg';
import image3 from '../../assets/images/krushii.jpg';
import image4 from '../../assets/images/pdeas.jpeg';
import image5 from '../../assets/images/city.JPG';
import image6 from '../../assets/images/shree.jpg';
import image7 from '../../assets/images/AAgamingg.png';
import image8 from '../../assets/images/hespro1.jpg';
import image9 from '../../assets/images/logo.jpg';



function ClientCard({ client }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center" // Ensures that the image will cover the space without distortion
          src={client.image}
          alt={client.name}
          style={{
            objectFit: 'contain', // Changes from 'cover' to 'contain' to ensure the whole image is visible
            objectPosition: 'center', // Centers the image within the frame
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{client.name}</div>
        <p className="text-gray-700 text-base">
          {client.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={client.link} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:shadow-md">Learn More</a>
      </div>
    </div>
  );
}



// Define the ClientsView component which uses ClientCard with a refined design
function ClientsView() {
  const clientsData = [
    {
      name: 'Aspire Sports Club',
      description: 'Achieved 30% increase in membership sign-ups through targeted ad campaigns.',
      image: image1,
      link: '/clients/aspire-sports-club'
    },
    {
      name: 'Cadence Academy',
      description: 'Enhanced online presence leading to a 25% enrollment rise.',
      image: image2,
      link: '/clients/cadence-academy'
    },
    {
      name: 'Krushi Unnati Farm',
      description: 'Boosted organic reach and market penetration in rural areas.',
      image: image3,
      link: '/clients/krushi-unnati-farm'
    },
    {
      name: 'PDEA COEM',
      description: 'Significantly improved admissions through effective digital campaigns.',
      image: image4,
      link: '/clients/pdea-coem'
    },
    {
      name: 'CityEscape',
      description: 'Expanded customer base with innovative social media strategies.',
      image: image5,
      link: '/clients/city-escape'
    },
    {
      name: 'Shree Properties',
      description: 'Enhanced property visibility and sales through targeted ads.',
      image: image6,
      link: '/clients/shree-properties'
    },
    {
      name: 'AA Gaming',
      description: 'Expanded player base and engagement via strategic social media initiatives.',
      image: image7,
      link: '/clients/aa-gaming'
    },
    {
      name: 'Hespro',
      description: 'Enhanced brand recognition and lead conversion with advanced marketing strategies.',
      image: image8,
      link: '/clients/hespro'
    },
    {
      name: 'Musitech',
      description: 'Musitech Website Organic Growth & SEO Strategy',
      image: image9,
      link: '/clients/musitech'
    },
    // Add more clients as needed
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Clients' Achievements</h1>
        <div className="flex flex-wrap justify-center">
          {clientsData.map(client => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClientsView;
