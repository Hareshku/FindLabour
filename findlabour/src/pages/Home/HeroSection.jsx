import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '../../components/Inputs';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('talent');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (activeTab === 'talent') {
      navigate(`/hire-worker?search=${query}`);
    } else {
      navigate(`/find-work?search=${query}`);
    }
  };

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Connecting customers to skilled workers who deliver
          </h1>

          {/* Search Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('talent')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'talent'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Find workers
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'jobs'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Browse work
              </button>
            </div>

            {/* Search Input */}
            <SearchInput
              placeholder={activeTab === 'talent'
                ? "Search by skill, location, or work type"
                : "Search for work opportunities"}
              onSearch={handleSearch}
            />
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex items-center gap-8 flex-wrap">
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
