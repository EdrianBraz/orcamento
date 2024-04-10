// service-worker.js

const CACHE_NAME = 'Marmoraria-rio-vermelho-orcamento';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/LogoMenu.png',
  '/index.html',  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
