const Footer = () => {
  return (
    <footer className="text-white py-6" style={{ 
      background: "linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(31, 41, 55, 0.5), rgba(0, 0, 0, 0.5))",
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="mb-4 md:mb-0 text-left">
            <a href="#top" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Furniture Assembly
            </a>
            <p className="mt-1 text-gray-400 text-sm font-bold text-gray-100">
              Making your home cozy and stylish
            </p>
            <p className="mt-4 text-lg font-bold text-gray-100">
              <span className="block ml-4">
                Head Quarter:<br/>
                Ratan Tata,<br/>
                6, Keshavrao Khade Marg,<br/>
                Colaba, Mumbai 400039,<br/>
                Maharashtra, India.
              </span>
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold text-gray-100">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold text-gray-100">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold text-gray-100">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold text-gray-100">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-row items-center space-x-4">
            <p className="text-sm font-bold text-gray-100">
              &copy; 2024 Furniture Assembly. All rights reserved.
            </p>
            <div className="flex items-center text-sm font-bold text-gray-100">
              <svg
                className="w-6 h-6 mr-2 ml-96 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.932 15.932 0 0 0 7.43 7.43l2.35-2.35c.24-.24.26-.63.03-.89l-2.16-2.16a.75.75 0 0 0-.9-.04l-2.35 2.35a12.065 12.065 0 0 1-5.67-5.67l2.35-2.35a.75.75 0 0 0-.04-.9L9.5 4.62a.75.75 0 0 0-.89.03l-2.35 2.35A15.932 15.932 0 0 0 6.62 10.79zM12 4.5c-.84 0-1.67.13-2.45.38l2.35 2.35c.2.2.53.2.73 0l2.16-2.16a.75.75 0 0 0-.9-.9l-2.16 2.16a.75.75 0 0 0 0 .73L11.5 8.5a.75.75 0 0 0 .73 0l2.16-2.16a7.485 7.485 0 0 1 0-3.77l-2.16 2.16a.75.75 0 0 0-.73 0L8.5 7.16a.75.75 0 0 0 0 .73l2.16 2.16a.75.75 0 0 0 .9-.9l-2.35-2.35C11.17 5.63 12 5.1 12 4.5z" />
              </svg>
              90823-93580
            </div>
          </div>
          <div className="flex space-x-4 text-sm font-bold text-gray-100">

            <a href="#" className="hover:text-yellow-400 transition duration-300 ease-in-out">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-yellow-400 transition duration-300 ease-in-out">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
