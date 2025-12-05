export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password) => {
  return password.length >= 8;
};

export const isValidPhone = (phone) => {
  const regex = /^\+?[\d\s-]{10,}$/;
  return regex.test(phone);
};
