import Link from 'next/link';

const Beds = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center relative bg-cover bg-center" 
      style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/81TjROtg-6L.jpg')" }}
    >
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Transparent Logo in the Top Left */}
      <Link href="/" className="absolute top-4 left-4 text-white text-xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300 z-10">
        Furniture Assembly
      </Link>
      
      {/* Heading at the Top Center */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mt-12 z-10">
        Welcome to the Bed Section
      </h1>

      {/* Animated Decorative Line Below Heading */}
      <div className="w-1/2 h-1 bg-white mt-2 animate-lineSlide z-10"></div>

      {/* Work in Progress Section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center z-10">
        {/* Placeholder Image */}
        <img 
          src="https://media.makeameme.org/created/my-work-in-4eo490.jpg" 
          alt="Smiling Worker" 
          className="w-80 h-80 mb-4 object-cover shadow-lg"
        />

        {/* Rotating SVG */}
        <div className="relative mb-4">
          <svg className="w-32 h-32 mx-auto mb-4" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="5" fill="none" className="opacity-50">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="35" stroke="#ffffff" strokeWidth="5" fill="none" strokeDasharray="219.91" strokeDashoffset="0">
              <animate attributeName="stroke-dashoffset" from="219.91" to="0" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <p className="text-2xl font-bold text-white mt-4">Work in Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Beds;
