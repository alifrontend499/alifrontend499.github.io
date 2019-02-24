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


// let data = document.querySelectorAll('[action="/action_page.php"] input');

// console.time("start");
// if (data.length) {
//         // for (const itr of data) {
//         //     console.log(itr.value);
//         // }
//     // for (let i = 0; i < data.length; i++) {
//     //     const element = data[i];
//     //     console.log(element.value);        
//     // }
//     // data.forEach(elem => {
//     //     console.log(elem.value);
//     // });
// } else {
//     console.log("Not found");
// }
// console.timeEnd("start");