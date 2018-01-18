var hamburgerButton = document.querySelector(".hamburger");
var openSB = document.querySelector("#openSB");
var slider = document.querySelector(".nav-wrapper");
var main = document.querySelector("body");

hamburgerButton.addEventListener('click', function() {
    slider.classList.remove('nav-wrapper-active');
    main.style.overflowY = "scroll";
});

openSB.addEventListener('click', function() {
    slider.classList.add('nav-wrapper-active');
    main.style.overflowY = "hidden";
});

