if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('sw registrado', reg))
        .catch(err => console.log('sw no registrado error', err))
}