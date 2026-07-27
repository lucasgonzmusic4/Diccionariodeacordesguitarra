self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
  // Este evento vacío es el truco para que Chrome reconozca la PWA
});
