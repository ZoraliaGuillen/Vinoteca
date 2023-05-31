let vinosDetalles;

async function infoVinotecaDos() {

    const vinotecaDos = firebase.firestore().collection("vinoteca"); 

    let dataApiDos=[]
   await vinotecaDos.get()
    .then((results) => {

      const data = results.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dataApiDos.push(...data)

      vinosDetalles = dataApiDos;

    console.log(vinosDetalles);
  });

  imprimirDetalles()
  
    }

infoVinotecaDos()

function imprimirDetalles() {

    console.log("hola")

    let id = location.search.split("?=id")
    // .filter(Number)
    console.log(id)
    let selectId = id[1]
    console.log(selectId)
    let detalles = []

    for (var i = 0; i < vinosDetalles.length; i++) {

        if (vinosDetalles[i].id==selectId) {
            detalles.push(vinosDetalles[i])
        }
    }

    console.log(detalles)

    var tarjetasVinosDetalles = document.getElementById("allWinesDetails")
    tarjetasVinosDetalles.innerHTML = 

    `<div class="cardContainerDetails">
    <div class="imageCardDetails">
        <i class="fa-solid fa-heart"></i>
        <img src=${detalles[0].imagen} alt="${detalles[0].nombre}" class="wine">
        <img src=${detalles[0].bandera} alt="Bandera de ${detalles[0].bandera}" class="flag">
    </div>
    <div class="cardDetails">
        <h3 class="name">${detalles[0].nombre}</h3>
        <p class="winery">${detalles[0].bodega}</p>
        <strong>
            <p class="price">$${detalles[0].precio}0</p>
        </strong>
        <div class="winesDetails">
            <h3>Detalles</h3>
            <div>
                <h4>Nombre :</h4>
                <p>${detalles[0].nombre}</p>
            </div>
            <div>
                <h4>Bodega :</h4>
                <p>${detalles[0].bodega}</p>
            </div>
            <div>
                <h4>País :</h4>
                <p>${detalles[0].pais}</p>
            </div>
            <div>
                <h4>Región :</h4>
                <p>${detalles[0].region}</p>
            </div>
            <div>
                <h4>Tipo de Vino :</h4>
                <p>${detalles[0].tipoDeVino}</p>
            </div>
            <div>
                <h4>Uva :</h4>
                <p>${detalles[0].uva}</p>
            </div>
            <div>
                <h4>Cosecha :</h4>
                <p>${detalles[0].cosecha}</p>
            </div>
            <div>
                <h4>Puntuación :</h4>
                <p>${detalles[0].puntuacion}</p>
            </div>
        </div>
    </div>
</div>
    `
}

