const queryString = document.location.search;
const id = new URLSearchParams(queryString).get("id");

const newUrl = "https://fakestoreapi.com/products/" + id;

const spesificContainer = document.querySelector("main div");

document.title = "Rainy Days | Product"

const added = document.querySelector("#added");


async function spesific() {
    try{
        const req = await fetch(newUrl);
        const json = await req.json();
        console.log(json);
        displayProduct(json)
    } catch(error) {
        console.log(error);
    }
}

spesific()




function displayProduct (jacket) { 
    spesificContainer.innerHTML +=`<div>
                    <p>${jacket.category}</p>
                    <h3>${jacket.title}</h3>
                    <p><b>${jacket.price} $</b></p>
                    <img src="${jacket.image}">
                    <p>${jacket.description}</p>

</div>`;
}




//--
const button = document.querySelector("button");

button.addEventListener("click", testF)

function testF() {
    const currentStorage = inStorage()
    
    const product = {id}

    currentStorage.push(product)

    button.innerHTML = "added"
    button.style.backgroundColor = "green"

    saveProduct(currentStorage)

}



function inStorage() {
    const clickedId = localStorage.getItem("id")

    if(!clickedId) {
        return [];
    } else {
        return JSON.parse(clickedId);
    }
    
}




function saveProduct(clickedId) {
    localStorage.setItem("id", JSON.stringify(clickedId));

}



