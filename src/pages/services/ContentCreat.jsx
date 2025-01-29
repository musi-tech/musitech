import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "🎬", // Replace with an appropriate icon/image
      title: "Successfully planned and organized over 20 events.",
      description:
        "Expertise in scriptwriting, location scouting, and shot planning. Seamless coordination of all pre-production tasks to ensure smooth execution.",
    },
    {
      id: 2,
      icon: "✂️", // Replace with an appropriate icon/image
      title: "Edited over 50 projects, delivering high-quality, polished content.",
      description:
        "Specialize in video editing, color correction, and sound design. Skilled in adding visual effects for engaging and professional output.",
    },
    {
      id: 3,
      icon: "📱", // Replace with an appropriate icon/image
      title: "Building daily content for 8 social media accounts.",
      description:
        "Expert in creating engaging posts, managing calendars, and optimizing content strategies. Ensuring consistent branding & engagement.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white py-16 px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Our Premium Services
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium">
            Elevating your projects with exceptional quality and expertise.
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/3 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-6xl bg-green-500 p-4 rounded-full mb-6 shadow-lg transform hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-all duration-200 ease-in-out hover:text-green-600">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesSection;
