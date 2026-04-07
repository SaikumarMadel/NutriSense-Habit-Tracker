/**
 * NutriSense Service Worker
 * Caches app shell for offline support
 */

const CACHE_NAME = 'nutrisense-v2';
const SHELL_ASSETS = [
  './',
  './index.html',
  './onboarding.html',
  './planner.html',
  './scanner.html',
  './tracker.html',
  './insights.html',
  './css/style.css',
  './css/components.css',
  './css/animations.css',
  './js/storage.js',
  './js/profile.js',
  './js/planner.js',
  './js/tracker.js',
  './js/nutrition.js',
  './js/suggestions.js',
  './js/charts.js',
  './js/app.js',
  './assets/manifest.json'
];

const FONT_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons+Round'
];

/**
 * Install event — cache the app shell
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(SHELL_ASSETS);
    })
  );
  self.skipWaiting();
});

/**
 * Activate event — clean old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

/**
 * Fetch event — cache-first for shell,
 * network-first for API calls
 */
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Network-first for API calls
  if (url.hostname === 'world.openfoodfacts.org') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return new Response(
            JSON.stringify({
              products: [],
              error: 'offline'
            }),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
        })
    );
    return;
  }

  // Stale-while-revalidate for Google Fonts
  if (url.hostname.includes('googleapis.com') ||
      url.hostname.includes('gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetched = fetch(event.request)
          .then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
            return response;
          })
          .catch(() => cached);
        return cached || fetched;
      })
    );
    return;
  }

  // Cache-first for app shell
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
