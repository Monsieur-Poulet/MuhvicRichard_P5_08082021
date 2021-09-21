fetch('http://localhost:3000/api/cameras')
 .then( function(response) {
     return response.json();
 })
 .then(function(data) {
     console.log(data.length);
     displayProduct(data)
 });


function displayProduct(product) {
    let elementContainer = document.getElementById('container');

    for(let i=0; i<product.length; i++) {
        console.log(product[i]);

        let numberEnEuro = product[i].price;
        numberEnEuro /= 100;

        let newDiv = document.createElement("div");
        newDiv.classList.add("camera");
        newDiv.innerHTML +=
            `<div class="card">
                <img id="image" src=${product[i].imageUrl} alt="image de la caméra un">
                <div id="price">
                    <h2 class="name_product" >${product[i].name}</h2>
                    <p class="price" >${numberEnEuro.toFixed(2)}</p>
                </div>
            </div>`;
        elementContainer.appendChild(newDiv);
    }
console.log(elementContainer);
}




