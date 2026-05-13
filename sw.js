const CACHE_NAME = 'daily-app-v3';
const ASSETS = [
  '/',
  '/index.html',
  '/apps/time/index.html',
  '/apps/good-health/index.html',
  '/apps/good-day/index.html',
  '/apps/poop-tracker/index.html',
  '/apps/24-hour-memory/index.html',
  '/apps/rain/index.html'
  // Add all CSS/JS files for the sub-apps here
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Forces the waiting service worker to become the active one
});
/*
// Install the service worker and cache basic files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});
*/

// Intercept requests to serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
