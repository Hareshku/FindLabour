const ServicesSection = () => {
  // All 30 images organized in 5 rows of 6
  const allImages = [
    // Row 1
    { src: '/images/p1.jpg', alt: 'Mason Worker' },
    { src: '/images/p2.jpg', alt: 'Construction Worker' },
    { src: '/images/p3.jpg', alt: 'Tile Worker' },
    { src: '/images/p4.jpg', alt: 'Site Worker' },
    { src: '/images/p5.jpg', alt: 'Cement Worker' },
    { src: '/images/p6.jpg', alt: 'Engineers' },
    // Row 2
    { src: '/images/p7.jpg', alt: 'Painter' },
    { src: '/images/p8.jpg', alt: 'Welder' },
    { src: '/images/p9.jpg', alt: 'Plumber' },
    { src: '/images/p10.jpg', alt: 'Electrician' },
    { src: '/images/p11.jpg', alt: 'Contractors' },
    { src: '/images/p12.jpg', alt: 'Construction Site' },
    // Row 3
    { src: '/images/p13.jpg', alt: 'Carpenter' },
    { src: '/images/p14.jpg', alt: 'Field Worker' },
    { src: '/images/p15.jpg', alt: 'Mechanic' },
    { src: '/images/p16.jpg', alt: 'Technician' },
    { src: '/images/p17.jpg', alt: 'Helper' },
    { src: '/images/p18.jpg', alt: 'Supervisor' },
    // Row 4
    { src: '/images/p19.jpg', alt: 'Cleaner' },
    { src: '/images/p20.jpg', alt: 'Gardener' },
    { src: '/images/p21.jpg', alt: 'Delivery Worker' },
    { src: '/images/p22.jpg', alt: 'Mover' },
    { src: '/images/p23.jpg', alt: 'Driver' },
    { src: '/images/p24.jpg', alt: 'Security' },
    // Row 5
    { src: '/images/p25.jpg', alt: 'AC Technician' },
    { src: '/images/p26.jpg', alt: 'Appliance Repair' },
    { src: '/images/p27.jpg', alt: 'Fabricator' },
    { src: '/images/p28.jpg', alt: 'Roofer' },
    { src: '/images/p29.jpg', alt: 'Glass Worker' },
    { src: '/images/p30.jpg', alt: 'General Labour' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-green-500 rounded-t-2xl py-8 px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-white/90 text-lg">
            All Types of Labours – Workers – Contractors – Service Agencies – Technicians
          </p>
        </div>

        {/* Image Grid - 5 rows of 6 images */}
        <div className="bg-gray-900 p-2 rounded-b-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
