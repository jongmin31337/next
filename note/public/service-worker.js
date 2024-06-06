const CACHE_NAME = 'my-cache-v1';
//https://cdn.golfday.uneekor.com
const urlsToCache = [
  // 'https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0525.data',
  // 'https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0525.framework.js',
  // 'https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0525.loader.js',
  // 'https://cdn.golfday.uneekor.com/test/GolfCourse_URP_0525.wasm ',
  '/webgl/Test.loader.js',
  '/webgl/Test.data',
  '/webgl/Test.framework.js',
  '/webgl/Test.wasm',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});