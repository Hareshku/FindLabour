const TrustedBanner = () => {
  const categories = [
    'Construction', 'Carpenter', 'Plumber', 'Electrician', 'Painter',
    'Field Work', 'Cleaning', 'Gardening', 'Mechanic', 'Mason'
  ];

  return (
    <div className="bg-gray-50 py-6 overflow-hidden border-b">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 text-gray-500 font-medium text-sm tracking-wide hover:text-green-600 cursor-pointer transition-colors"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedBanner;
