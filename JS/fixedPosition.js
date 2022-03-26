const nav = document.querySelector("nav");

window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;
    if(scrolled >= 99) {
        nav.style.position = 'fixed'
    } else {
        nav.style.position = 'relative'};
})