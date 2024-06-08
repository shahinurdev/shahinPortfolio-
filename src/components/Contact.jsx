import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </section>
    );
};

export default Contact;