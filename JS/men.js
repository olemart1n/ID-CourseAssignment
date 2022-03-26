document.title = "Rainy Days | Men";

const url = "https://fakestoreapi.com/products";
const section = document.querySelector("section");


async function apiCall() {
    try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json)
        for (let i = 0; i < json.length; i++) {
            const jackets = json[i];
            DisplayProducts(jackets)
        }
        
    } catch (error) {
        console.log(error)
    }
}
apiCall()



function DisplayProducts(jackets) {
    if(jackets.category === "men's clothing") {
        section.innerHTML += `<div>
        <img class="items" src="${jackets.image}">
        <h4>${jackets.title}</h4>
        <h5>${jackets.price} $</h5>
        <a href="/spesific.html?id=${jackets.id}"><button>view</button></a>
                                </div>`
    }
}