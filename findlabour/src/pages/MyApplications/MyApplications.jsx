import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyApplications = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const applications = [
    { _id: '1', workPost: { _id: 'w1', title: 'Need Mason for House Construction', workType: 'mason', location: 'Karachi', budget: 150000, customer: { username: 'Ahmed Raza' } }, status: 'pending', appliedAt: '2025-12-08' },
    { _id: '2', workPost: { _id: 'w2', title: 'Painter for Apartment', workType: 'painter', location: 'Lahore', budget: 80000, customer: { username: 'Fatima Khan' } }, status: 'accepted', appliedAt: '2025-12-05' },
    { _id: '3', workPost: { _id: 'w3', title: 'Electrician for Shop', workType: 'electrician', location: 'Islamabad', budget: 35000, customer: { username: 'Usman Ali' } }, status: 'rejected', appliedAt: '2025-12-01' },
  ];

  const filteredApps = applications.filter(a => {
    if (activeTab === 'all') return true;
    return a.status === activeTab;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Applications</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['all', 'pending', 'accepted', 'rejected'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${activeTab === tab ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApps.map((app) => (
            <div key={app._id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                    <span className="text-gray-400 text-sm">Applied {new Date(app.appliedAt).toLocaleDateString('en-PK')}</span>
                  </div>
                  <Link to={`/work/${app.workPost._id}`} className="text-lg font-semibold text-gray-900 hover:text-green-600">
                    {app.workPost.title}
                  </Link>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 {app.workPost.location}</span>
                    <span>💰 Rs. {app.workPost.budget.toLocaleString()}</span>
                    <span>👤 {app.workPost.customer.username}</span>
                  </div>
                </div>
                {app.status === 'accepted' && (
                  <Link to="/messages" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                    Message
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">No applications found</p>
            <Link to="/find-work" className="text-green-600 font-medium mt-2 inline-block">Browse available work →</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
