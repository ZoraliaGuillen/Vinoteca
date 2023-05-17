let vinos;
let tarjetasVinos = document.getElementById("allWines");
let navVinos = document.getElementsByClassName("navLink");

async function getData() {
    let data;
    await fetch("/recursos/wines.JSON")
        .then(response => response.json())
        .then(json => data = json)

    vinos = data.tipesOfWines;

    imprimir()

}

getData();

for (let i = 0; i < navVinos.length; i++) {
    let element = navVinos[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

async function imprimir(id) {

    switch (id) {

        case "vinos":
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinos)
            break;

        case "vinosTintos":
            let vinosTintos = vinos.filter(vino => vino.TipoDeVino == "Tinto");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinosTintos)
            break;

        case "vinosBlancos":
            let vinosBlancos = vinos.filter(vino => vino.TipoDeVino == "Blanco");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinosBlancos)
            break;

        case "vinosRosados":
            let vinosRosados = vinos.filter(vino => vino.TipoDeVino == "Rosado");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinosRosados)
            break;

        case "vinosEspumosos":
            let vinosEspumosos = vinos.filter(vino => vino.TipoDeVino == "Espumoso");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinosEspumosos)
            break;

        case "contacto":
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(contacto);
            break;

        default:
            allWines.style.display = "none"

    }
}

function pintarHTML(array) {

    let html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
        <div class="cardContainerWiness">
            <div class="cardWines">
                <i class="fa-solid fa-heart"></i>
                <img src="./recursos/Images/${array[i].Image}.png" alt="${array[i].Nombre}">
                <img src="./recursos/Images/${array[i].Bandera}.png" alt="" class="flag">
                <p class="score">${array[i].Puntuacion}</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                <h3 class="name">${array[i].Nombre}</h3>
                <p class="winerys">${array[i].Bodega}</p>
                <strong>
                    <p class="price">${array[i].Precio}</p>
                </strong>
                <div class="buttons">
                    <button><a href="./HTML/Details.html?=id=${array[i].Id}.html">VER DETALLE</a></button>
                    <button class="add"><a href="">AGREGAR</a></button>
                </div>
            </div>
        <div>
        `
    }

    tarjetasVinos.innerHTML = html;

}
///

const btnCart = document.querySelector('.fa-cart-shopping');
const containerCartProducts = document.querySelector(".containerCartProducts")

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

const rowProduct = document.querySelector('.rowProduct');
const cartProduct = document.querySelector('.cartProduct');
const cardContainerWiness = document.querySelector('.cardContainerWiness')
let allProducts = []
const Total = document.querySelector('.Total');
const countProducts = document.querySelector('#countProductsCartShopping');
const cartEmpty = document.querySelector('.cartEmpty');
const cartTotal = document.querySelector('.cartTotal');

cardContainerWiness.addEventListener('click', e => {
	
    if (e.target.classList.contains('add')){
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('.name').textContent,
			price: product.querySelector('.price').textContent,

           
            
		};
        
    }
		
});