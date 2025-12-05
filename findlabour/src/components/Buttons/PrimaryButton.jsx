const PrimaryButton = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
