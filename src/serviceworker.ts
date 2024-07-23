export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        await navigator.serviceWorker.register(swUrl);
      } catch (error) {
        console.error('Service Worker registration failed: ', error);
      }
    });
  }
}
