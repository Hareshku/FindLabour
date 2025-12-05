import { Link } from 'react-router-dom';
import { WORK_TYPES } from '../../constants';

const categoryIcons = {
  construction: '🏗️',
  carpenter: '🪚',
  plumber: '🔧',
  electrician: '⚡',
  painter: '🎨',
  field: '🌾',
  cleaning: '🧹',
  gardening: '🌱',
  moving: '📦',
  delivery: '🚚',
  mechanic: '🔩',
  welder: '🔥',
  mason: '🧱',
  other: '🛠️',
};

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find skilled workers across various categories or post your work requirements
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {WORK_TYPES.slice(0, 14).map((type) => (
            <Link
              key={type.value}
              to={`/find-work?category=${type.value}`}
              className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-green-50 hover:border-green-200 border border-transparent transition-all group"
            >
              <span className="text-3xl mb-2">{categoryIcons[type.value]}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 text-center">
                {type.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
