var hamburgerButton = document.querySelector(".times-icon");
var openSB = document.querySelector(".bars");
var slider = document.querySelector(".mobile-nav-wrapper");
var main = document.querySelector("body");

hamburgerButton.addEventListener('click', function() {
    slider.classList.remove('mobile-nav-wrapper-active');
    main.style.overflowY = "scroll";
    openSB.style.display = "block";
});

openSB.addEventListener('click', function() {
    slider.classList.add('mobile-nav-wrapper-active');
    main.style.overflowY = "hidden";
    openSB.style.display = "none";
});