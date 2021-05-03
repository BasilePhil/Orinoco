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