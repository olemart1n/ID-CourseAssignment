//THIS HANDLES THE NAVICON-- TOGGLES THE CLASS ACTIVE ON NAV ELEMENT
const navigationIcon = document.querySelector("header div");
const navMeny = document.querySelector("nav");

navigationIcon.addEventListener("click", () => {
    navMeny.classList.toggle("active")
})
