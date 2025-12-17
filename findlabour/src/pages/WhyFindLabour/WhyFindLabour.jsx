import { Link } from 'react-router-dom';

const WhyFindLabour = () => {
  const features = [
    { icon: '🤝', title: 'Fair & Dignified Work', desc: 'We believe every worker deserves respect. Our platform ensures fair treatment and transparent dealings.' },
    { icon: '✅', title: 'Verified Profiles', desc: 'All workers and customers go through verification to ensure safety and trust for everyone.' },
    { icon: '⭐', title: 'Rating System', desc: 'Make informed decisions with our transparent rating and review system from real experiences.' },
    { icon: '💬', title: 'Direct Communication', desc: 'Chat directly with workers or customers to discuss requirements before committing.' },
    { icon: '📍', title: 'Local Connections', desc: 'Find workers in your city or nearby areas for quick and convenient hiring.' },
    { icon: '💰', title: 'No Hidden Fees', desc: 'Posting work and creating profiles is completely free. Pay only for the work done.' },
  ];

  const stats = [
    { value: '10,000+', label: 'Registered Workers' },
    { value: '5,000+', label: 'Work Posts' },
    { value: '50,000+', label: 'Jobs Completed' },
    { value: '15+', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose FindLabour?
          </h1>
          <p className="text-xl text-green-100 mb-8">
            We are building Pakistan's most trusted platform connecting skilled workers with customers who value quality work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50">
              Get Started
            </Link>
            <Link to="/find-work" className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10">
              Browse Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-green-600">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            FindLabour was created with a simple mission: to connect hardworking people with opportunities while ensuring fairness and dignity for all. Whether you are a skilled worker looking for your next job or a customer seeking reliable help, we are here to make that connection seamless and trustworthy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Join thousands of workers and customers already using FindLabour</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium">
              Create Account
            </Link>
            <Link to="/hire-worker" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50">
              Hire Workers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyFindLabour;
