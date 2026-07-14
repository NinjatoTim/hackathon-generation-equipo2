document.addEventListener("DOMContentLoaded", function() {
    //se ejecuta la función renderizarCarrito por primera vez al cargar la página
    renderizarCarrito();
});

function renderizarCarrito() {
    var listaContenedor = document.getElementById('lista-carrito');

    // leemos LocalStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Si el carrito no tiene nada, imprimimos está vacio
    if (carrito.length === 0) {
        listaContenedor.innerHTML = `
            <div class="text-center col-12">
                <p class="fs-5 text-secondary">Tu carrito está vacío.</p>
                <a href="index.html" class="btn btn-outline-light mt-2">Volver a la tienda</a>
            </div>
        `;
        return;
    }

    // Si hay productos, construimos html
    var htmlContenido = '<div class="col-md-8">';
    var total = 0;

    // Recorremos el carrito para sumar precios y armar las filas
    carrito.forEach(function(producto, index) {
        total = total + parseFloat(producto.precio);

        htmlContenido = htmlContenido + `
            <div class="producto-carrito">
                <div class="producto-info">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                    <div>
                        <h6 class="mb-0 fw-bold">${producto.nombre}</h6>
                        <small class="texto-neon-total">$${producto.precio}</small>
                    </div>
                </div>
                <button type="button" class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})" aria-label="Eliminar producto">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
    });

    // Agregamos la fila del Total y el botón de Finalizar Compra
    htmlContenido = htmlContenido + `
        <div class="carrito-footer">
            <h4 class="fw-bold">Total: <span class="text-success">$${total.toFixed(2)}</span></h4>
            <button type="button" id="btn-finalizar" class="btn btn-personalizado btn-lg fw-bold px-4" onclick="finalizarCompra()">
                Finalizar Compra
            </button>
        </div>
    </div>`;

    // lo mostramos en nuestro div
    listaContenedor.innerHTML = htmlContenido;
}

// Función bote de basura
function eliminarProducto(posicion) {
    //leemos local storage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Eliminamos el elemento en esa posición 
    carrito.splice(posicion, 1);
    
    // Guardamos la lista actualizada 
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Volvemos a llamar a renderizarCarrito para que redibuje la lista actualizada 
    renderizarCarrito();
}

// Función para finalizar compra  (que básicamente es libera storage y mostrar un alert)
function finalizarCompra() {
    
    localStorage.removeItem('carrito');
    
    alert('compra finalizada');
    
    // redigirimos a index.html
    window.location.href = 'index.html';
}