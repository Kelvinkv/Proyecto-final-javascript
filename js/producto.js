let divProductos =document.getElementById('lista-productos')

async function obtenerProductos (){
    const response = await fetch('./json/productos.json')
    return response.json()
}

let arrayProductos = obtenerProductos().then(
    fetch('./json/productos.json')
.then(res => res.json())
.then(productos =>{
    productos.forEach((producto) => {
        divProductos.innerHTML += `
        <div class="card border-primary mb-3" id="producto${producto.id} "style="max-width: 20rem;">
            <img src="./img/${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <h5 class="card-title pricing-card-title precio">$ <span class="">${producto.precio}</span></h5>
                <p class="card-text">${producto.autor}</p>
                <p class="card-text">Iva Incluido</p>
                <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="${producto.id}">Comprar</a>
            </div>
        </div>
        `
    });
})
)