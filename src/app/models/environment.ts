export const environment = {
    production: false,
    apiUrl: window["env"]["apiUrl"] || "default",
    apiKey: window["env"]["apiKey"] || "",
    debug: window["env"]["debug"] || false
  };