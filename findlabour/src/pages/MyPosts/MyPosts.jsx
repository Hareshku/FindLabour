import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPosts = () => {
  const [activeTab, setActiveTab] = useState('open');

  const posts = [
    { _id: '1', title: 'Need Mason for House Construction', workType: 'mason', location: 'Karachi', budget: 150000, status: 'open', applicants: 5, createdAt: '2025-12-08' },
    { _id: '2', title: 'Electrician for Office Wiring', workType: 'electrician', location: 'Lahore', budget: 80000, status: 'in_progress', applicants: 3, createdAt: '2025-12-05' },
    { _id: '3', title: 'Painter for Apartment', workType: 'painter', location: 'Islamabad', budget: 45000, status: 'completed', applicants: 8, createdAt: '2025-11-20' },
  ];

  const filteredPosts = posts.filter(p => {
    if (activeTab === 'open') return p.status === 'open';
    if (activeTab === 'active') return p.status === 'in_progress';
    if (activeTab === 'completed') return p.status === 'completed';
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-700';
      case 'in_progress': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Work Posts</h1>
          <Link to="/post-work" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium">
            + Post New Work
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['open', 'active', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${activeTab === tab ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab === 'active' ? 'In Progress' : tab}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Link key={post._id} to={`/work/${post._id}`} className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(post.status)}`}>
                      {post.status.replace('_', ' ')}
                    </span>
                    <span className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleDateString('en-PK')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 {post.location}</span>
                    <span>💰 Rs. {post.budget.toLocaleString()}</span>
                    <span>👥 {post.applicants} applicants</span>
                  </div>
                </div>
                <span className="text-green-600 text-sm">View →</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
