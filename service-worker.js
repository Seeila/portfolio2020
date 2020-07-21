var staticCacheName = "seeila-portfolio-v1";
var urlsToCache = ["/", "/dist/*", "/img/*", "/fonts/*"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
