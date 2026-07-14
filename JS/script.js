//------------------En caso de dudas revisar todas que dejé en mi codigo Atte: Essaw Cortez


const elementoCarrusel = document.querySelector('#carruselProductos');

// TRANSICION PARA BOOTSTRAP
// Hice una variable llamada 'miCarrusel' y le pasé las instrucciones 
const miCarrusel = new bootstrap.Carousel(elementoCarrusel, {

  // 'interval' es el tiempo que tarda en cambiar de página, medido en milisegundos.
  // 4000 milisegundos = 4 segundos por cada vista.
    interval: 4000,

  // 'wrap: true' le dice que cuando llegue al Artículo 6, no se detenga, 
  // sino que vuelva a empezar desde el Artículo 1 como un ciclo infinito.
    wrap: true,


});

