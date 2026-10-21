// Service worker: aplikacja działa offline.
// Po każdej zmianie plików aplikacji podnieś numer wersji, aby telefon pobrał nowe pliki.
const CACHE = 'przyjecia-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Najpierw pamięć podręczna (szybki start, działa bez zasięgu),
// w tle pobranie świeżej wersji na następne uruchomienie.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });
    const network = fetch(req)
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          cache.put(req, copy);
        }
        return res;
      })
      .catch(() => cached);
    if (cached) {
      event.waitUntil(network.then(() => {}, () => {}));
      return cached;
    }
    return network;
  })());
});
