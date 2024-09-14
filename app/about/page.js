import Link from 'next/link'; // Import Link from Next.js

const About = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Transparent Logo in the Top Left */}
      <Link href="/Hero" className="absolute top-4 left-4 text-white text-xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300 z-10">
        Furniture Assembly
      </Link>

      {/* First Section - Our Journey, Values, and Vision */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://static.vecteezy.com/ti/foto-gratuito/p1/24495291-elegante-e-moderno-boho-ispirato-vivente-camera-con-tappeto-malacca-arredamento-cuscini-impianti-parete-decorazione-e-personale-accessori-naturale-casa-arredamento-boho-camera-interno-ai-generato-immagine-gratuito-foto.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 py-12 px-6 md:py-20 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-5xl font-extrabold text-center text-white mb-12">
              Our Journey, Values, and Vision
            </h2>

            {/* Animated Decorative Line Below Heading */}
            <div className="w-1/2 h-1 bg-white animate-lineSlide mx-auto"></div>

            {/* Our Journey */}
            <div className="flex flex-col md:flex-row items-center mb-16 mt-12">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://static.wixstatic.com/media/3b2234_96716b57b95a44b1a44fcec4148672f1~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b2234_96716b57b95a44b1a44fcec4148672f1~mv2.jpg"
                  alt="Our Journey"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h3 className="text-4xl font-semibold text-white mb-4">Our Journey</h3>
                <p className="text-gray-300 font-medium leading-relaxed">
                  Our journey began with a passion for furniture and a desire to create timeless pieces that combine style and comfort. Over the years, we have grown from a small workshop to a leading furniture brand, dedicated to providing high-quality products to our valued customers.
                </p>
              </div>
            </div>
            
            {/* Our Values */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 order-last md:order-first md:pr-10">
                <h3 className="text-4xl font-semibold text-white mb-4">Our Values</h3>
                <p className="text-gray-300 font-medium leading-relaxed">
                  We believe in integrity, sustainability, and customer satisfaction. Our values guide everything we do, from sourcing eco-friendly materials to ensuring that every product meets our high standards of craftsmanship and durability.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://media.istockphoto.com/id/175240413/photo/furniture-factory.jpg?s=612x612&w=0&k=20&c=AMPhjFSnRVi7ujHuGQ0jQwslcKnVupDCjXQAOzdVZ6c="
                  alt="Our Values"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            
            {/* Our Vision */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src="https://watermark.lovepik.com/photo/20211208/large/lovepik-beautiful-carpenter-worker-custom-made-wooden-picture_501667609.jpg"
                  alt="Our Vision"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h3 className="text-4xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 font-medium leading-relaxed">
                  Our vision is to become a global leader in the furniture industry by offering innovative, sustainable, and beautifully crafted products. We aim to inspire people to create spaces that reflect their personal style while promoting comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 bg-black bg-opacity-50 py-24"> {/* Darker overlay */}
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Company History</h2>
            
            {/* Company History Content */}
            <div className="text-white font-bold leading-relaxed mb-12">
              <p>
                Our company history is a testament to our dedication and hard work over the years. Founded with a vision to transform the furniture industry, we have continually evolved to meet the needs of our customers while maintaining our commitment to quality and innovation.
              </p>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <img
                  src="https://www.shutterstock.com/image-photo/banner-diy-craftsperson-asian-man-600nw-2485950233.jpg"
                  alt="Craftsperson"
                  className="rounded-lg shadow-lg"
                  style={{ width: '600px', height: '300px' }} // Increased the size of the image
                />
              </div>
              <div className="w-1/2">
                <p className="text-white font-bold leading-relaxed pl-10">
                  The furniture industry has evolved, and so have we. Our commitment to quality and innovation has been the cornerstone of our success, helping us adapt and thrive in a changing market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promoter Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://freerangestock.com/sample/141815/corporate-business-team-and-manager-in-a-meeting.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 bg-black bg-opacity-50 py-24"> {/* Darker overlay */}
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Promoter</h2>
            
            {/* Promoter Content */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-3 md:mb-0">
                <img
                  src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/140738-ccfqgkoqim-1588337403.jpg"
                  alt="Promoter"
                  className="rounded-lg shadow-lg"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-10">
                <h3 className="text-4xl font-semibold text-white mb-4">Meet Our Promoters</h3>
                <p className="text-gray-300 font-medium leading-relaxed">
                  Our promoter has been the driving force behind our company’s success. With a keen eye for detail, a passion for innovation, and a commitment to excellence, they have guided our company to new heights, ensuring that we continue to lead the industry in quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
