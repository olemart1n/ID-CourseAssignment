//consumer_key=ck_db5addac55ba538f33d2a0d5cf518b802dfa7a87&consumer_secret=cs_fc99bf429c09d7e660e5bb7cf3ca8043a2703713

const url = "https://yellowflowerpower.no/wordpressAPI/wp-json/wc/v3/products?consumer_key=ck_db5addac55ba538f33d2a0d5cf518b802dfa7a87&consumer_secret=cs_fc99bf429c09d7e660e5bb7cf3ca8043a2703713";
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
        section.innerHTML += `<div><a href="/spesific.html?id=${jackets.id}">
        <img class="items" src="${jackets.images[0].src}"><a/>
        <section>
        <h5>${jackets.name}</h5>
        <h5>${jackets.price} $</h5>
        <a href="/spesific.html?id=${jackets.id}"><button>view</button></a>
                                </section>
                                </div>`
}
