const HotSection = () => {
  return (
    <section
      id="hot-section"
      className="py-16 relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('https://static.vecteezy.com/ti/foto-gratuito/p1/24495291-elegante-e-moderno-boho-ispirato-vivente-camera-con-tappeto-malacca-arredamento-cuscini-impianti-parete-decorazione-e-personale-accessori-naturale-casa-arredamento-boho-camera-interno-ai-generato-immagine-gratuito-foto.jpg')" }}  // Replace with your background image URL
    >
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 bg-black bg-opacity-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 animate-text">
          Our Trending Products
          </h2>
          <p className="text-lg text-white mb-12">
            Discover our trending furniture items that add style and comfort to your home!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: 'https://www.wakefit.co/guides/wp-content/uploads/2021/10/thumbnail_0003_Banner.jpg', alt: 'Sofa', title: 'Sofas', description: 'Comfortable and stylish sofas for every living room.' },
              { src: 'https://www.decorpot.com/images/blogimage1622769100illuminated-floating-bed-frame.jpg', alt: 'Bed', title: 'Beds', description: 'Cozy beds that guarantee a good night\'s sleep.' },
              { src: 'https://m.media-amazon.com/images/I/5138frBVkPL._AC_.jpg', alt: 'Dining Table', title: 'Dining Tables', description: 'Elegant dining tables for family gatherings.' },
              { src: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1710531886458__0.jpeg', alt: 'Chair', title: 'Chairs', description: 'Stylish chairs to complement any space.' },
              { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAjRsCFNmIhXgMV1u-98nd5JVIoTD6QAFhA&s', alt: 'Lamp', title: 'Lamps', description: 'Illuminate your space with our stylish lamps.' },
              { src: 'https://www.sanfrandesign.com/wp-content/uploads/2020/09/Quality.jpg', alt: 'Desk', title: 'Desks', description: 'Functional and stylish desks for your workspace.' },
              { src: 'https://i.pinimg.com/originals/6a/2a/5d/6a2a5d892c470b6ca6a0ed1812568bf1.jpg', alt: 'Bookshelf', title: 'Bookshelves', description: 'Organize your books with our elegant bookshelves.' },
              { src: 'https://files.ekmcdn.com/4d4065/images/grey-velvet-stylish-contemporary-armchair-with-gold-metal-legs-mg5056315930520-(3)-5816-p.jpg?v=2622022-214033', alt: 'Armchair', title: 'Armchairs', description: 'Relax in style with our comfortable armchairs.' }
            ].map((item, index) => (
              <div key={index} className="relative bg-black bg-opacity-40 p-4 rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="relative overflow-hidden mb-6 h-72">  {/* Increased height */}
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full pt-4">
                  <div className="flex flex-col flex-grow mb-4">
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">{item.title}</h3>
                    <p className="text-white mb-6">{item.description}</p>
                  </div>
                  <button className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-colors duration-300">
                  Inquiry Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotSection;
