const chosenItems = document.querySelector(".chosen-items");
const cartUrl = "https://fakestoreapi.com/products/";
const countedProducts = document.querySelector("#countedProducts")
const clearCart = document.querySelector("#clear");
//--
const continueButton = document.querySelector("#continue")
const rightColumn = document.querySelector(".right-column")
//--
function inStorage() {
    const clickedId = localStorage.getItem("id")

    if(!clickedId) {
        return [];
    } else {
        return JSON.parse(clickedId);
    }
}



const inCart = inStorage();

//IF IT IS ITEMS IN CART, THE PREVIOUS HTML GETS REPLACED, and proceed buttton displays
if (inCart.length > 0) {
    chosenItems.innerHTML = "";
    continueButton.style.display = "block"
}



for (let i = 0; i < inCart.length; i++) {
    const elementCart = inCart[i].id;
    async function spesificCart() {
        try{
            const req = await fetch(cartUrl + elementCart);
            const json = await req.json();
            console.log(json);
            displayCart(json)
        } catch(error) {
            console.log(error);
        }
    }
    
    spesificCart()
}



function displayCart (jacket) { 
    chosenItems.innerHTML += `
                    <p>${jacket.category}</p>
                    <h3>${jacket.title}</h3>
                    <img src="${jacket.image}">
                    `;
}



// CLEAR CART

clearCart.addEventListener("click", clearIt);

function clearIt() {
    localStorage.clear();
    window.location.reload();
}

// Continue checkout

