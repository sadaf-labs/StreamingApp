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

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then((success) => {
        if (success) {
          console.log('Service worker unregistered successfully');
        } else {
          console.warn('Service Worker unregistration failed');
        }
      }).catch((error) => {
        console.error('Service Worker unregistration failed: ', error);
      });
    });
  }
}
