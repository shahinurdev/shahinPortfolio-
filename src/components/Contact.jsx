import React from 'react';

const Contact = () => {
    return (
        <section className="py-20 text-center">
      
         
        <div className="mt-8">
                <h3 className="text-4xl font-semibold text-indigo-600">Contact Me</h3>
                <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mt-4">
                    WhatsApp: <a href="tel:+8801921840132" className="text-blue-500">+8801921840132</a><br />
                    Email: <a href="mailto:mdshahinurkhan6@gmail.com" className="text-blue-500">mdshahinurkhan6@gmail.com</a><br />
                    Address: Jamalpur, Mymensingh, Bangladesh
                </p>
            </div>

        {/* <form className="max-w-xl mx-auto">
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
        </form> */}
      </section>
    );
};

export default Contact;