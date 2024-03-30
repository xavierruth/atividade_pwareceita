var cacheName = 'TURecetas+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/icons',

        './assets/icons/apple.svg',

        './assets/icons/facebook.svg',

        './assets/icons/google.svg',

        './assets/icons/apple.svg',

        './assets/img_user/logonome.svg',

        './assets/img_user/fotousuario.svg',

        './scripts/forms.js',

        './style/style.css',

        './style/login.css',

        './style/reset.css',

        './home.html', 

        './login.html',


        './assets/img/logo_29.png',
        './assets/img/logo_40.png',
        './assets/img/logo_55.png',
        './assets/img/logo_60.png',
        './assets/img/logo_80.png',
        './assets/img/logo_90.png',
        './assets/img/logo_114.png',
        './assets/img/logo_120.png',
        './assets/img/logo_180.png',
        './assets/img/logo_1024.png',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});