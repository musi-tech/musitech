import React from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const ProjectsSection = () => {
  const projects = [
    {
      title: "Watch Movies in Virtual Reality",
      description: "Download and watch offline wherever you are",
      buttonText: "Sign Up",
      image: "path-to-vr-image", // Replace with your image path
    },
    {
      title: "Your Digital Partner for Growth",
      description: "Explore our services to accelerate your business growth.",
      buttonText: "Explore Our Services",
      image: "path-to-growth-image", // Replace with your image path
    },
    {
      title: "Your Modern Online School",
      description: "Choose your category: Elementary, Primary, or High School.",
      buttonText: "Start Today",
      image: "path-to-school-image", // Replace with your image path
    },
    {
      title: "Digitalization of Grounds",
      image: "path-to-ground-image", // Replace with your image path
    },
    {
      title: "Provision of Coaches",
      image: "path-to-coaches-image", // Replace with your image path
    },
    {
      title: "Multi-Sport Club Management",
      image: "path-to-club-image", // Replace with your image path
    },
    {
      title: "Tournament Organization",
      image: "path-to-tournament-image", // Replace with your image path
    },
    {
      title: "Ground Maintenance",
      image: "path-to-maintenance-image", // Replace with your image path
    },
    {
      title: "Sports Club Consulting",
      image: "path-to-consulting-image", // Replace with your image path
    },
  ];

  return (
    <>
    <Navbar />
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.description && (
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              )}
              {project.buttonText && (
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md group-hover:bg-blue-700 transition">
                  {project.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
};

export default ProjectsSection;
