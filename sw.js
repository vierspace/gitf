self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/gitf/',
      '/gitf/index.html',
      '/gitf/index.js',
      '/gitf/style.css',
      '/gitf/images/fox1.jpg',
      '/gitf/images/fox2.jpg',
      '/gitf/images/fox3.jpg',
      '/gitf/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
