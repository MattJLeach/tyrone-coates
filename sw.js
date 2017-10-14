self.addEventListener('install', function(event) {
  console.log('Installed', event);
  event.waitUntil(caches.open('static').then(function(cache) {
    cache.addAll([
      '/',
      '/index.html',
      '/css/styles.css',
      '/js/scripts.js',
      'https://fonts.googleapis.com/css?family=Titillium+Web',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'
    ]);
  }));
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if(response) {
      return response;
    } else {
      return fetch(event.request);
    }
  }));
})