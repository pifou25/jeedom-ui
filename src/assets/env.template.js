(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["apiUrl"] = "${API_URL}";
    window["env"]["apiKey"] = "${API_KEY}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);