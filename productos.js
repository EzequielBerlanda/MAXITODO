const productos = [
    {nombre: "Galletas Valido x 450gr", precio: 250.00, img: "../multimedia/Frame2galletasvalido.png"},
    {nombre: "Chocolate Hamlet", precio: 71.00, img: "../multimedia/Frame2hamlet.png"},
    {nombre: "Paletin Manduvi", precio: 190.00, img: "../multimedia/Frame2paletinmanduvi.png"},
    {nombre: "Mentitas La Casa", precio: 605.00, img: "../multimedia/Frame2mentitaslacasa.png"},
    {nombre: "Confites choock x 1 k", precio: 2750.00, img: "../multimedia/Frame2confiteschook.png"},
    {nombre: "Mauri sin sal x 400g", precio: 350.00, img: "../multimedia/Frame2maurisinsal.png"},
    {nombre: "Pepa d. D. La nona x 350g", precio: 215.00, img: "../multimedia/Frame2pepasdeliciadelanona.png"},
    {nombre: "Salsas Noel", precio: 99.00, img: "../multimedia/Frame2salsanoel.png"},
]

// aqui se mostraran los productos
const ofertas = document.getElementById("ofertasDeploy")

if(productos){
// aqui vamos a recorrer el array y crear una card por cada producto
    productos.forEach((item) => {
        let contenedor = document.createElement("div");
        // aqui asigno el classname para darle estilos
        contenedor.className = `cardContenido`;
        contenedor.innerHTML = `
        <div class="titleCard"> 
        <p>${item.nombre}</p>
        </div>
        <div class="imgCard">
        <img src="${item.img}" alt="">
        </div>
        <div class="precioCard">
        <p>$${item.precio}</p>
        </div>
        `;
        ofertas.appendChild(contenedor);
      })

}else{
    contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <p> No hay ofertas disponibles </p>
    `
    ofertas.appendChild(contenedor);
}