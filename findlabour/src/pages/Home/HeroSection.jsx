import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
            Whether you are searching for dependable labour or seeking work to support your family, FindLabour connects people to possibilities, with fairness and dignity
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/hire-worker"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Hire Workers
            </Link>
            <Link
              to="/find-work"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Find Work
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-white">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-white/70 text-sm">Skilled Workers</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold">5K+</p>
              <p className="text-white/70 text-sm">Work Posts</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-white/70 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
