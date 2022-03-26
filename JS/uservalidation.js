document.title = "checkout"
const summaryUrl = "https://fakestoreapi.com/products/";

// CONTACT VALIDATION

// all inputs and errormessages
const form = document.getElementById("form");
const name = document.getElementById("fullname");
const nameError = document.getElementById("fullNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const adress = document.getElementById("adress");
const adressError = document.getElementById("adressError");
const success = document.querySelector(".success");
const check = document.getElementById("check");


form.onsubmit = function() {
    event.preventDefault();

    //--VALIDATE NAME
    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    //---VALIDATE ADRESS
    if(checkLength(adress.value, 25) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block"
    }
        //----VALIDATE EMAIL
    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if ((checkEmail(email.value) === true) && (checkLength(adress.value, 25) === true) && (checkLength(name.value, 0) === true)) {
        window.location.href = "success.html";
    }
}



//---check length of inputs
function checkLength(element, len) {
    if ((element).trim().length > len) {
        return true;
    } else {
        return false;
    }
}
//--- check if input looks like an email adress
function checkEmail (element) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    patternMatch = regEx.test(element)
    return patternMatch;
}

// - SUMMARY OF CHOSEN ITEMS
const summary = document.querySelector(".last-section");

function inStorage() {
    const clickedId = localStorage.getItem("id")

    if(!clickedId) {
        return [];
    } else {
        return JSON.parse(clickedId);
    }
}



const inCart = inStorage();
let sumArray = [];

for (let i = 0; i < inCart.length; i++) {
    const element = inCart[i].id;
    async function showSummary() {
        try {
            const req = await fetch(summaryUrl + element);
            const json = await req.json();
            console.log(json);
            chosenProducts(json)
        } catch (error) {
            console.log(error)
        }
    }
    showSummary()
}

const sum = document.querySelector("#price");
const delivery = document.querySelector("#delivery");
const totalPrice = document.querySelector("#total");

const deliveryPrice = document.getElementsByName("delivery");

    function chosenProducts (price) {
        sumArray.push(price.price)
        let aNumber = 0;
        for (let i = 0; i < sumArray.length; i++) {
            aNumber += Number.parseInt(sumArray[i]);
        }
        sum.innerHTML = `<h4>price of product(s)</h4>
                            <h4>${aNumber}$</h4>`;
        
        deliveryMethod();
        totalSum(aNumber)
}


function deliveryMethod() {
    for (let i = 0; i < deliveryPrice.length; i++) {
        const element = deliveryPrice[i];
        if (element.checked) {
            const radioValue = element.value;
            delivery.innerHTML = `<h4>Delivery</4>
            <h4>${radioValue}$</h4>`
            return radioValue;
        }
    }
}


function totalSum(theSum) {
    for (let i = 0; i < deliveryPrice.length; i++) {
        const element = deliveryPrice[i];
        if (element.checked) {
            totalPrice.innerHTML = `<h4>Total</4>
                                    <h4>${theSum += Number.parseInt(element.value)}</h4>`;
        }
    }
}
