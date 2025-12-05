import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/hire-worker" className="hover:text-white">How to Hire</Link></li>
              <li><Link to="/hire-worker" className="hover:text-white">Post a Work</Link></li>
              <li><Link to="/services" className="hover:text-white">Browse Categories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Workers</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/find-work" className="hover:text-white">How to Find Work</Link></li>
              <li><Link to="/find-work" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/register" className="hover:text-white">Create Profile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="#" className="hover:text-white">Help & Support</Link></li>
              <li><Link to="#" className="hover:text-white">Success Stories</Link></li>
              <li><Link to="#" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/why-findlabour" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Contact</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold">Find</span>
            <span className="text-xl font-bold text-green-500">Labour</span>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2025 FindLabour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
