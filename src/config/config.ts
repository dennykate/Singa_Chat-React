const config = {
  apiBaseURL: import.meta.env.VITE_API_BASE_URL || "",
  googleClientID: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  encryptStorageSecretKey: import.meta.env.VITE_ENCRYPT_STORAGE_KEY || "",
};

export default config;
