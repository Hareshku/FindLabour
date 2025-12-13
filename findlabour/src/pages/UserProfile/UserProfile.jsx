import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('about');

  // Mock user data - replace with API call
  const profileData = {
    _id: id || '1',
    username: 'Muhammad Aslam',
    email: 'aslam@example.com',
    mobileNumber: '0300-1234567',
    location: 'Karachi',
    role: 'labor',
    profileImage: '/images/p1.jpg',
    experience: 8,
    age: 35,
    gender: 'male',
    workTypes: ['construction', 'mason', 'painter'],
    bio: 'Experienced construction worker with 8+ years in the industry. Specialized in brick laying, plastering, and painting work.',
    averageRating: 4.8,
    totalReviews: 45,
    isAvailable: true,
    completedJobs: 52,
    createdAt: '2024-01-15',
  };

  const reviews = [
    { _id: '1', reviewer: { username: 'Ahmed Raza' }, rating: 5, comment: 'Excellent work! Very professional and completed on time.', createdAt: '2025-12-01' },
    { _id: '2', reviewer: { username: 'Fatima Khan' }, rating: 4, comment: 'Good quality work. Would recommend.', createdAt: '2025-11-28' },
    { _id: '3', reviewer: { username: 'Usman Ali' }, rating: 5, comment: 'Very skilled and hardworking. Great experience!', createdAt: '2025-11-20' },
  ];

  const isOwnProfile = user?._id === profileData._id;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-green-500 to-green-600" />
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16">
              <img
                src={profileData.profileImage}
                alt={profileData.username}
                className="w-32 h-32 rounded-2xl border-4 border-white object-cover shadow-lg"
              />
              <div className="flex-1 sm:pb-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">{profileData.username}</h1>
                  {profileData.isAvailable && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
                  )}
                </div>
                <p className="text-gray-500 capitalize">{profileData.workTypes.join(' • ')}</p>
              </div>

              <div className="flex gap-2 mt-4 sm:mt-0">
                {!isOwnProfile && (
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Contact
                  </button>
                )}
                {isOwnProfile && (
                  <Link to="/edit-profile" className="border border-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
                    Edit Profile
                  </Link>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-6 pt-6 border-t">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{profileData.averageRating}</p>
                <p className="text-sm text-gray-500">Rating ★</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{profileData.totalReviews}</p>
                <p className="text-sm text-gray-500">Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{profileData.completedJobs}</p>
                <p className="text-sm text-gray-500">Jobs Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{profileData.experience}</p>
                <p className="text-sm text-gray-500">Years Exp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'about' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            Reviews ({profileData.totalReviews})
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'about' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600 mb-6">{profileData.bio}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">📍</span>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{profileData.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">📞</span>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{profileData.mobileNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">🎂</span>
                  <div>
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="font-medium text-gray-900">{profileData.age} years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">📅</span>
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="font-medium text-gray-900">{new Date(profileData.createdAt).toLocaleDateString('en-PK', { month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review._id} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-medium">
                        {review.reviewer.username.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{review.reviewer.username}</p>
                        <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString('en-PK')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
