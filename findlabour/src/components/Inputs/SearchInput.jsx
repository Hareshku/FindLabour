import { useState } from 'react';

const SearchInput = ({ placeholder = 'Search...', onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-28 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 text-gray-700"
      />
      <button
        type="submit"
        className="absolute right-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search
      </button>
    </form>
  );
};

export default SearchInput;
