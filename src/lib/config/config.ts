const config = {
  baseApiURL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
  baseWsURL: import.meta.env.VITE_WS_BASE_URL || "ws://localhost:5000",
  googleClientID: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  encryptStorageSecretKey: import.meta.env.VITE_ENCRYPT_STORAGE_KEY || "",
};

export default config;
