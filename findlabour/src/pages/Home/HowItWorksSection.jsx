const HowItWorksSection = () => {
  const customerSteps = [
    { icon: '📝', title: 'Post Your Work', desc: 'Describe the work you need done with details' },
    { icon: '👥', title: 'Get Applications', desc: 'Receive applications from skilled workers' },
    { icon: '✅', title: 'Hire & Complete', desc: 'Choose the best worker and get work done' },
  ];

  const laborSteps = [
    { icon: '👤', title: 'Create Profile', desc: 'Showcase your skills and experience' },
    { icon: '🔍', title: 'Find Work', desc: 'Browse and apply to work posts' },
    { icon: '💰', title: 'Get Paid', desc: 'Complete work and receive payment' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Customers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">For Customers</span>
            </h3>
            <div className="space-y-6">
              {customerSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Workers */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">For Workers</span>
            </h3>
            <div className="space-y-6">
              {laborSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
