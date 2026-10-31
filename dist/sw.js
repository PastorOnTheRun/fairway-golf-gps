const CACHE='fairway-shell-v2';
const FILES=['./','./index.html','./style.css','./app.js','./core.js','./oak-trail.js','./icon.svg','./manifest.webmanifest','./vendor/leaflet.js','./vendor/leaflet.css'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('fairway-shell-')&&k!==CACHE).map(k=>caches.delete(k))))));
// Never prefetch or offline-cache third-party map tiles.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;const allowed=FILES.some(f=>new URL(f,self.registration.scope).pathname===u.pathname);if(!allowed)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok&&!r.redirected){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request)));});
