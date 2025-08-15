const CACHE_NAME = 'jk-portfolio-v1';
const OFFLINE_URL = '/';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      '/',
      '/favicon.ico',
      '/manifest.webmanifest',
    ]);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const res = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, res.clone());
      return res;
    } catch (err) {
      const offline = await caches.match(OFFLINE_URL);
      return offline || new Response('Offline', { status: 503 });
    }
  })());
}); 