function afficheProduits() {
    fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(data =>  { 
        console.log(data);
        for (const ours of data) {
            document.getElementById("ours1").innerHTML += `
            <a href="produit.html">
                <div id="ours2">
                    <div>
                        <img src="${ours.imageUrl}" alt="Card image cap">
                    <div>
                    <div class="nom">
                        <h5>${ours.name} <span>${ours.price}€</span></h5>
                    </div>
            </a>`;          
        }
    });
}

var panier = 0;

function ajouterPanier() {
    return panier = panier + 1 ;
};

function enleverPanier() {
    return panier = panier - 1 ;
};

function panierActuel() {
    document.getElementById("panier").innerHTML += `${panier}`;
};

function importerProduits() {
    
}




 