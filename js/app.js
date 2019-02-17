// CHECKING SUPPORT
if ('serviceWorker' in navigator) {
    window.addEventListener('load', (ev) => {
        navigator.serviceWorker.register("../sw_cached_site.js").then(reg => {
            console.log(`Success`);
        }).catch(err => {
            console.log(err);
        })
    });
}