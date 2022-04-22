const queryString = document.location.search;
const id = new URLSearchParams(queryString).get("id");

const newUrl = "https://yellowflowerpower.no/wordpressAPI/wp-json/wc/v3/products/" + id + "?consumer_key=ck_db5addac55ba538f33d2a0d5cf518b802dfa7a87&consumer_secret=cs_fc99bf429c09d7e660e5bb7cf3ca8043a2703713";

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
                    <p>${jacket.categories[0].name},${jacket.categories[1].name},${jacket.categories[3].name},${jacket.categories[2].name}</p>
                    <h3>${jacket.name}</h3>
                    <p><b>${jacket.price} $</b></p>
                    <img src="${jacket.images[0].src}">
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



