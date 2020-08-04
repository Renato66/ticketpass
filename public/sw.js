var CACHE_NAME = 'offline'
var urlsToCache = ['/login', '/dashboard', '/sign-up']

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
      .catch(function (error) {
        console.log(error)
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(function (error) {
        console.log(error)
      })
  )
})

self.addEventListener('activate', function (event) {
  var cacheWhitelist = ['offline']
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      ).catch(function (error) {
        console.log(error)
      })
    })
  )
})
