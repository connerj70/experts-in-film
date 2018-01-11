var hamburgerButton = document.querySelector(".hamburger");
var openSB = document.querySelector("#openSB");
var slider = document.querySelector(".nav-wrapper");

hamburgerButton.addEventListener('click', function() {
    slider.classList.remove('nav-wrapper-active');
});

openSB.addEventListener('click', function() {
    slider.classList.add('nav-wrapper-active');
});

