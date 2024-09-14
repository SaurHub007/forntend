'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Pop-up Form Component
const MeetDesignerForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, send form data to an API

    // Close the form after submission
    setIsSubmitted(true);
    // You might also want to reset the form fields here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose} // Close the form when clicking outside
      ></div>
      <div className="relative bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-xs w-full sm:w-96 z-10">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-lg font-semibold mb-4">Meet a Designer</h2>
        {isSubmitted ? (
          <p className="text-green-500">Thank you for your submission!</p>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 border border-gray-300 rounded-lg bg-transparent text-black"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 border border-gray-300 rounded-lg bg-transparent text-black"
              required
            />
            <textarea 
              placeholder="Your Message" 
              className="p-2 border border-gray-300 rounded-lg bg-transparent text-black"
              rows="4"
              required
            ></textarea>
            <button 
              type="submit" 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/your-whatsapp-number" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 z-50"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.757-.867-2.029-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.939 1.165-.173.198-.347.223-.644.075-.297-.15-1.256-.464-2.39-1.48-.883-.786-1.48-1.758-1.654-2.055-.173-.297-.019-.458.13-.606.133-.132.297-.347.446-.52.15-.174.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.614-.916-2.214-.242-.581-.488-.502-.67-.512l-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.479 0 1.464 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.307 1.262.49 1.694.628.712.226 1.36.194 1.871.118.571-.085 1.757-.718 2.005-1.412.248-.695.248-1.29.173-1.412-.074-.12-.272-.198-.57-.347zm-5.422 6.285h-.002A8.67 8.67 0 0 1 8.59 19.98l-.248-.146-1.838.483.491-1.793-.162-.282a8.669 8.669 0 0 1-1.334-4.65c.003-4.78 3.897-8.67 8.678-8.67 2.318 0 4.493.9 6.126 2.532a8.612 8.612 0 0 1 2.54 6.13c-.003 4.78-3.897 8.67-8.677 8.67zm0-18.876C6.516 1.79 1.79 6.514 1.79 12.348c0 1.529.4 3.043 1.158 4.365l-1.225 4.48 4.59-1.21a10.551 10.551 0 0 0 5.78 1.688h.005c5.832 0 10.557-4.725 10.557-10.558a10.47 10.47 0 0 0-3.075-7.482 10.536 10.536 0 0 0-7.483-3.075z"/>
      </svg>
    </a>
  );
};

// Hero Component
const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(true); // Set to true to show the form by default

  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://your-background-image-url.com')",  // Add the actual URL of your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Transform Your Home
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10">
          Stylish, comfortable, and easy-to-assemble furniture for every room.
        </p>
        <Link
          href="/Product"  // Make sure this is the correct route
          className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Shop Now
        </Link>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <Link href="#hot-section">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </Link>
      </div>
      {/* Pop-up Form */}
      {isFormOpen && <MeetDesignerForm onClose={handleCloseForm} />}
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </section>
  );
};

export default Hero;
