fetch('http://localhost:3000/api/cameras')
 .then( function(response) {
     return response.json();
 })
 .then(function(data) {
     console.log(data.length);
     displayProduct(data)
 });


function displayProduct(product) {
    console.log(product);
    /*je créais une div dans le container, pour y mettre les informations d'une caméra : */
    let newDiv = document.createElement("div");
    let elementContainer = document.getElementById('container');

    // ajout de l'image de la caméra :
    

    //créer la carte en html de la première carte 0 :
    document.getElementById("container").innerHTML =
    `<img id="image" src="http://localhost:3000/api/cameras" alt="image de la caméra un">
    <div class="price">
        <h2 class="name_product" >Zurss 505</h2>
        <p class="price" >499,00 €</p>
    </div>`;


    for(let i=0; i< product.length; i++) {
        console.log(product[i]);
        newDiv.innerHTML += product[i].imageUrl;
    }
    elementContainer.appendChild(newDiv);
    console.log(elementContainer);
}


