function afficheProduits() {
    fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(data =>  { 
        console.log(data);
        for (const ours of data) {
            document.getElementById("ours1").innerHTML += `
            <a href="produit.html?id=${ours._id}" id="${ours.name}">
                <div id="ours2">
                    <div>
                        <img src="${ours.imageUrl}" alt="Card image cap">
                    <div>
                    <div class="nom">
                        <h5>${ours.name} <span>${ours.price}€</span></h5>
                    </div>
                </div>
            </a>`;          
        }
    });
}

let tablours;
function creationTab() {
    fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(data =>  { 
        console.log(data);
        tablours = data;
    });
};

/* début des fonctions produits */

function recupProduit() {
    let strUrl = window.location.href;
    let tabUrl = strUrl.split(`?id=`);
    let id = tabUrl[1];
    fetch("http://localhost:3000/api/teddies/"+id)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("produit1").innerHTML = `
        <div class="img">
        <img id="image" src="${data.imageUrl}" alt="image produit">
        </div>
        <div class="texte">
            <h1 id="titre">${data.name}</h1>
            <p id="description">${data.description}</p>
            <div id="couleur"></div>                           
            <button id="prix" onclick="ajouterPanier(), panierActuel()">${data.price} €</button>             
        </div>       
        </div>`;
        for (var couleur of data.colors) {
            document.getElementById("couleur").innerHTML += `
            <p>${couleur}</p>`;
        }
    });
}

/* fin des fonctions produits */
/* début des fonctions paniers */

var panier = 0;

function panierActuel() {
    document.getElementById("panier").innerHTML = panier ;
};

function ajouterPanier() {
    return panier = panier + 1 ;
};

function enleverPanier() {
    return panier = panier - 1 ;
};

function panierActuel() {
    document.getElementById("panier").innerHTML = `${panier}`;
};

/* fin des fonctions paniers */



 