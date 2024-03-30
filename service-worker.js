var cacheName = 'TURecetas-v1.0';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        './index.html',
        './assets/icons/apple.svg',
        './assets/icons/facebook.svg',
        './assets/icons/google.svg',
        './assets/img_user/logonome.svg',
        './assets/img_user/fotousuario.svg',
        './scripts/forms.js',
        './style/style.css',
        './style/login.css',
        './style/reset.css',
        './home.html', 
        './login.html',
        './assets/img/29.png',
        './assets/img/40.png',
        './assets/img/57.png',
        './assets/img/58.png',
        './assets/img/60.png',
        './assets/img/80.png',
        './assets/img/114.png',
        './assets/img/120.png',
        './assets/img/180.png',
        './assets/img/512.png',
        './assets/img/maskable_icon.png',
        './assets/img/1024.png',
      ]))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cache => cache !== cacheName)
          .map(cache => caches.delete(cache))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
