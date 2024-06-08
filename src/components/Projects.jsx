import React from 'react';

const Projects = () => {
    return (
        <section className="py-20 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="mb-4">A brief description of your project.</p>
            <a href="#" className="text-blue-600">View Project</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="mb-4">A brief description of your project.</p>
            <a href="#" className="text-blue-600">View Project</a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    );
};

export default Projects;