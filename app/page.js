import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Hot from './Components/Hot';

const page = () => {
  return (
    <>
      {/* Wrapper for Header and Hero with background image */}
      <div style={{ 
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/040/150/864/non_2x/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-and-elegant-personal-accessories-modern-home-decor-bright-and-sunny-room-generative-ai-illustration-photo.jpg')`, // Replace with your Google image URL
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures the background covers the full viewport height
      }}>
        <Header/>
        <Hero/>
      </div>

      {/* Section with different background image */}
      <div style={{ 
        backgroundImage: `url('https://static.vecteezy.com/ti/foto-gratuito/p1/24495291-elegante-e-moderno-boho-ispirato-vivente-camera-con-tappeto-malacca-arredamento-cuscini-impianti-parete-decorazione-e-personale-accessori-naturale-casa-arredamento-boho-camera-interno-ai-generato-immagine-gratuito-foto.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <Hot/>
        <Footer/>
      </div>
    </>
  );
}

export default page;
