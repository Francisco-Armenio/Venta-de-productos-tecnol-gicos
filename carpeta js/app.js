const productos = [
    {
        id: "pepito-01",
        titulo: "Pepito",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "computadora"
        },
        precio: 1000,
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_978048-MLU72575033044_112023-O.webp",
        categoria:{
            nombre: "hola",
            id: "computadora"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "si",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "computadora"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "no",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "computadora"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "pepe",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "papa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holanda",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 100
    },
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "computadora"
        },
        precio: 100
    }
];

const contenedorProductos = document.querySelector("#lista-2");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){
    
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{
        const div=document.createElement("div")
        div.classList.add("container-products")
        div.innerHTML = `
        <div class="articulos card-products">
                <div class="container-img">
                    <img src="${producto.imagen}">
                </div>
                <div class="content-card-product">
                    <h3>${producto.titulo}</h3>
                    <span class="add-card">
                        <i class="producto-agregar fa-solid fa-basket-shopping" id="${producto.id}"></i>
                    </span>
                    <p class="price">$${producto.precio}</p>
                </div>
            </div>
        `

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todo"){
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            cargarProductos(productos)
        }

       
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar= document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = []

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}




document.addEventListener("keyup", e =>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".articulos").forEach(productos => {
            productos.textContent.toLowerCase().includes(e.target.value)
            ? productos.classList.remove("filtro")
            : productos.classList.add("filtro");
        })
    }
})

