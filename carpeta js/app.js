const productos = [
    {
        id: "hola",
        titulo: "holaaa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_921195-MLA74420606310_022024-O.webp",
        categoria:{
            nombre: "hola",
            id: "hola"
        },
        precio: 1000,
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
    }
];

const contenedorProductos = document.querySelector("#lista-2")

function cargarProductos(){
    productos.forEach(producto =>{
        const div=document.createElement("div")
        div.classList.add("container-products")
        div.innerHTML = `
        <div class="card-products">
                <div class="container-img">
                    <img src="${producto.imagen}">
                </div>
                <div class="content-card-product">
                    <h3>${producto.titulo}</h3>
                    <span class="add-card">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </span>
                    <p class="price">$${producto.precio}</p>
                </div>
            </div>
        `

        contenedorProductos.append(div);
    })
}

cargarProductos();
