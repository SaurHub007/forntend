'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const patterns = [
  { id: 1, name: "Classic Oak", price: 12000, description: "A timeless oak finish with classic design elements.", imageUrl: "https://images.woodenstreet.de/image/data/wardrobes-mdf/zyra-4-door-wardrobe-without-mirror-gothic-grey-classic-oak-finish/new-logo/1.jpg" },
  { id: 2, name: "Modern Walnut", price: 15000, description: "Sleek walnut finish with modern design and features.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm_Ci1tIRk_eLMvo3cf39GGc2jJKpqgCbzw&s" },
  { id: 3, name: "Rustic Pine", price: 10000, description: "Rustic pine with a rugged, natural look.", imageUrl: "https://www.anniesloan.com/wp-content/uploads/2021/07/Ombre-Wardrobe-by-Annie-Sloan-Painter-in-Residence-Ildiko-Horvath-painted-with-Chalk-Paint-blues-2-1371.jpg" },
  { id: 4, name: "Urban Grey", price: 14000, description: "Contemporary grey finish for a modern touch.", imageUrl: "https://assets.telkitchens.co.uk/srcane/uploads/2021/07/19113618/gray-wardrobe-design1.jpg" },
  { id: 5, name: "Elegant Cherry", price: 16000, description: "Elegant cherry wood with a refined finish.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXS9pjmP8TKzE-KNJrZBFu4QPkhhUW9wEZQ&s" },
  { id: 6, name: "Minimalist White", price: 13000, description: "Clean and minimalist white finish for a sleek look.", imageUrl: "https://images.livspace-cdn.com/w:600/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/1-jfm-2023-1672658622-Qt4BB/wardrobe-1672749495-qxVvq/10-1674057574-vmE3Y.jpg" },
];

const modules = [
  { id: 1, name: "Classic Oak Shelving", price: 5000, description: "Custom shelving to match the Classic Oak wardrobe.", imageUrl: "https://jsdeco.co.uk/wp-content/uploads/2021/11/Oak-wardrobe-1.jpg" },
  { id: 2, name: "Modern Walnut Drawers", price: 6000, description: "Sleek drawers to complement the Modern Walnut wardrobe.", imageUrl: "https://dnn2wvbhzy3u8.cloudfront.net/codebackup/images/33/3-1581069096Camel-Nostalgia-Night-Walnut-Italian-6-Door-Wardrobe.jpg" },
  { id: 3, name: "Rustic Pine Hooks", price: 3000, description: "Rustic hooks for hanging items with the Rustic Pine wardrobe.", imageUrl: "https://www.marcwoodfurniture.co.uk/wp-content/uploads/2024/02/Upper-cabinet-OPEN.jpg" },
  { id: 4, name: "Urban Grey Cabinets", price: 7000, description: "Modern cabinets designed for the Urban Grey wardrobe.", imageUrl: "https://st.hzcdn.com/simgs/pictures/closets/french-influences-on-an-urban-residence-stalburg-design-img~57a1e93d0e404140_3-7424-1-e32b5e7.jpg" },
  { id: 5, name: "Elegant Cherry Mirrors", price: 5500, description: "Elegant mirrors to match the Elegant Cherry wardrobe.", imageUrl: "https://images-cdn.ubuy.co.in/65ad544681d09a158124d450-hooker-furniture-seven-seas-jewelry.jpg" },
  { id: 6, name: "Minimalist White Accessories", price: 4000, description: "Sleek accessories to go with the Minimalist White wardrobe.", imageUrl: "https://bienalclosets.com/wp-content/uploads/2023/07/basic-women-s-clothes-hanger-blurred-notebook-open-wardrobe-with-textile-curtains-close-up.jpg" },
];

const accessories = [
  { id: 1, name: "Elegant Lamps", price: 3000, description: "Stylish lamps to complement your wardrobe.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7KRADbmko43cM8lBZxf4_u17YfHoEb36rg&s" },
  { id: 2, name: "Premium Hangers", price: 1500, description: "High-quality hangers for your wardrobe.", imageUrl: "https://img.freepik.com/premium-photo/closet-with-clothes-accessories-dressing-room-clothes-storage_951308-166.jpg?w=360" },
  { id: 3, name: "Decorative Boxes", price: 2500, description: "Decorative boxes to organize your accessories.", imageUrl: "https://image.made-in-china.com/2f0j00KoZicCgWALGb/Wardrobe-Accessories-Jewelry-Storage-Box-in-Closet.webp" },
  { id: 4, name: "Mirrored Jewelry Tray", price: 2000, description: "A beautiful mirrored tray for your jewelry and accessories.", imageUrl: "https://m.media-amazon.com/images/I/71wyouNZGJL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, name: "Velvet Drawer Liners", price: 1200, description: "Soft velvet liners for protecting your wardrobe contents.", imageUrl: "https://ae01.alicdn.com/kf/S61e882606e934fa2aa762070eea088175/Clear-EVA-Kitchen-Drawer-Table-Mat-Shelf-Cover-Liners-Non-Slip-Shoe-Cabinet-Wardrobe-Pad-Waterproof.jpg" },
  { id: 6, name: "Adjustable Shoe Rack", price: 3500, description: "An adjustable shoe rack for maximizing storage.", imageUrl: "https://images-cdn.ubuy.co.in/6506461a6015f0782028be43-mainstays-4-tier-24-pair-shoe-rack.jpg" },
  { id: 7, name: "Luxury Closet Organizer", price: 5000, description: "A luxury organizer for neatly arranging your closet items.", imageUrl: "https://www.mandicasa.com/wp-content/uploads/2023/03/collection-closet-walkins2.jpg" },
  { id: 8, name: "Wardrobe LED Lights", price: 1800, description: "Bright LED lights to illuminate your wardrobe.", imageUrl: "https://www.99acres.com/microsite/articles/files/2023/10/wardrobe_lights-16752f29-0c0b-4cf9-9e48-0f6c338257cc.jpg" },
  { id: 9, name: "Leather Storage Bins", price: 3200, description: "Elegant leather bins for additional storage.", imageUrl: "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele/en_IN/pim/images/huge/apic-04572534.jpg" }
];

const hardware = [
  { id: 1, name: "Cabinet Hinges", price: 2000, description: "High-quality hinges for cabinet doors.", imageUrl: "https://www.example.com/hinges.jpg" },
  { id: 2, name: "Drawer Slides", price: 2500, description: "Smooth and durable drawer slides.", imageUrl: "https://www.example.com/slides.jpg" },
  { id: 3, name: "Handles & Knobs", price: 1500, description: "Stylish handles and knobs for wardrobes.", imageUrl: "https://www.example.com/handles.jpg" },
  { id: 4, name: "Locking Mechanisms", price: 1800, description: "Secure locking mechanisms for cabinets.", imageUrl: "https://www.example.com/locks.jpg" },
  { id: 5, name: "Shelf Brackets", price: 1200, description: "Sturdy brackets for shelving support.", imageUrl: "https://www.example.com/brackets.jpg" },
  { id: 6, name: "Soft-Close Hinges", price: 3000, description: "Hinges with a soft-close feature for smooth operation.", imageUrl: "https://www.example.com/soft-close-hinges.jpg" },
];

const Wardrobe = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPatterns, setSelectedPatterns] = useState(new Set());
  const [selectedModules, setSelectedModules] = useState(new Set());
  const [selectedAccessories, setSelectedAccessories] = useState(new Set());
  const [selectedHardware, setSelectedHardware] = useState(new Set());
  const [currentSection, setCurrentSection] = useState('patterns');
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    localStorage.setItem('totalPrice', totalPrice);
  }, [totalPrice]);

  const toggleSelection = (id, price, type) => {
    if (type === 'pattern') {
      setSelectedPatterns(prev => {
        const newSet = new Set(prev);
        let newPrice = totalPrice;
        if (newSet.has(id)) {
          newSet.delete(id);
          newPrice -= price;
        } else {
          newSet.add(id);
          newPrice += price;
        }
        setTotalPrice(newPrice);
        localStorage.setItem('totalPrice', newPrice.toString());
        return newSet;
      });
    } else if (type === 'module') {
      setSelectedModules(prev => {
        const newSet = new Set(prev);
        let newPrice = totalPrice;
        if (newSet.has(id)) {
          newSet.delete(id);
          newPrice -= price;
        } else {
          newSet.add(id);
          newPrice += price;
        }
        setTotalPrice(newPrice);
        localStorage.setItem('totalPrice', newPrice.toString());
        return newSet;
      });
    } else if (type === 'accessory') {
      setSelectedAccessories(prev => {
        const newSet = new Set(prev);
        let newPrice = totalPrice;
        if (newSet.has(id)) {
          newSet.delete(id);
          newPrice -= price;
        } else {
          newSet.add(id);
          newPrice += price;
        }
        setTotalPrice(newPrice);
        localStorage.setItem('totalPrice', newPrice.toString());
        return newSet;
      });
    } else if (type === 'hardware') {
      setSelectedHardware(prev => {
        const newSet = new Set(prev);
        let newPrice = totalPrice;
        if (newSet.has(id)) {
          newSet.delete(id);
          newPrice -= price;
        } else {
          newSet.add(id);
          newPrice += price;
        }
        setTotalPrice(newPrice);
        localStorage.setItem('totalPrice', newPrice.toString());
        return newSet;
      });
    }
  };

  const handleNextSection = () => {
    if (currentSection === 'patterns') {
      setCurrentSection('modules');
    } else if (currentSection === 'modules') {
      setCurrentSection('accessories');
    } else if (currentSection === 'accessories') {
      setCurrentSection('hardware');
    } else if (currentSection === 'hardware') {
      setCurrentSection('final');
    }
  };

  const handleBackSection = () => {
    if (currentSection === 'modules') {
      setCurrentSection('patterns');
    } else if (currentSection === 'accessories') {
      setCurrentSection('modules');
    } else if (currentSection === 'hardware') {
      setCurrentSection('accessories');
    } else if (currentSection === 'final') {
      setCurrentSection('hardware');
    }
  };

  const handleFinish = () => {
    // Redirect to the home page
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('https://www.mobelgrace.in/wp-content/uploads/2019/03/wardrobe-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mt-12 px-4 relative z-10">
        {currentSection === 'patterns' ? 'Welcome to the Wardrobe Section' :
         currentSection === 'modules' ? 'Modules Section' :
         currentSection === 'accessories' ? 'Accessories Section' :
         currentSection === 'hardware' ? 'Hardware Section' :
         'Final Pricing and Description'}
      </h1>
      <div className="w-1/2 h-1 bg-white mt-2 animate-lineSlide relative z-10"></div>
      <div className="fixed top-4 right-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg z-20">
        <h3 className="text-xl font-bold">Total Price:</h3>
        <p className="text-red-500 font-bold">₹{totalPrice.toLocaleString()}</p>
      </div>
      <div className="relative z-10 mt-12 px-6 w-full max-w-6xl">
        {currentSection === 'patterns' && (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Patterns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patterns.map(({ id, name, price, description, imageUrl }) => (
                <div key={id} className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${selectedPatterns.has(id) ? 'bg-green-100' : ''}`}>
                  <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-700 mb-2">{description}</p>
                  <p className="text-red-500 font-bold mb-4">₹{price.toLocaleString()}</p>
                  <button className={`py-2 px-4 rounded transition-colors duration-300 ${selectedPatterns.has(id) ? 'bg-red-500' : 'bg-gray-500'} text-white`} onClick={() => toggleSelection(id, price, 'pattern')}>
                    {selectedPatterns.has(id) ? 'Unselect' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {currentSection === 'modules' && (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map(({ id, name, price, description, imageUrl }) => (
                <div key={id} className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${selectedModules.has(id) ? 'bg-green-100' : ''}`}>
                  <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-700 mb-2">{description}</p>
                  <p className="text-red-500 font-bold mb-4">₹{price.toLocaleString()}</p>
                  <button className={`py-2 px-4 rounded transition-colors duration-300 ${selectedModules.has(id) ? 'bg-red-500' : 'bg-gray-500'} text-white`} onClick={() => toggleSelection(id, price, 'module')}>
                    {selectedModules.has(id) ? 'Unselect' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {currentSection === 'accessories' && (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Accessories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessories.map(({ id, name, price, description, imageUrl }) => (
                <div key={id} className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${selectedAccessories.has(id) ? 'bg-green-100' : ''}`}>
                  <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-700 mb-2">{description}</p>
                  <p className="text-red-500 font-bold mb-4">₹{price.toLocaleString()}</p>
                  <button className={`py-2 px-4 rounded transition-colors duration-300 ${selectedAccessories.has(id) ? 'bg-red-500' : 'bg-gray-500'} text-white`} onClick={() => toggleSelection(id, price, 'accessory')}>
                    {selectedAccessories.has(id) ? 'Unselect' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {currentSection === 'hardware' && (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Hardware</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardware.map(({ id, name, price, description, imageUrl }) => (
                <div key={id} className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${selectedHardware.has(id) ? 'bg-green-100' : ''}`}>
                  <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-700 mb-2">{description}</p>
                  <p className="text-red-500 font-bold mb-4">₹{price.toLocaleString()}</p>
                  <button className={`py-2 px-4 rounded transition-colors duration-300 ${selectedHardware.has(id) ? 'bg-red-500' : 'bg-gray-500'} text-white`} onClick={() => toggleSelection(id, price, 'hardware')}>
                    {selectedHardware.has(id) ? 'Unselect' : 'Select'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        {currentSection === 'final' && (
          <>
            <h2 className="text-3xl font-bold text-white mb-8">Final Pricing and Description</h2>
            <p className="text-gray-200 mb-8">Here, you can review the final selections and pricing details for your wardrobe. Ensure everything is as per your preferences before finalizing your choices.</p>
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Final Pricing</h3>
              <p className="text-red-500 font-bold">₹{totalPrice.toLocaleString()}</p>
              <p className="text-gray-700 mt-4">You have selected the following items:</p>
              <ul className="list-disc list-inside mt-4">
                {[...selectedPatterns, ...selectedModules, ...selectedAccessories, ...selectedHardware].map(id => {
                  const item = [...patterns, ...modules, ...accessories, ...hardware].find(i => i.id === id);
                  return item ? (
                    <li key={id} className="mb-2">{item.name}: ₹{item.price.toLocaleString()}</li>
                  ) : null;
                })}
              </ul>
            </div>
          </>
        )}
        <div className="flex justify-between mt-8">
          <button className="py-2 px-4 bg-gray-500 text-white rounded-lg" onClick={handleBackSection}>
            Back
          </button>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={currentSection === 'final' ? handleFinish : handleNextSection}>
            {currentSection === 'final' ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
