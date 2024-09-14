'use client';
import Link from 'next/link';

const Product = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12 overflow-hidden">
      
      {/* Transparent Logo in the Top Left */}
      <Link href="/" className="absolute top-4 left-4 text-white text-xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300">
        Furniture Assembly
      </Link>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/040/150/588/non_2x/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-and-elegant-personal-accessories-modern-home-decor-bright-and-sunny-room-generative-ai-illustration-photo.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        </div>
      </div>

      <h1 className="relative text-5xl font-extrabold text-white mb-12 text-center tracking-wide z-10">
        Choose Your Furniture Category
      </h1>
      
      <div className="relative flex flex-col space-y-8 w-full md:w-2/3 lg:w-1/2 z-10">
        <Link href="./Product/kitchen">
          <div className="relative group flex items-center justify-between bg-gradient-to-r from-pink-500 to-red-500 text-white py-6 px-10 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl opacity-80">
            <span className="text-3xl font-bold">Kitchen</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </div>
        </Link>

        <Link href="./Product/wardrobe">
          <div className="relative group flex items-center justify-between bg-gradient-to-r from-green-500 to-teal-500 text-white py-6 px-10 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl opacity-80">
            <span className="text-3xl font-bold">Wardrobe</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm4 8h8" />
            </svg>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </div>
        </Link>

        <Link href="./Product/beds">
          <div className="relative group flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-6 px-10 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl opacity-80">
            <span className="text-3xl font-bold">Beds</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13v7h18v-7M3 9V5h4v4M17 9V5h4v4" />
            </svg>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
