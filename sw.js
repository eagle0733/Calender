self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open('v1').then(cache =>
      cache.match(e.request).then(r => r || fetch(e.request).then(resp => {
        cache.put(e.request, resp.clone());
        return resp;
      }))
    )
  );
});