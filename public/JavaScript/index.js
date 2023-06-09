// MENU DESPLEGABLE

var nav= document.querySelector(".navVinos");
var open = document.querySelector("#open");
var close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visibility");
})

close.addEventListener("click", () => {
    nav.classList.remove("visibility");
})


let tarjetasVinos = document.getElementById("tarjetasVinos");
let navVinos = document.getElementsByClassName("navLink");
let home = document.getElementById("home");
let filtrosCategoriaDos = document.getElementsByClassName("cardTipesOfWines");
let filtrosBanderas = document.getElementsByClassName("cardCountries");
let filtrosUvas = document.getElementsByClassName("cardGrapes");
var input = document.getElementById("input");
var detalles = document.getElementsByClassName("ancla");
let contact = document.getElementById("contacto");
let ocultar = document.getElementById("ocultar");
let iconoVino = document.getElementById("iconoVino");
let filtrado = [];
var arrayAFiltrar = []
let arrayCheckbox = [];
let datoLimpio = "";
let datoInput = "";
let vinos;

async function infoVinoteca() {

    const vinoteca = firebase.firestore().collection("vinoteca"); 

    let dataApi=[]
  vinoteca.get()
    .then((results) => {

      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dataApi.push(...data)
      vinos = dataApi

  });

        rutas()
  
    }
    infoVinoteca()

for (let i = 0; i < navVinos.length; i++) {
    let element = navVinos[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

 async function imprimir(id) {
    console.log("id imprimir", id)

    switch (id) {

        case "vinos":
            console.log(vinos)
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // ocultar.style.display="flex"
            contact.style.display= "none"
            arrayAFiltrar = vinos;
            input.value = "";
            pintarHTML(vinos)
            uvasCategories(vinos)
            // search(vinos)
            break;

        case "vinosTintos":
            let vinosTintos = vinos.filter(vino => vino.tipoDeVino == "Tinto");
            console.log(vinosTintos)
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            // ocultar.style.display="none"
            contact.style.display= "none";
            arrayAFiltrar = vinosTintos;
            arrayCheckbox = [];
            input.value = "";
            pintarHTML(vinosTintos)
            uvasCategories(vinosTintos)
            // search(vinosTintos)
            break;

        case "vinosBlancos":
            let vinosBlancos = vinos.filter(vino => vino.tipoDeVino == "Blanco");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            // ocultar.style.display="none"
            allWines.style.display = "flex"
            contact.style.display= "none"
            arrayAFiltrar = vinosBlancos;
            arrayCheckbox = [];
            input.value = "";
            pintarHTML(vinosBlancos)
            uvasCategories(vinosBlancos)
            // search(vinosBlancos)
            break;

        case "vinosRosados":
            let vinosRosados = vinos.filter(vino => vino.tipoDeVino == "Rosado");
            console.log(vinosRosados)
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            // ocultar.style.display="none"
            allWines.style.display = "flex"
            contact.style.display= "none"
            arrayAFiltrar = vinosRosados;
            arrayCheckbox = [];
            input.value = "";
            pintarHTML(vinosRosados)
            uvasCategories(vinosRosados)
            // search(vinosRosados)
            break;

        case "vinosEspumosos":
            let vinosEspumosos = vinos.filter(vino => vino.tipoDeVino == "Espumoso");
            console.log(vinosEspumosos)
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            // ocultar.style.display="none"
            allWines.style.display = "flex"
            contact.style.display= "none"
            arrayAFiltrar = vinosEspumosos;
            arrayCheckbox = [];
            input.value = "";
            pintarHTML(vinosEspumosos)
            uvasCategories(vinosEspumosos)
            break;

        case "contactos":
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "none"
            contact.style.display = "flex"
            break;

        default:
            home.style.display = "flex"
            wines.style.display = "flex"
            tipesOfWines.style.display = "flex"
            tipesOfGrapes.style.display = "flex"
            countries.style.display = "flex"
            recommendedWines.style.display = "flex"
            newslatter.style.display = "flex"
            allWines.style.display = "none"
            contact.style.display= "none"
            break;
    }
}

function pintarHTML(array) {

    let html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `
            <div class="cardWines">
                <i class="fa-solid fa-heart"></i>
                <img class="img" src=${array[i].imagen} alt="${array[i].nombre}">
                <img src=${array[i].bandera} alt="" class="flag">
                <p class="score">${array[i].puntuacion}</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                <h3 class="name">${array[i].nombre}</h3>
                <p class="winerys" class="winery">${array[i].bodega}</p>
                    <p class="price">$${array[i].precio}</p>
                    <button><a href="./HTML/Details.html?=id${array[i].id}">VER DETALLE</a></button>
                    <button class="btnAddCart">AGREGAR</button>
            </div>
        `
    }

    tarjetasVinos.innerHTML = html;

}



//COLOCANDO LAS RUTAS DESDE DETALLES A LOS FILTRADOS DE HOME

var page = location.search.split("?page=");

console.log(page);

console.log(location.search) 


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

iconoVino.addEventListener("click", function(e){
    console.log(e)
    // iconoVino.href="./index.html"
})

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
        console.log(product.querySelector('.name').textContent)

        const infoProduct = {
            quantity: 1,
            img: product.querySelector('.img').src,
            name: product.querySelector('.name').textContent,
            price: product.querySelector('.price').textContent,
        }
        allProducts = [...allProducts,infoProduct]
    }
    console.log(allProducts)
})

// allProducts.forEach(product=>{
//     const 
// })


//CODIGO DE CARRITO

//variables
// let allContainerCart = document.querySelector('.products');
// let containerBuyCart = document.querySelector('.card-items');
// let priceTotal = document.querySelector('.price-total')
// let amountProduct = document.querySelector('.count-product');


// let buyThings = [];
// let totalCard = 0;
// let countProduct = 0;

// //functions
// loadEventListenrs();
// function loadEventListenrs(){
//     allContainerCart.addEventListener('click', addProduct);

//     containerBuyCart.addEventListener('click', deleteProduct);
// }

// function addProduct(e){
//     e.preventDefault();
//     if (e.target.classList.contains('btn-add-cart')) {
//         const selectProduct = e.target.parentElement; 
//         readTheContent(selectProduct);
//     }
// }

// function deleteProduct(e) {
//     if (e.target.classList.contains('delete-product')) {
//         const deleteId = e.target.getAttribute('data-id');

//         buyThings.forEach(value => {
//             if (value.id == deleteId) {
//                 let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
//                 totalCard =  totalCard - priceReduce;
//                 totalCard = totalCard.toFixed(2);
//             }
//         });
//         buyThings = buyThings.filter(product => product.id !== deleteId);

//         countProduct--;
//     }
//     //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
//     if (buyThings.length === 0) {
//         priceTotal.innerHTML = 0;
//         amountProduct.innerHTML = 0;
//     }
//     loadHtml();
// }

// function readTheContent(product){
//     const infoProduct = {
//         image: product.querySelector('div img').src,
//         title: product.querySelector('.title').textContent,
//         price: product.querySelector('div p span').textContent,
//         id: product.querySelector('a').getAttribute('data-id'),
//         amount: 1
//     }

//     totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
//     totalCard = totalCard.toFixed(2);

//     const exist = buyThings.some(product => product.id === infoProduct.id);
//     if (exist) {
//         const pro = buyThings.map(product => {
//             if (product.id === infoProduct.id) {
//                 product.amount++;
//                 return product;
//             } else {
//                 return product
//             }
//         });
//         buyThings = [...pro];
//     } else {
//         buyThings = [...buyThings, infoProduct]
//         countProduct++;
//     }
//     loadHtml();
//     //console.log(infoProduct);
// }

// function loadHtml(){
//     clearHtml();
//     buyThings.forEach(product => {
//         const {image, title, price, amount, id} = product;
//         const row = document.createElement('div');
//         row.classList.add('item');
//         row.innerHTML = `
//             <img src="${image}" alt="">
//             <div class="item-content">
//                 <h5>${title}</h5>
//                 <h5 class="cart-price">${price}$</h5>
//                 <h6>Amount: ${amount}</h6>
//             </div>
//             <span class="delete-product" data-id="${id}">X</span>
//         `;

//         containerBuyCart.appendChild(row);

//         priceTotal.innerHTML = totalCard;

//         amountProduct.innerHTML = countProduct;
//     });
// }
//  function clearHtml(){
//     containerBuyCart.innerHTML = '';
//  }


//FUNCION SEARCH

input.addEventListener("keyup", function (vino) {

    var datoInput = vino.target.value;
    datoLimpio = datoInput.trim().toLowerCase();
    console.log(datoLimpio)


    //  let filtrado= arrayAFiltrar.filter(vino => vino.Nombre.toLowerCase().includes(datoLimpio))

    // pintarHTML(filtrado)

    filtrosCombinados()
})



//CREACION DE CHECKBOX DINAMICAS

function uvasCategories(array) {
    let categoriesUvas = array.map(vino => vino.uva)
    let categoriesPais = array.map(vino=> vino.pais)
    let categoriesTipos = array.map(vino => vino.tipoDeVino)
    let unica3 = new Set(categoriesTipos)
    let unica2 =new Set(categoriesPais)
    let unica = new Set(categoriesUvas)
    let lastCategoriesTipos = [...unica3]
    let lastCategoriesPais = [...unica2]
    let lastCategories = [...unica]


    //FILTROS UVAS

    let categoriasUvas = ""
    lastCategories.map(category =>
        categoriasUvas +=
        `<div>
        <input type="checkbox" value="${category}">
        <label> ${category}</label>
        <div>
    `
    )
    document.getElementById("checkboxTiposDeUvas").innerHTML = categoriasUvas

        //FILTROS PAIS

    let categoriasPais = ""
    lastCategoriesPais.map(category => 
        categoriasPais +=
           `<div>
           <input type="checkbox" value="${category}">
           <label> ${category}</label>
           <div>
    ` )

    document.getElementById("checkboxPaises").innerHTML = categoriasPais

        //FILTROS TIPOS

    let categoriasTipos = ""
    lastCategoriesTipos.map(category => 
        categoriasTipos +=
           `<div>
           <input type="checkbox" value="${category}">
           <label> ${category}</label>
           <div>
    ` )

    document.getElementById("checkboxTiposDeVinos").innerHTML = categoriasTipos


    checkboxListener()
    checkboxListenerUvas()
}


// FUNCION DE FILTRADO CHECKBOX PAISES 

function checkboxListener() {

    var filtrosPaises = document.getElementById("checkboxPaises");
    var checkboxPaises = filtrosPaises.querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < checkboxPaises.length; i++) {
        checkboxPaises[i].addEventListener("click", function () {
            arrayCheckbox = [];
            for (var i = 0; i < checkboxPaises.length; i++) {
                if (checkboxPaises[i].checked) {
                    arrayCheckbox.push(checkboxPaises[i].value)
                }
            }
            console.log(arrayCheckbox)
            filtrosCombinados()
        })
    }
}

function checkboxListenerUvas() {

    var filtrosUvas = document.getElementById("checkboxTiposDeUvas");
    var checkboxUvas = filtrosUvas.querySelectorAll('input[type="checkbox"]');

    console.log(checkboxUvas)

    arrayCheckbox=[];

    for (var i = 0; i < checkboxUvas.length; i++) {
        checkboxUvas[i].addEventListener("click", function () {
            arrayCheckbox = [];
            for (var i = 0; i < checkboxUvas.length; i++) {
                if (checkboxUvas[i].checked) {
                    arrayCheckbox.push(checkboxUvas[i].value)
                }
            }
            console.log(arrayCheckbox)
            filtrosCombinadosUvas()
        })
    }
}



function filtrosCombinados() {
// console.log(datoLimpio)
// console.log("Llamamos a la funcion")
// console.log(arrayCheckbox)
    var vinosPorBanderas = [];

    if (datoLimpio !== "" && arrayCheckbox.length > 0) {
        arrayCheckbox.map(bandera => {
            vinosPorBanderas.push(...arrayAFiltrar.filter(vino =>
                vino.nombre.toLowerCase().includes(datoLimpio) && vino.pais === bandera))
        })

    }

    else if (datoLimpio !== "" && arrayCheckbox.length == 0) {
        vinosPorBanderas = arrayAFiltrar.filter(vino => vino.nombre.toLowerCase().includes(datoLimpio))
    }

    else if (datoLimpio === "" && arrayCheckbox.length > 0) {

        arrayCheckbox.map(category =>
            vinosPorBanderas.push(...arrayAFiltrar.filter(vino => vino.pais === category))
        )
    }

    else {
        vinosPorBanderas = arrayAFiltrar

    }


    vinosPorBanderas.length > 0 ?
        pintarHTML(vinosPorBanderas) :
        tarjetasVinos.innerHTML = `<h1 class="ceroResult" >No se encontraron eventos para tu busqueda </h1>`

}

// FUNCION DE FILTRADO CHECKBOX TIPO DE UVA


function filtrosCombinadosUvas() {

    console.log("llamado a uvas")

    var vinosPorUva = [];

    if (datoLimpio !== "" && arrayCheckbox.length > 0) {
        arrayCheckbox.map(uva => {
            vinosPorUva.push(...arrayAFiltrar.filter(vino =>
                vino.nombre.toLowerCase().includes(datoLimpio) && vino.uva === uva))
        })

    }

    else if (datoLimpio !== "" && arrayCheckbox.length == 0) {
        vinosPorUva = arrayAFiltrar.filter(vino => vino.nombre.toLowerCase().includes(datoLimpio))
    }

    else if (datoLimpio === "" && arrayCheckbox.length > 0) {

        arrayCheckbox.map(uva =>
            vinosPorUva.push(...arrayAFiltrar.filter(vino => vino.uva === uva))
        )
    }

    else {
        vinosPorUva= arrayAFiltrar

    }


    vinosPorUva.length > 0 ?
        pintarHTML(vinosPorUva) :
        tarjetasVinos.innerHTML = `<h1 class="ceroResult" >No se encontraron eventos para tu busqueda </h1>`

}



//FILTROS CATEGORIAS II -LANDING


for (let i = 0; i < filtrosCategoriaDos.length; i++) {
    let elementDos = filtrosCategoriaDos[i];
    elementDos.addEventListener("click", function (e) {
        if (e.target.parentElement.id == "VinosTintos") {
            imprimir("vinosTintos")
        }
        else if (e.target.parentElement.id == "VinosBlancos") {
            imprimir("vinosBlancos")
        }

        else if (e.target.parentElement.id == "VinosRosados") {
            imprimir("vinosRosados")
        }

        else {
            imprimir("vinosEspumosos")
        }
    })

}

//FILTROS UVAS LANDING

for (let i = 0; i < filtrosUvas.length; i++) {
    let uvas = filtrosUvas[i];
    uvas.addEventListener("click", function (e) {
        porUvas(e.target.parentElement.id)
    })
}

function porUvas(outerText) {

    switch (outerText) {

        case "CAS":
            let uvaCAS = vinos.filter(vino => vino.uva == "Cabernet Sauvignon");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaCAS)
            break;

        case "CHA":
            let uvaCHA = vinos.filter(vino => vino.uva == "Chardonnay");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaCHA)
            break;

        case "GRE":
            let uvaGRE = vinos.filter(vino => vino.uva == "Grenache");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaGRE)
            break;

        case "GRB":
            let uvaGRB = vinos.filter(vino => vino.uva == "Grenache Blanc");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaGRB)
            break;

        case "MAC":
            let uvaMAC = vinos.filter(vino => vino.uva == "Macabeo");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaMAC)
            break;

        case "MAL":
            let uvaMAL = vinos.filter(vino => vino.uva == "Malbec");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaMAL)
            break;

        case "MER":
            let uvaMER = vinos.filter(vino => vino.uva == "Merlot");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaMER)
            break;

        case "MEZ":
            let uvaMEZ = vinos.filter(vino => vino.uva == "Mezcla");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaMEZ)
            break;

        case "PIN":
            let uvaPIN = vinos.filter(vino => vino.uva == "Pinot Noir");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaPIN)
            break;

        case "SAN":
            let uvaSAN = vinos.filter(vino => vino.uva == "Sangiovese");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaSAN)
            break;

        case "SAB":
            let uvaSAB = vinos.filter(vino => vino.uva == "Sauvignon Blanc");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaSAB)
            break;

        case "SHS":
            let uvaSHS = vinos.filter(vino => vino.uva == "Shiraz-Syrah");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(uvaSHS);
            break;
    }

}

//FILTROS BANDERAS LANDING

for (let i = 0; i < filtrosBanderas.length; i++) {
    let banderas = filtrosBanderas[i];
    banderas.addEventListener("click", function (e) {
        console.log(e)
        porBanderas(e.target.parentElement.id)
    })
}

function porBanderas(outerText) {

    switch (outerText) {

        case "ARG":
            let banderaArgentina = vinos.filter(vino => vino.pais == "Argentina");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaArgentina)
            break;

        case "AUS":
            let banderaAustralia = vinos.filter(vino => vino.pais == "Australia");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaAustralia)
            break;

        case "CHI":
            let banderaChile = vinos.filter(vino => vino.bandera == "Chile");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaChile)
            break;

        case "ESP":
            let banderaEspaña = vinos.filter(vino => vino.pais == "España");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaEspaña)
            break;

        case "EUA":
            let banderaEstadosUnidos = vinos.filter(vino => vino.pais == "Estados Unidos");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaEstadosUnidos)
            break;

        case "FRA":
            let banderaFrancia = vinos.filter(vino => vino.pais == "Francia");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaFrancia)
            break;

        case "ITA":
            let banderaItalia = vinos.filter(vino => vino.pais == "Italia");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaItalia)
            break;

        case "MEX":
            let banderaMexico = vinos.filter(vino => vino.pais == "Mexico");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaMexico)
            break;

        case "NZL":
            let banderaNuevaZelanda = vinos.filter(vino => vino.pais == "NuevaZelanda");
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(banderaNuevaZelanda)
            break;

        default:
            home.style.display = "none"
            wines.style.display = "none"
            tipesOfWines.style.display = "none"
            tipesOfGrapes.style.display = "none"
            countries.style.display = "none"
            recommendedWines.style.display = "none"
            newslatter.style.display = "none"
            allWines.style.display = "flex"
            pintarHTML(vinos)
    }

}


// FUNCION ACORDEON

let elementAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < elementAcordeon.length; i++) {
    elementAcordeon[i].addEventListener("click", function () {
        this.classList.toggle("active")
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    })
}



