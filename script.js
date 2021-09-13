const productos = [
    {
     nombre: 'Juegos',
     link: 'https://i.pinimg.com/236x/fe/67/d7/fe67d7387793d711f1fc0c6ccaa79229.jpg',
     precio: 20, 
    },
    {
     nombre: 'Correas',
     link: 'https://i.pinimg.com/236x/5e/34/7f/5e347f6294f7fb353a377e9792a87988.jpg',   
     precio: 30,
    },
    {
     nombre: 'Para Dormir',
     link: 'https://i.pinimg.com/236x/2e/87/fa/2e87fa1ce277e90fce89c1d0af9de9c4.jpg',
     precio: 25,
    },
    {
     nombre:'Accesorios', 
     link : 'https://i.pinimg.com/236x/a1/5f/dd/a15fdd491e96250d2b5455bdfaa8b448.jpg',   
     precio: 15,
    },
    
    {
     nombre:'Pretales',
     link: 'https://i.pinimg.com/236x/dd/08/39/dd083986e6106a8b420c7bc7dd1a9999.jpg',   
     precio: 52,
    },
    
    {
     nombre:'Collares',
     link:'https://i.pinimg.com/236x/51/c9/7d/51c97df5cb02f9e4aec1572961408b76.jpg',   
     precio: 12,
    },
    
    {
     nombre:'Ropa',
     link:'https://i.pinimg.com/236x/7e/33/ca/7e33cacd000c6897f70a67f8b1ea8c00.jpg',   
     precio: 13,
    },
    {
     nombre:'Mochilas',
     link:'https://i.pinimg.com/236x/58/fd/07/58fd0780bbb1f015792af53b9026c479.jpg',   
     precio: 54,
    },
];
const aside = document.getElementsByTagName("aside")[0];

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
    
    aside.appendChild(contenedor);
}

for(let i = 0 ; i < productos.length ; i++){
    crearYAgregarProducto(productos[i]);
}