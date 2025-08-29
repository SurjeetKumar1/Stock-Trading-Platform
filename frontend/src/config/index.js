// Environment-based configuration
const isDevelopment = process.env.NODE_ENV === 'development';

// Backend URL - use environment variable if available, otherwise fallback
export const DB_URL = process.env.REACT_APP_BACKEND_URL || 
  (isDevelopment ? "http://localhost:3002" : "https://stock-trading-platform-e9bz.onrender.com");

// Zerodha Kite URL
export const zerodha_kite = "https://zerodha-kite-kappa.vercel.app";

// Log configuration for debugging
console.log('Environment:', process.env.NODE_ENV);
console.log('Backend URL:', DB_URL);
