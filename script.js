const productos = [
    {
     nombre: 'Pillamas',
     link: 'https://images.unsplash.com/photo-1630361102412-bd7ed8710307?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
     precio: 20, 
    },
    {
     nombre: 'Capuchas',
     link: 'https://images.unsplash.com/photo-1629907959345-f538f62b9faf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',   
     precio: 30,
    },
    {
     nombre: 'Colgantes',
     link: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
     precio: 25,
    },
    {
     nombre:'Sport', 
     link : 'https://images.unsplash.com/photo-1629824230786-1c212b964863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',   
     precio: 15,
    },
    
    {
     nombre:'Yankie',
     link: 'https://images.unsplash.com/photo-1609231616387-5e652b6b14f1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwN3xKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
     precio: 52,
    },
    
    {
     nombre:'Raper',
     link:'https://images.unsplash.com/photo-1618071147329-803bf99d9746?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
     precio: 12,
    },
    
    {
     nombre:'Grafiti',
     link:'https://images.unsplash.com/photo-1529330121067-e61627c90967?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwMXxKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
     precio: 13,
    },
    {
     nombre:'Pretales',
     link:'https://images.unsplash.com/photo-1624956741711-9e4001049662?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzOHxKcGc2S2lkbC1Ia3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',   
     precio: 54,
    },
];
const aside = document.getElementsByTagName("aside")[0];

const crearYAgregarProducto = (producto)=> {  
    const contenedor = document.createElement("div");
    
    const nombreProducto = document.createElement("h2");

    const imagenProducto = document.createElement("img");

    //al div le agrego nombreProducto y imagenProducto
    contenedor.appendChild(nombreProducto);
    contenedor.appendChild(imagenProducto);

    //le agrego una clase al contenedor
    contenedor.classList.add("producto");

    //le agrego un texto de contenido al producto
    nombreProducto.textContent= producto.nombre;
    
    //seteo atributos de la imagen
    imagenProducto.setAttribute("src",producto.link);
    imagenProducto.setAttribute("alt", producto.nombre);
    
    aside.appendChild(contenedor);
}

for(let i = 0 ; i < productos.length ; i++){
    crearYAgregarProducto(productos[i]);
}