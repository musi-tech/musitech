import { FaRocket, FaUsers, FaHeadset } from 'react-icons/fa';

const reasons = [
  { icon: <FaRocket className="text-4xl text-accent" />, title: 'Fast Working Process', description: 'We specialize in designing, building, and shipping projects efficiently and effectively.' },
  { icon: <FaUsers className="text-4xl text-accent" />, title: 'Dedicated Team', description: 'Our passionate team is dedicated to your success, providing ongoing support throughout the project lifecycle.' },
  { icon: <FaHeadset className="text-4xl text-accent" />, title: '24/7 Hours Support', description: 'Get assistance whenever you need it with our comprehensive 24/7 support.' }
];

const WhyChooseUs = () => (
  <section className="pt-12 px-4 mb-12">
    <h2 className="text-4xl font-bold text-accent text-center mb-6">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reasons.map(({ icon, title, description }) => (
        <div key={title} className="text-center flex flex-col items-center gap-4 p-4">
          <div className="text-accent">{icon}</div>
          <h3 className="text-2xl font-semibold text-accent mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
