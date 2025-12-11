import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WORK_TYPES } from '../../constants';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    location: '',
    // Labor specific fields
    experience: '',
    age: '',
    gender: '',
    workTypes: [],
    bio: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const pakistanCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
    'Hyderabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleWorkTypeChange = (workType) => {
    const updated = formData.workTypes.includes(workType)
      ? formData.workTypes.filter(w => w !== workType)
      : [...formData.workTypes, workType];
    setFormData({ ...formData, workTypes: updated });
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const validateStep2 = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };


  const handleNextStep = () => {
    if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Mock registration - replace with actual API call
      // const response = await axiosInstance.post('/auth/register', { ...formData, role });

      console.log('Registration data:', { ...formData, role });

      // Mock success
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-8">
            <span className="text-3xl font-bold text-gray-900">Find</span>
            <span className="text-3xl font-bold text-green-600">Labour</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= s ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-green-600' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            {/* Step 1: Role Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Join FindLabour</h2>
                <p className="text-gray-500 text-center mb-8">Select how you want to use FindLabour</p>

                <div className="space-y-4">
                  <button
                    onClick={() => handleRoleSelect('customer')}
                    className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                        👔
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600">I want to hire workers</h3>
                        <p className="text-sm text-gray-500">Post work and find skilled labour</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleRoleSelect('labor')}
                    className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                        🔧
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600">I want to find work</h3>
                        <p className="text-sm text-gray-500">Browse jobs and get hired</p>
                      </div>
                    </div>
                  </button>
                </div>

                <p className="text-center mt-6 text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">Log in</Link>
                </p>
              </div>
            )}


            {/* Step 2: Basic Info */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Create your account</h2>
                <p className="text-gray-500 text-center mb-8">Enter your basic information</p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                      placeholder="Create a password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}


            {/* Step 3: Additional Info */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {role === 'customer' ? 'Complete your profile' : 'Tell us about your skills'}
                </h2>
                <p className="text-gray-500 text-center mb-8">
                  {role === 'customer' ? 'Add your location details' : 'Help customers find you'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                    >
                      <option value="">Select your city</option>
                      {pakistanCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {role === 'labor' && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                          <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            min="18"
                            max="65"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                            placeholder="Your age"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                          >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
                        <input
                          type="number"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          min="0"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                          placeholder="Years of experience"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Work Types (select all that apply)</label>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                          {WORK_TYPES.map(type => (
                            <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.workTypes.includes(type.value)}
                                onChange={() => handleWorkTypeChange(type.value)}
                                className="w-4 h-4 text-green-600 rounded"
                              />
                              <span className="text-sm text-gray-700">{type.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio (optional)</label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows="3"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none resize-none"
                          placeholder="Tell customers about yourself..."
                        />
                      </div>
                    </>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium disabled:opacity-50"
                    >
                      {loading ? 'Creating account...' : 'Create Account'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
          alt="Workers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/60" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Join our community</h3>
            <p className="text-lg text-white/80">
              {role === 'labor'
                ? 'Find work opportunities that match your skills'
                : 'Connect with skilled workers for your projects'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
