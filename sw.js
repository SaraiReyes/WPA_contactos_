//instala proceso
self.addEventListener('install', e => {
    console.log('sw instalado')
})

//activa
self.addEventListener('activate', e => {
    console.log('sw esta activado')
})