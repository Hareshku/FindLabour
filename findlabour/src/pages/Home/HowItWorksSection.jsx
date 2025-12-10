import { useState } from 'react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('hiring');
  const [hoveredCard, setHoveredCard] = useState(null);

  const hiringSteps = [
    {
      id: 1,
      title: 'Post your work for free',
      description: 'Create a work post describing your requirements and find the right workers for your job.',
      image: '/images/p13.jpg',
      buttonText: 'Post a Job',
      buttonLink: '/post-work',
    },
    {
      id: 2,
      title: 'Get proposals and hire',
      description: 'Review applications from skilled workers, check their profiles and ratings, then hire the best fit.',
      image: '/images/p14.jpg',
      buttonText: 'Browse Workers',
      buttonLink: '/hire-worker',
    },
    {
      id: 3,
      title: 'Pay when work is done',
      description: 'Release payment only when you are satisfied with the completed work. Safe and secure.',
      image: '/images/p15.jpg',
      buttonText: 'Learn More',
      buttonLink: '/how-it-works',
    },
  ];

  const findWorkSteps = [
    {
      id: 1,
      title: 'Create your profile',
      description: 'Showcase your skills, experience, and work history to attract potential customers.',
      image: '/images/p16.jpg',
      buttonText: 'Sign Up',
      buttonLink: '/register',
    },
    {
      id: 2,
      title: 'Browse and apply',
      description: 'Find work posts that match your skills and location. Apply with a personalized message.',
      image: '/images/p17.jpg',
      buttonText: 'Find Work',
      buttonLink: '/find-work',
    },
    {
      id: 3,
      title: 'Get paid for your work',
      description: 'Complete the job, get rated by the customer, and receive your payment securely.',
      image: '/images/p18.jpg',
      buttonText: 'Learn More',
      buttonLink: '/how-it-works',
    },
  ];

  const steps = activeTab === 'hiring' ? hiringSteps : findWorkSteps;


  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>

          {/* Tabs */}
          <div className="flex border border-gray-200 rounded-full p-1">
            <button
              onClick={() => setActiveTab('hiring')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'hiring'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              For hiring
            </button>
            <button
              onClick={() => setActiveTab('findwork')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'findwork'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              For finding work
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(step.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>

              {/* Description and Button - Only show on hover */}
              <div className={`transition-all duration-300 overflow-hidden ${hoveredCard === step.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <Link
                  to={step.buttonLink}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {step.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
