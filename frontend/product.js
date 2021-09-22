fetch('http://localhost:3000/api/cameras')
 .then( function(response) {
     return response.json();
 })
 .then(function(data) {
     console.log(data.length);
     displayProduct(data)
 });

//création de la fonction 'product' :
function displayProduct(product) {
    let elementContainer = document.getElementById('container');

    for(let i=0; i<product.length; i++) {
        console.log(product[i]);

        //je passe le prix à la décimale :
        let numberEnEuro = product[i].price ;
        numberEnEuro /= 100;

        //création d'une nouvelle div avec la class 'caméra" :
        let newDiv = document.createElement("div");
        newDiv.classList.add("camera");

        //création de la carte :
        newDiv.innerHTML +=
            `<div class="card">
                <img id="image" src=${product[i].imageUrl} alt="image de la caméra un">
                <a href="" id="price">
                    <h2 class="name_product" >${product[i].name}</h2>
                    <p class="price" >${numberEnEuro.toFixed(2)}</p>
                </a>
            </div>`;
        //Parenter la div au container :
        elementContainer.appendChild(newDiv);
    }
console.log(elementContainer);
}




