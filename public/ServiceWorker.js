const cacheName = "PWA-Calculator" ;
const staticAssets = [
    "./" ,
    "./index.html",
    "./style.css"
] ;

self.addEventListener("install" ,function (event) {
    event.waitUntil (
        caches.open(cacheName).then(function(cache){
            return cache.addAll(staticAssets);
        })
    );
});


self.addEventListener("fetch",function(event) {
    event.respondWith(
        caches.match(event.request).then(function (res) {
            if(res){
                return res ;
            }

            return fetch(event.request)
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                throw error
            }) ;
        })
    );
}); 