/*
- Faire une redirection au click sur un carte(ca tu sais déjà le faire) index.js/html
- Créer la page html qui va être ta page produit product.html
- Faire un appel à l'api(sur le même principe que sur la page index mais la route est différente) pour récupérer les infos d'un seul produit  product.js 
- Génèrer le html comme tu as fait sur la page index.  product.js 
*/

// Utiliser URLsearchParam("id")?
let urlData = new URL("http://localhost:3000/api/cameras/");
let _id = new URLSearchParams.get(_id);
//introduire la variable dans la ligne 13 (fetch):

//fetch du produit ciblé :
fetch('http://localhost:3000/api/cameras/'+ _id)
 .then( function(response) {
     return response.json();
 })
 .then(function(data) {
     console.log(data.length);
     displayProduct(data)
 });


//la fonction doit envoyer au produit sélectionné 
//dans la carte de la page index.html :
function displayProduct(product) {
    let elementContainer = document.getElementById('product');
    //je passe le prix à la décimale :
    let numberEnEuro = product[i].price ;
    numberEnEuro /= 100;

    //création de la carte produit choisi :
    product.innerHTML +=
        `<div>
            <img src=${product[i].imageUrl} alt="image de la caméra">
            <div class="description_produit">
                <h2>${product[i].name}</h2>
                <p>${product[i].description}</p>
                <p class="price">${numberEnEuro.toFixed(2)}</p>
                <p>Quantité :</p>
            </div>
            <div class="btn">
                <a href="index.html" id="back">Revenir aux caméras</a>
                <a href="panier.html" id="panier">Ajouter au panier</a>
            </div>
        </div>`

//Ajouter un menu déroulant qui définit l'option de la lentille(lense) :
//balise type option


//afficher la sélection de la lentille :


/*Bouton 'Ajouter au panier'Si validation du panier, qui déclenche une alert 
(voir le localstorage) qui mène vers order.html (nouvelle page)
Sinon, envoyer vers index.html :*/




//----Option de l'objet, ajouter une quantité de produit (bonus) :----//
};

