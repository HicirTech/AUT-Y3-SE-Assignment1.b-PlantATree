if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log('Services worker reg');
    });
}
