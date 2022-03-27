

const url = "https://fakestoreapi.com/products";
const section = document.querySelector(".pop-products");
// THE API CALL
async function apiCall() {
    try {
        const req = await fetch(url);
        const json = await req.json();
        for (let i = 0; i < json.length; i++) {
            const jackets = json[i];
            DisplayProducts(jackets);            }
        
        
    } catch (error) {
        
    }
}

apiCall()


function DisplayProducts(jackets) {
    if(jackets.rating.rate > 4 && jackets.category !== "electronics" && jackets.category !== "jewelery") {
        section.innerHTML += `<div><a href="/spesific.html?id=${jackets.id}">
        <img class="items" src="${jackets.image}"><a/>
        <section>
        <h5>${jackets.title}</h5>
        <h5>${jackets.price} $</h5>
        <a href="/spesific.html?id=${jackets.id}"><button>view</button></a>
                                </section>
                                </div>`
    }
}
