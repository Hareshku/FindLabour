import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const WriteReview = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const revieweeId = searchParams.get('for');

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock data
  const reviewee = {
    username: 'Muhammad Aslam',
    profileImage: '/images/p1.jpg',
    role: 'labor',
  };

  const workPost = {
    title: 'Need Mason for House Construction',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    setLoading(true);
    try {
      // Mock API call
      console.log('Submitting review:', { workPostId: id, revieweeId, rating, comment });
      navigate(-1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h1>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          {/* Reviewee Info */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            <img src={reviewee.profileImage} alt="" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-gray-900">{reviewee.username}</p>
              <p className="text-sm text-gray-500">{workPost.title}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-4xl transition-colors"
                  >
                    <span className={
                      (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                    }>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </p>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none resize-none"
                placeholder="Share your experience working with this person..."
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || rating === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
