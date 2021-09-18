/* eslint-disable no-restricted-globals */
const filesToCache = [
  'css/style.min.css',
  'js//fontawesome.min.js',
  'js/script.min.js',
  'media/logo192.png',
  'media/logo512.png',
  'media/muted.png',
  'media/pause.png',
  'media/play.png',
  'media/steve-jobs-1.png',
  'media/steve-jobs-design.mp4',
  'media/steve-jobs.png',
  'media/unmuted.png'
];
const vNum = Math.floor(Math.random() * 1000000000000) + 1;
const staticCacheName = `canada-cache-v${vNum}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        return cache.addAll(filesToCache);
      }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.map(
                (cN) => cacheWhitelist.indexOf(cN) === -1 && caches.delete(cN),
            ),
        );
      }),
  );
});
