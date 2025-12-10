import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { WORK_TYPES } from '../../constants';

// Mock data for work posts with Pakistani names and locations
const mockWorkPosts = [
  { _id: '1', title: 'Need Mason for House Construction', description: 'Looking for experienced mason for building a 2-story house. Work includes brick laying and plastering.', workType: 'mason', location: 'Karachi', numberOfWorkers: 3, budget: 150000, customer: { username: 'Ahmed Raza', averageRating: 4.5 }, createdAt: '2025-12-08' },
  { _id: '2', title: 'Carpenter Required for Furniture', description: 'Need skilled carpenter to make custom furniture for living room and bedroom.', workType: 'carpenter', location: 'Lahore', numberOfWorkers: 1, budget: 75000, customer: { username: 'Fatima Zahra', averageRating: 4.8 }, createdAt: '2025-12-07' },
  { _id: '3', title: 'Electrician for Office Wiring', description: 'Complete electrical wiring work for new office space. Must have experience with commercial buildings.', workType: 'electrician', location: 'Islamabad', numberOfWorkers: 2, budget: 100000, customer: { username: 'Usman Ali', averageRating: 4.2 }, createdAt: '2025-12-07' },
  { _id: '4', title: 'Plumber for Bathroom Renovation', description: 'Need plumber for complete bathroom renovation including pipe fitting and fixture installation.', workType: 'plumber', location: 'Rawalpindi', numberOfWorkers: 1, budget: 45000, customer: { username: 'Ayesha Khan', averageRating: 4.6 }, createdAt: '2025-12-06' },
  { _id: '5', title: 'Painters for Apartment', description: 'Interior and exterior painting work for 3-bedroom apartment. Quality work expected.', workType: 'painter', location: 'Faisalabad', numberOfWorkers: 4, budget: 120000, customer: { username: 'Hassan Malik', averageRating: 4.4 }, createdAt: '2025-12-06' },
  { _id: '6', title: 'Welder for Gate Fabrication', description: 'Need experienced welder for making iron gates and grills for residential property.', workType: 'welder', location: 'Multan', numberOfWorkers: 1, budget: 60000, customer: { username: 'Sana Bibi', averageRating: 4.7 }, createdAt: '2025-12-05' },
  { _id: '7', title: 'Construction Workers Needed', description: 'Multiple workers needed for construction site. Daily wage basis. Food provided.', workType: 'construction', location: 'Peshawar', numberOfWorkers: 10, budget: 300000, customer: { username: 'Zubair Ahmed', averageRating: 4.3 }, createdAt: '2025-12-05' },
  { _id: '8', title: 'Mechanic for Vehicle Repair', description: 'Looking for mechanic to repair and service fleet of delivery vehicles.', workType: 'mechanic', location: 'Quetta', numberOfWorkers: 2, budget: 90000, customer: { username: 'Kamran Shah', averageRating: 4.9 }, createdAt: '2025-12-04' },
];

const FindWork = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [workPosts] = useState(mockWorkPosts);
  const [filteredPosts, setFilteredPosts] = useState(mockWorkPosts);

  useEffect(() => {
    let filtered = workPosts;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.workType === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, workPosts]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSearchParams({ category, search: searchQuery });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-4">Find Work</h1>
          <p className="text-gray-300">Browse available work opportunities posted by customers</p>

          {/* Search & Filter Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by title, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300"
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-4 py-3 rounded-lg border-0 bg-white focus:ring-2 focus:ring-green-300 min-w-[200px]"
            >
              <option value="all">All Work Types</option>
              {WORK_TYPES.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{filteredPosts.length} work posts found</p>
        </div>

        {/* Work Posts List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              to={`/work/${post._id}`}
              className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full capitalize">
                      {post.workType}
                    </span>
                    <span className="text-gray-400 text-sm">{formatDate(post.createdAt)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>📍 {post.location}</span>
                    <span>👥 {post.numberOfWorkers} worker{post.numberOfWorkers > 1 ? 's' : ''} needed</span>
                    <span>💰 Rs. {post.budget.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-medium">
                    {post.customer.username.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.customer.username}</p>
                    <p className="text-xs text-gray-500">★ {post.customer.averageRating}</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium text-sm">View Details →</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No work posts found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindWork;
