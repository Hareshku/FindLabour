const SecondaryButton = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
