let vinosDetalles;

async function getData() {
    let datosApi
    await fetch("./recursos/wines.JSON")
        .then(response => response.json())
        .then(json => datosApi=json)

        vinosDetalles = datosApi.tipesOfWines;

        console.log(vinosDetalles)

        imprimirDetalles()

}

getData()

 function imprimirDetalles() {

    let id = location.search.split("?id=").filter(Number)
    let selectId = id[0]
    let Detalles = []

    for (var i = 0; i < vinosDetalles.length; i++) {

        if (vinosDetalles[i].Id==selectId) {
            detalles.push(vinosDetalles[i])
        }
    }

    console.log(Detalles)

    var tarjetasVinosDetalles = document.getElementById("allWinesDetails")
    tarjetasVinosDetalles.innerHTML = 

    `<div class="cardContainerDetails">
    <div class="imageCardDetails">
        <i class="fa-solid fa-heart"></i>
        <img src="../recursos/Images/${detalles[0].Image}.png" alt="${detalles[0].Nombre}" class="wine">
        <img src="../recursos/Images/${detalles[0].Bandera}.png" alt="Bandera de ${detalles[0].Bandera}" class="flag">
    </div>
    <div class="cardDetails">
        <h3 class="name">${detalles[0].Nombre}</h3>
        <p class="winery">${detalles[0].Bodega}</p>
        <strong>
            <p class="price">${detalles[0].Precio}0$</p>
        </strong>
        <div class="buttonsDetail">
            <div class="quantity">
                <button>-</button>
                <div>1</div>
                <button>+</button>
            </div>
            <button class="shoppingCart">AGREGAR A CARRITO <i class="fa-solid fa-cart-shopping color"></i></button>
        </div>
        <div class="winesDetails">
            <h3>Detalles</h3>
            <div>
                <h4>Nombre :</h4>
                <p>${detalles[0].Nombre}</p>
            </div>
            <div>
                <h4>Bodega :</h4>
                <p>${detalles[0].Bodega}</p>
            </div>
            <div>
                <h4>País :</h4>
                <p>${detalles[0].Pais}</p>
            </div>
            <div>
                <h4>Región :</h4>
                <p>${detalles[0].Region}</p>
            </div>
            <div>
                <h4>Tipo de Vino :</h4>
                <p>${detalles[0].TipoDeVino}</p>
            </div>
            <div>
                <h4>Uva :</h4>
                <p>${detalles[0].Uva}</p>
            </div>
            <div>
                <h4>Cosecha :</h4>
                <p>${detalles[0].Cosecha}</p>
            </div>
            <div>
                <h4>Puntuación :</h4>
                <p>${detalles[0].Puntuacion}</p>
            </div>
        </div>
    </div>
</div>
    `
}

