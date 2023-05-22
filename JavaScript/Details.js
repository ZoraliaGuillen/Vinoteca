let vinos;

async function getData() {
    let datosApi
    await fetch("/recursos/wines.JSON")
        .then(response => response.json())
        .then(json => datosApi = json)

        vinos = datosApi.tipesOfWines;

        imprimir()
}

getData()

function imprimir() {

    let id = location.search.split("?=id=").filter(Number)
    let selectId = id[0]
    let Detalles = []

    for (var i = 0; i < vinos.length; i++) {

        if (vinos[i].id==selectId) {
            Detalles.push(vinos[i])
        }
    }

    var tarjetasVinosDetalles = document.getElementById("allWinesDetails")
    tarjetasVinosDetalles.innerHTML = `<div class="cardContainerDetails">
    <div class="imageCardDetails">
        <i class="fa-solid fa-heart"></i>
        <img src="../recursos/Images/${Detalles[0].Image}.png" alt="" class="wine">
        <img src="../recursos/Images/${Detalles[0].Bandera}.png" alt="" class="flag">
    </div>
    <div class="cardDetails">
        <h3 class="name">${Detalles[0].Nombre}</h3>
        <p class="winery">${Detalles[0].Bodega}</p>
        <strong>
            <p class="price">${Detalles[0].Precio}0$</p>
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
                <p>${Detalles[0].Nombre}</p>
            </div>
            <div>
                <h4>Bodega :</h4>
                <p>${Detalles[0].Bodega}</p>
            </div>
            <div>
                <h4>País :</h4>
                <p>${Detalles[0].Pais}</p>
            </div>
            <div>
                <h4>Región :</h4>
                <p>${Detalles[0].Region}</p>
            </div>
            <div>
                <h4>Tipo de Vino :</h4>
                <p>${Detalles[0].TipoDeVino}</p>
            </div>
            <div>
                <h4>Uva :</h4>
                <p>${Detalles[0].Uva}</p>
            </div>
            <div>
                <h4>Cosecha :</h4>
                <p>${Detalles[0].Cosecha}</p>
            </div>
            <div>
                <h4>Puntuación :</h4>
                <p>${Detalles[0].Puntuacion}</p>
            </div>
        </div>
    </div>
</div>
    `
}

