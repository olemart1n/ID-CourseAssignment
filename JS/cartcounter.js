
let iconCount = document.querySelector(".fa-basket-shopping p")
let counter = document.querySelector("#span");

function inStorage() {
    const clickedId = localStorage.getItem("id").values;
    if(!clickedId) {
        return [];
    } else {
        let cartItems =  JSON.parse(clickedId);
        console.log(cartItems);
    }

}

function cartItems()  {
    if((JSON.parse(localStorage.id).length) > 0) {
        counter.innerHTML += `(${JSON.parse(localStorage.id).length})`
        iconCount.innerHTML += `(${JSON.parse(localStorage.id).length})`
    }
}
cartItems()
console.log(JSON.parse(localStorage.id).length);