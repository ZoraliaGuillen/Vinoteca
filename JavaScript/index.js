let vinos;
let tarjetasVinos = document.getElementById("allWines");
let navVinos = document.getElementsByClassName("navLink");
var inputSearch = document.getElementById("input-search");
let home = document.getElementById("home");
let filtrosCategoriaDos = document.getElementsByClassName("cardTipesOfWines");
let filtrosBanderas = document.getElementsByClassName("cardCountries");

async function getData() {
    let data;
    await fetch("/recursos/wines.JSON")
        .then(response => response.json())
        .then(json => data = json)

    vinos = data.tipesOfWines;

    rutas()

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
            console.log(vinos)
            inputSearch.value = ""
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // checkcategories.style.display="flex"
            pintarHTML(vinos)
            break;

        case "vinosTintos":
            inputSearch.value = ""
            let vinosTintos = vinos.filter(vino => vino.TipoDeVino == "Tinto");
            console.log(vinosTintos)
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // checkcategories.style.display="flex"
            pintarHTML(vinosTintos)
            break;

        case "vinosBlancos":
            inputSearch.value = ""
            let vinosBlancos = vinos.filter(vino => vino.TipoDeVino == "Blanco");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // checkcategories.style.display="flex"
            pintarHTML(vinosBlancos)
            break;

        case "vinosRosados":
            inputSearch.value = ""
            let vinosRosados = vinos.filter(vino => vino.TipoDeVino == "Rosado");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // checkcategories.style.display="flex"
            pintarHTML(vinosRosados)
            break;

        case "vinosEspumosos":
            inputSearch.value = ""
            let vinosEspumosos = vinos.filter(vino => vino.TipoDeVino == "Espumoso");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // checkcategories.style.display="flex"
            pintarHTML(vinosEspumosos)
            break;

        case "contacto":
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "none"
            checkcategories.style.display = "none"
            pintarHTML(contacto);
            break;

        default:
            inputSearch.value = ""
            allWines.style.display = "none"
        // checkcategories.style.display= "none"
    }
}

async function pintarHTML(array) {

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
                    <button><a href="./HTML/Details.html?=id${array[i].Id}">VER DETALLE</a></button>
                    <button class="add"><a href="">AGREGAR</a></button>
                </div>
            </div>
        <div>
        `
    }

    tarjetasVinos.innerHTML = html;

}



//COLOCANDO LAS RUTAS DESDE DETALLES A LOS FILTRADOS DE HOME


var page = location.search.split("?page=");

console.log(page); { }


function rutas() {

    var page = location.search.split("?page=");

    console.log(page[1]);

    switch (page[1]) {

        case "vinos": imprimir("vinos")
            console.log("Entre en vinos")
            break;

        case "vinosTintos": imprimir("vinosTintos")
            console.log("Entre en vinos Tintos")
            break;


        case "vinosBlancos": imprimir("vinosBlancos")
            console.log("Entre en vinos Blancos")
            break;


        case "vinosRosados": imprimir("vinosRosados")
            console.log("Entre en vinos Rosados")
            break;


        case "vinosEspumosos": imprimir("vinosEspumosos")
            console.log("Entre en vinos Espumosos")
            break;


        default: imprimir("index")
            console.log("Entre en default")
    }

}





const btnCart = document.querySelector('.fa-cart-shopping');
const containerCartProducts = document.querySelector(".containerCartProducts")

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

const rowProduct = document.querySelector('.rowProduct');
const cartProduct = document.querySelector('.cartProduct');
const cardContainerWines = document.querySelector('.cardContainerWiness')
let allProducts = []
const Total = document.querySelector('.Total');
const countProducts = document.querySelector('#countProductsCartShopping');
const cartEmpty = document.querySelector('.cartEmpty');
const cartTotal = document.querySelector('.cartTotal');

cardContainerWines.addEventListener('click', e => {
    if (e.target.classList.contains('btnAddCart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.name').textContent,
            price: product.querySelector('.price').textContent,
        };

        allProducts= [...allProducts, infoProduct]
    }
    console.log(infoProduct)
})


//FUNCION SEARCH


inputSearch.addEventListener("keyup", function (vino) {    
    var filtroSearch = vino.target.value;
    filtroLimpiado = filtroSearch.trim().toLowerCase();
})

// CREACION DE CHECKBOX DINAMICAS

// function eventsCategories(array) {
//     let categories = array.map(vino => vino.TipoDeVino)
//     let unica = new Set(categories)
//     let lastCategories = [...unica]

//     let categoriasVinos = ""
//     lastCategories.map(category =>
//         categoriasVinos +=
//         `
//     <label><input type="checkbox" value="${TipoDeVino}"> ${TipoDeVino}</label>
//     `
//     )
//     document.getElementById("checkcategories").innerHTML = categoriasVinos

//     checkboxListener()
// }

// FUNCION DE FILTRADO CHECKBOX

function checkboxListener() {

    var checkbox = document.querySelectorAll('input[type=checkbox]');


    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("click", function () {

            arrayCheckbox = [];

            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    arrayCheckbox.push(checkbox[i].value)
                }

            }
            //console.log(arrayCheckbox);



        })

    }

}


//FILTROS CATEGORIAS II


for (let i = 0; i < filtrosCategoriaDos.length; i++) {
    let elementDos = filtrosCategoriaDos[i];
    elementDos.addEventListener("click", function (e) {
        if (e.target.alt == "VinosTintos") {
            imprimir("vinosTintos")
        }
        else if (e.target.alt == "VinosBlancos") {
            imprimir("vinosBlancos")
        }

        else if (e.target.alt == "VinosRosados") {
            imprimir("vinosRosados")
        }

        else {
            imprimir("vinosEspumosos")
        }
    })

}

//FILTROS BANDERAS

for (let i = 0; i < filtrosBanderas.length; i++) {
    let banderas = filtrosBanderas[i];
    banderas.addEventListener("click", function (e) {
        // console.log(e)
         porBanderas(e.target.outerText)
    })
}

function porBanderas(outerText) {


    switch (outerText) {

        case "ARG":
            let banderaArgentina = vinos.filter(vino => vino.Bandera == "Argentina");
            console.log(banderaArgentina)
            break;

        case "AUS":
            let banderaAustralia = vinos.filter(vino => vino.Bandera == "Australia");
            console.log(banderaAustralia)
            break;

        case "CHI":
            let banderaChile = vinos.filter(vino => vino.Bandera == "Chile");
            console.log(banderaChile)
            break;

        case "ESP":
            let banderaEspaña = vinos.filter(vino => vino.Bandera == "España");
            console.log(banderaEspaña)
            break;

        case "EUA":
            let banderaEstadosUnidos = vinos.filter(vino => vino.Bandera == "EstadosUnidos");
            console.log(banderaEstadosUnidos)
            break;

        case "FRA":
            let banderaFrancia = vinos.filter(vino => vino.Bandera == "Francia");
            console.log(banderaFrancia)
            break;

        case "ITA":
            let banderaItalia = vinos.filter(vino => vino.Bandera == "Italia");
            console.log(banderaItalia)
            break;

        case "MEX":
            let banderaMexico = vinos.filter(vino => vino.Bandera == "Mexico");
            console.log(banderaMexico)
            break;

        default:
            let banderaNuevaZelanda = vinos.filter(vino => vino.Bandera == "NuevaZelanda");
            console.log(banderaNuevaZelanda)

    }
}


//FILTROS POR TIPOS DE UVAS

// console.log(vinos)

// let tiposDeUvas=[];
// let uvas= vinos.forEach(element =>{

//     tiposDeUvas.push({
//         dato: uvas.filter(vino=> vino.Uva===element)
// }
// )
// })

// console.log(tiposDeUvas)




