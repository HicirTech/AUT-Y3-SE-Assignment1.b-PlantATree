var deferredPrompt;

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log('Services worker reg');
    });
}
window.addEventListener('beforeinstallprompt',function(event){
    console.log("BEFORE INSTALL");
    event.preventDefault();
    deferredPrompt = event;
    return false;
});