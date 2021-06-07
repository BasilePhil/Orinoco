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

/* début des fonctions produits */

let produit;

function recupProduit() {
    let strUrl = window.location.href;
    let tabUrl = strUrl.split(`?id=`);
    let id = tabUrl[1];
    fetch("http://localhost:3000/api/teddies/"+id)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        produit = data;
        document.getElementById("produit1").innerHTML = `
        <div class="img">
        <img id="image" src="${data.imageUrl}" alt="image produit">
        </div>
        <div class="texte">
            <h1 id="titre">${data.name}</h1>
            <p id="description">${data.description}</p>
            <div id="couleur"></div>                           
            <button id="prix" onclick="ajouterPanier('${id}'), panierActuel()">${data.price} €</button>        
        </div>       
        </div>`;
        for (var couleur of data.colors) {
            document.getElementById("couleur").innerHTML += `
            <p><a href="#">${couleur}</a></p>`;
        }
    });
};

function stockProduit() {
    document.getElementById("prix")
}

/* fin des fonctions produits */
/* début des fonctions de la page panier */

function produitPanier() {
    for (const id of localStorage) {
        document.getElementById("liste").innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${id.name} ${id.price}
        <span class="badge badge-primary badge-pill">${produit}</span>
      </li>`;
    }

};


function chargePanier() {
    for (const id in localStorage) {
        let strproduit = localStorage.getItem(id);
        if(strproduit != null) {
            let p = JSON.parse(strproduit);
            document.getElementById("liste").innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${p.name} ${p.price}
                <span class="badge badge-primary badge-pill"> 
                    ${1}
                </span>
            </li>`;
        }
    }
}

/* fin des fonctions de la page panier */
/* début des fonctions paniers */

console.log(localStorage.getItem('panier'))

function ajouterPanier(id) {
    let strproduit = JSON.stringify(produit);
    localStorage.setItem(id, strproduit );
};

function enleverPanier(panier) {
    var panier = localStorage.getItem('panier');
    panier = panier - 1 ;
    localStorage.setItem('panier', panier );
    return console.log(localStorage.getItem('panier'))
};

function panierActuel() {
    document.getElementById("panier").innerHTML = `${localStorage.length}`;
};

/* fin des fonctions paniers */
/* début des fonctions achats */

function recupUser() {
    document.getElementById("formq").innerHTML = `
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" name="email" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" class="form-control" id="inputfirstName" aria-describedby="#" placeholder="Enter your first name">
    </div>
    <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" class="form-control" id="inputlastName" aria-describedby="#" placeholder="Enter yout last name">
    </div>
    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" name="address" class="form-control" id="inputaddress" aria-describedby="#" placeholder="Enter your adresse">
    </div>
    <div class="form-group">
        <label for="city">City</label>
        <input type="text" name="city" class="form-control" id="inputcity" aria-describedby="#" placeholder="Enter yout city">
    </div>
    <a href="panier.html"><button type="submit" class="btn btn-primary">Finaliser la commande</button></a>
    `;

}

function validCommande() {
    event.preventDefault();

    let f = document.getElementById("formq")

    const contact = {
        firstName: f.firstName.value,
        lastName: f.lastName.value,
        address: f.address.value,
        city: f.city.value,
        email: f.email.value,
    };
    
    console.log(contact);
    
    let  products = ['5beaacd41c9d440000a57d97'];
    

    console.log(products)

    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: JSON.stringify({
            contact, products
        }),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
    }).then(response => response.json())
    .then(data => {
        console.log(data)
    })



}




/* fin des fontions achats */



 