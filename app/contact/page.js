import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://www.timedoctor.com/blog/images/2021/06/call-center-in-usa.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* First Section: Contact Information */}
      <section className="relative z-10 container mx-auto p-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-85">
            <h2 className="text-xl font-semibold mb-2 text-white">Our Office Address:</h2>
            <p className="text-white">Antilia, 27 Altamount Road,<br/>
              Mumbai 400026,<br/>
              Maharashtra, India.</p>
          </div>
          <div className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-85">
            <h2 className="text-xl font-semibold mb-2 text-white">Showroom Address:</h2>
            <p className="text-white">Adani House,<br/>
              Hirandani Gardens,<br/>
              Powai, Mumbai 400076,<br/>
              Maharashtra, India.</p>
          </div>
          <div className="bg-black bg-opacity-75 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-85">
            <h2 className="text-xl font-semibold mb-2 text-white">Studio Address:</h2>
            <p className="text-white">Rohit Sharma,<br/>
              Ahuja Towers,<br/>
              Worli, Mumbai 400030,<br/>
              Maharashtra, India.</p>
          </div>
        </div>
      </section>

      {/* Separator Section */}
      <section className="relative z-10 container mx-auto p-4 py-8">
        <h2 className="text-2xl mb-4 text-white text-center font-bold">Get in Touch</h2>
      </section>

      {/* Second Section: Contact Form */}
      <section className="relative z-10 container mx-auto p-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black transition duration-300 ease-in-out hover:border-indigo-500 hover:ring-indigo-500 hover:scale-105"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black transition duration-300 ease-in-out hover:border-indigo-500 hover:ring-indigo-500 hover:scale-105"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black transition duration-300 ease-in-out hover:border-indigo-500 hover:ring-indigo-500 hover:scale-105"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black transition duration-300 ease-in-out hover:border-indigo-500 hover:ring-indigo-500 hover:scale-105"
                  placeholder="Your Message"
                />
              </div>
              <button
              type="submit"
              className="w-52 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 mx-auto block"
              >
              Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center mr-52">
            <img
              src="https://avyukta.co.in/imgs/page/contactDesktop.jpg"
              alt="Contact Us"
              className="w-80 h-96 object-cover"  // Adjust height and width as needed
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
