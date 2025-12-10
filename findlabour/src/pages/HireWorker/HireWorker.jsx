import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { WORK_TYPES } from '../../constants';

// Mock data for workers with Pakistani names and locations
const mockWorkers = [
  { _id: '1', username: 'Muhammad Aslam', workTypes: ['construction', 'mason'], experience: 8, location: 'Karachi', averageRating: 4.8, totalReviews: 45, profileImage: '/images/p1.jpg', isAvailable: true },
  { _id: '2', username: 'Abdul Rehman', workTypes: ['carpenter'], experience: 12, location: 'Lahore', averageRating: 4.9, totalReviews: 67, profileImage: '/images/p2.jpg', isAvailable: true },
  { _id: '3', username: 'Imran Khan', workTypes: ['electrician'], experience: 6, location: 'Islamabad', averageRating: 4.5, totalReviews: 32, profileImage: '/images/p3.jpg', isAvailable: true },
  { _id: '4', username: 'Tariq Mehmood', workTypes: ['plumber'], experience: 10, location: 'Rawalpindi', averageRating: 4.7, totalReviews: 58, profileImage: '/images/p4.jpg', isAvailable: false },
  { _id: '5', username: 'Shahid Ali', workTypes: ['painter'], experience: 5, location: 'Faisalabad', averageRating: 4.6, totalReviews: 28, profileImage: '/images/p5.jpg', isAvailable: true },
  { _id: '6', username: 'Waseem Ahmed', workTypes: ['welder'], experience: 7, location: 'Multan', averageRating: 4.4, totalReviews: 19, profileImage: '/images/p6.jpg', isAvailable: true },
  { _id: '7', username: 'Farhan Saeed', workTypes: ['construction', 'field'], experience: 4, location: 'Peshawar', averageRating: 4.3, totalReviews: 15, profileImage: '/images/p7.jpg', isAvailable: true },
  { _id: '8', username: 'Bilal Hassan', workTypes: ['mechanic'], experience: 9, location: 'Quetta', averageRating: 4.8, totalReviews: 41, profileImage: '/images/p8.jpg', isAvailable: true },
];

const HireWorker = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [workers] = useState(mockWorkers);
  const [filteredWorkers, setFilteredWorkers] = useState(mockWorkers);

  useEffect(() => {
    let filtered = workers;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(w => w.workTypes.includes(selectedCategory));
    }
    if (searchQuery) {
      filtered = filtered.filter(w =>
        w.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredWorkers(filtered);
  }, [selectedCategory, searchQuery, workers]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSearchParams({ category, search: searchQuery });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-4">Hire Skilled Workers</h1>
          <p className="text-green-100">Find the best workers for your project</p>

          {/* Search & Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-4 py-3 rounded-lg border-0 bg-white focus:ring-2 focus:ring-green-300 min-w-[200px]"
            >
              <option value="all">All Categories</option>
              {WORK_TYPES.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{filteredWorkers.length} workers found</p>
        </div>

        {/* Workers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorkers.map((worker) => (
            <Link
              key={worker._id}
              to={`/worker/${worker._id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <img src={worker.profileImage} alt={worker.username} className="w-full h-full object-cover" />
                {worker.isAvailable && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Available
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{worker.username}</h3>
                <p className="text-sm text-gray-500 capitalize">{worker.workTypes.join(', ')}</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{worker.averageRating}</span>
                  <span className="text-gray-400 text-sm">({worker.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <span>📍 {worker.location}</span>
                  <span>{worker.experience} yrs exp</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredWorkers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No workers found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HireWorker;
