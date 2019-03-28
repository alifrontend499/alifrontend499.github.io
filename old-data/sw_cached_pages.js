const cacheName = 'v1';
const cacheAssets = [
    'favicon.png',
    'index.html',
    '/css/style.css',
    '/js/app.js',
    '/w3images/architect.jpg'
];

// CALL INSTALL EVENT
self.addEventListener('install', (ev) => {
    console.log('ServiceWorker INSTALLED');

    ev.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log(`Service worker cachng files...`);
            cache.addAll(cacheAssets)
        }).then(() => self.skipWaiting())
    )
});

// CALL ACTIVATE EVENT
self.addEventListener('activate', (ev) => {
    console.log('ServiceWorker ACTIVATED');
    // REMOVE UNWANTED CACHES
    ev.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log("Service working clearing all cache");
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

// CALL FETCH EVENT

self.addEventListener('fetch', (ev) => {
    console.log("Service worker fetching...");
    ev.respondWith(
        fetch(ev.request).catch(() => caches.match(ev.request))
    )
})