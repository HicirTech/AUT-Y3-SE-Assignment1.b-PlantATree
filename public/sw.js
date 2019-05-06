self.addEventListener('install', function(event){
    console.log('[SW] Installing Server worker ...',event);
});
self.addEventListener('activate', function(event){
    console.log('[SW] Activating Server worker ...',event);
    return self.clients.claim();
});