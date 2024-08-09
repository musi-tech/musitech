const teamMembers = [
    {
      name: 'Team Member Name',
      role: 'Role and brief description'
    }
  ];
  
  const OurTeam = () => (
    <section className="text-center mb-12">
      <h2 className="text-4xl font-bold text-accent mb-4">Our Team</h2>
      <p className="text-lg mb-8">Meet our passionate and dedicated team members</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(({ name, role }) => (
          <div key={name} className="bg-secondary p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent">{name}</h3>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default OurTeam;
  