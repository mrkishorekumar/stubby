addEventListener("install", (event) => {});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('javascript/sw.js');
  }