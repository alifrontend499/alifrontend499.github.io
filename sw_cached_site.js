const cacheName = 'v2';

// CALL INSTALL EVENT
self.addEventListener('install', (ev) => {
    console.log('ServiceWorker INSTALLED');
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
        fetch(ev.request).then(res => {
            // MAKE COPY OF RESPONSICE
            const resClone = res.clone();
            caches.open(cacheName).then(cache => {
                // ADD RESPONSIVE TO THE CACHE
                cache.put(ev.request, resClone)
            });
            return res;
        }).catch(err => caches.map(e.request).then(res))
    )
})