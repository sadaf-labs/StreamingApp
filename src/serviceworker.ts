export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const swUrl = `/service-worker.js`;
        await navigator.serviceWorker.register(swUrl);
      } catch (error) {
        console.error('Service Worker registration failed: ', error);
      }
    });
  }
}
