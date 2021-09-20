const productos = [
    {
        nombre: 'Juegos',
        link: 'https://i.pinimg.com/236x/da/04/18/da04188f52cf14e3ab3f159d583e0d21.jpg',
        precio: 20, 
    },
    {
        nombre: 'Correas',
        link: 'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',   
        precio: 30,
    },
    {
        nombre: 'Cuchas',
        link: 'https://i.pinimg.com/236x/a6/64/ec/a664ec323750e48a6be9f9cf58039e84.jpg',
        precio: 25,
    },
    {
        nombre:'Accesorios', 
        link : 'https://i.pinimg.com/236x/e5/bf/e1/e5bfe1cfa27a679c4fc9866778f537ff.jpg',   
        precio: 15,
    },
    
    {
        nombre:'Pretales',
        link: 'https://i.pinimg.com/236x/8f/7d/a6/8f7da6092777a362409cdc9a7e4f7710.jpg',   
        precio: 52,
    },
    
    {
        nombre:'Collares',
        link:'https://i.pinimg.com/236x/fd/d2/4f/fdd24fc60ee0d65a6d4ff50a8e30aa42.jpg',   
        precio: 12,
    },
    
    {
        nombre:'Capuchas',
        link:'https://i.pinimg.com/236x/a1/cb/83/a1cb8345baeef69e6ca4353668e2834a.jpg',  
        precio: 13,
    },
    {
        nombre:'Mochilas',
        link:'https://i.pinimg.com/236x/5a/36/a7/5a36a7194f5a8bf4546870df10d912d9.jpg',   
        precio: 54,
    },
    {
        nombre: 'Set correa',
        link:'https://i.pinimg.com/236x/f7/5b/14/f75b14ab8a6927819a521cbb1e0b3199.jpg',
        precio: 60,
    },
    {
        nombre:'Iglu',
        link:'https://i.pinimg.com/236x/63/0b/e2/630be26b1be8fce7d3118159ee7ce056.jpg',
        precio:23,
    },
    {
        nombre:'Botellas',
        link:'https://i.pinimg.com/236x/ba/12/df/ba12df3fc5ac6f4b4a07795ec349fa78.jpg',
        precio: 42,
    },
    {
        nombre:'Mochi',
        link:'https://i.pinimg.com/236x/04/9a/6a/049a6ae5f5480552de6763a9469b8b05.jpg',
        precio: 50,
    },
    {
        nombre:'Gorras',
        link:'https://i.pinimg.com/236x/61/42/40/614240751cc06df14e0d5fc29ad50b74.jpg',
        precio: 34,
    },
    {
        nombre:'Remeras',
        link:'https://i.pinimg.com/236x/12/7b/3d/127b3df33d621d53309c495adcbbdd57.jpg',
        precio: 34,
    },
    {
        nombre:'Esencial',
        link:'https://i.pinimg.com/236x/fd/f9/20/fdf920c205812d1eb4abe142f09df1ff.jpg',
        precio: 34,
    },
    {
        nombre:'Extencibles',
        link:'https://i.pinimg.com/236x/d2/fb/cf/d2fbcfa03241224a7cb2749b66c61821.jpg',
        precio: 34,
    },
    
];
const main = document.getElementsByTagName("main")[0];

const crearYAgregarProducto = (producto)=> {  
    const contenedor = document.createElement("div");
    const nombre = document.createElement('p');

    const imagenProducto = document.createElement("img");

    //al div le agrego nombreProducto y imagenProducto
    contenedor.appendChild(imagenProducto);
    contenedor.appendChild(nombre);

    nombre.textContent= producto.nombre;

    //le agrego una clase al contenedor
    contenedor.classList.add("producto");    
    

    //seteo atributos de la imagen
    imagenProducto.setAttribute("src",producto.link);
    imagenProducto.setAttribute("alt", producto.nombre);
    
    main.appendChild(contenedor);
}

for(let i = 0 ; i < productos.length ; i++){
    crearYAgregarProducto(productos[i]);
}