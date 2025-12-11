import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const WorkDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState('');

  // Mock work post data
  const workPost = {
    _id: id,
    title: 'Need Mason for House Construction',
    description: 'Looking for experienced mason for building a 2-story house. Work includes brick laying, plastering, and finishing work. Must have at least 5 years of experience. Tools will be provided. Food and accommodation available for outstation workers.',
    workType: 'mason',
    location: 'Karachi',
    numberOfWorkers: 3,
    budget: 150000,
    deadline: '2025-12-30',
    status: 'open',
    createdAt: '2025-12-08',
    customer: {
      _id: 'c1',
      username: 'Ahmed Raza',
      profileImage: '/images/p6.jpg',
      averageRating: 4.5,
      totalReviews: 12,
      location: 'Karachi',
    },
    applicants: [
      { _id: 'a1', labor: { username: 'Muhammad Aslam', profileImage: '/images/p1.jpg', averageRating: 4.8 }, status: 'pending' },
      { _id: 'a2', labor: { username: 'Abdul Rehman', profileImage: '/images/p2.jpg', averageRating: 4.6 }, status: 'pending' },
    ],
  };

  const handleApply = () => {
    console.log('Applying with message:', applicationMessage);
    setShowApplyModal(false);
    setApplicationMessage('');
  };

  const isCustomer = user?.role === 'customer';
  const isOwnPost = user?._id === workPost.customer._id;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full capitalize">{workPost.workType}</span>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">{workPost.status}</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{workPost.title}</h1>
              <p className="text-gray-600 whitespace-pre-line">{workPost.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📍</span> <span>{workPost.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>👥</span> <span>{workPost.numberOfWorkers} workers needed</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>💰</span> <span>Rs. {workPost.budget.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📅</span> <span>Deadline: {new Date(workPost.deadline).toLocaleDateString('en-PK')}</span>
                </div>
              </div>
            </div>

            {/* Applicants - Only visible to post owner */}
            {isOwnPost && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Applicants ({workPost.applicants.length})</h2>
                <div className="space-y-4">
                  {workPost.applicants.map((app) => (
                    <div key={app._id} className="flex items-center justify-between p-4 border rounded-xl">
                      <div className="flex items-center gap-3">
                        <img src={app.labor.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-gray-900">{app.labor.username}</p>
                          <p className="text-sm text-gray-500">★ {app.labor.averageRating}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">Accept</button>
                        <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm">View Profile</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


          {/* Sidebar */}
          <div className="space-y-6">
            {/* Customer Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Posted by</h3>
              <Link to={`/profile/${workPost.customer._id}`} className="flex items-center gap-3">
                <img src={workPost.customer.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-gray-900">{workPost.customer.username}</p>
                  <p className="text-sm text-gray-500">★ {workPost.customer.averageRating} ({workPost.customer.totalReviews} reviews)</p>
                </div>
              </Link>
              <p className="text-sm text-gray-500 mt-3">📍 {workPost.customer.location}</p>
            </div>

            {/* Apply Button */}
            {!isCustomer && !isOwnPost && (
              <button
                onClick={() => setShowApplyModal(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium"
              >
                Apply for this Work
              </button>
            )}

            {isOwnPost && (
              <div className="space-y-2">
                <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50">
                  Edit Post
                </button>
                <button className="w-full border border-red-200 text-red-600 py-3 rounded-xl font-medium hover:bg-red-50">
                  Close Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this Work</h3>
            <textarea
              value={applicationMessage}
              onChange={(e) => setApplicationMessage(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none resize-none mb-4"
              placeholder="Write a message to the customer..."
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowApplyModal(false)}
                className="flex-1 border border-gray-200 py-3 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkDetails;
