export const calculateIVA = (price: number, iva: number = 0.21): number => {
  if (price < 0) {
    throw new Error("The price need be positive");
  }
  return Math.round(price * (1 + iva) * 100) / 100;
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
