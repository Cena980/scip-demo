import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature items would go here */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Service 1</h3>
            <p>Description of service 1</p>
          </div>
          {/* Add more feature items */}
        </div>
      </div>
    </section>
  );
};

export default Features;