document.title = "Rainy Days | Men";

const url = "https://yellowflowerpower.no/wordpressAPI/wp-json/wc/v3/products?consumer_key=ck_db5addac55ba538f33d2a0d5cf518b802dfa7a87&consumer_secret=cs_fc99bf429c09d7e660e5bb7cf3ca8043a2703713";
const section = document.querySelector("section");


async function apiCall() {
    try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json)
        for (let i = 0; i < json.length; i++) {
            const jackets = json[i];
            tryThis(jackets)
        }
        
    } catch (error) {
        console.log(error)
    }
}
apiCall()



function DisplayProducts(jackets) {
        section.innerHTML += `<div>
        <a href="/spesific.html?id=${jackets.id}"><img class="items" src="${jackets.images[0].src}"></a>
        <h4>${jackets.name}</h4>
        <h5>${jackets.price} $</h5>
        <a href="/spesific.html?id=${jackets.id}"><button>view</button></a>
                                </div>`
    
}

function tryThis (jackets) {
    for(let g = 0; g < jackets.categories.length; g++) {
        const categorySearch = jackets.categories[g];
        if (categorySearch.name === "male") {
            DisplayProducts(jackets)
        }
    }
}