    // Cargamos el Navbar y el footer

document.addEventListener("DOMContentLoaded", function() {
    
    fetch('navbar.html')
        .then(function(response) {
            if (!response.ok) {
                throw new Error("No se pudo cargar el navbar");
            }
            return response.text();
        })
        .then(function(data) {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(function(error) {
            console.error(error);
        });

    // Cargamos el Footer
    fetch('footer.html')
        .then(function(response) {
            if (!response.ok) {
                throw new Error("No se pudo cargar el footer");
            }
            return response.text();
        })
        .then(function(data) {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(function(error) {
            console.error(error);
        }); 
        
});

function agregarAlCarrito(botonContenedor) {
    var tarjeta = botonContenedor.closest('.card');

    var elementoNombre = tarjeta.querySelector('.card-title');
    var elementoPrecio = tarjeta.querySelector('.text-neon');
    var elementoImagen = tarjeta.querySelector('.card-img-top');

    var nombre = elementoNombre.innerText;
    
    var precioLimpio = elementoPrecio.innerText.replace('$', '').trim(); 
    
    var imagenUrl = elementoImagen.src;

    var producto = {
        id: nombre, // el nombre será el ID único ?
        nombre: nombre,
        precio: precioLimpio,
        imagen: imagenUrl
    };

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('El producto se ha agregado a tu carrito de compra');
}