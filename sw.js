const staticCache = 'static-cache';
const dinamicCache = 'dynamic-cache';
const assets = [
        '/',
        '/index.html',
        '/js/app.js',
        '/js/ui.js',
        '/js/materialize.min.js',
        '/css/materialize.min.css',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        '/pages/fallback.html'
    ]
    //instala proceso
self.addEventListener('install', e => {
    //console.log('sw instalado')
    caches.open(staticCache).then(cache => {
        cache.addAll(assets)
    })
})

//activa
self.addEventListener('activate', e => {
    console.log('sw esta activado')
})

//
self.addEventListener('fetch', e => {
    // console.log('sw evevto fetch,e')
    e.responseWith(
        caches.match(e.request).then(staticRes => {
            return staticRes || fetch(e.request).then(dinamicCache => {
                return cache.open(ddinamicCache).then(cache => {
                    cache.put(e.request.url, ddinamicCache.clone())
                    return ddinamicCache
                })
            })
        })
    )
})