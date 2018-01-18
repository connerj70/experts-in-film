var hamburgerButton = document.querySelector(".hamburger");
var openSB = document.querySelector("#openSB");
var slider = document.querySelector(".nav-wrapper");
var sliderImages = document.querySelectorAll(".carver_tickets");
var sliderCaptions = document.querySelectorAll(".carver_tickets_caption");
var scrollToTopButton = document.querySelector("#scroll-to-top");
var soundCloudString = 'http://api.soundcloud.com/tracks/380880809?client_id=';
var carversClientId = 'HnbhPkOkvV3iSex4B5fokd8AKygMMrUc';
var carversUserId = '260724315';

scrollToTopButton.addEventListener('click', scrollToTop);


hamburgerButton.addEventListener('click', function() {
    slider.classList.remove('nav-wrapper-active');
    main.style.overflowY = "scroll";
});

openSB.addEventListener('click', function() {
    slider.classList.add('nav-wrapper-active');
    main.style.overflowY = "hidden";
});

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function checkSlide(e) {
    sliderImages.forEach(function(sliderImage) {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }


    });
}

function checkSlide2(e) {
    sliderCaptions.forEach(function(sliderImage) {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }


    });
}

window.addEventListener('scroll', debounce(checkSlide, 20, true));
window.addEventListener('scroll', debounce(checkSlide2, 20, true));


function spaceship() {
    var spaceship = document.querySelector('.star-wars-ship');
    console.log(spaceship)
    spaceship.classList.remove('star-wars-ship');
    spaceship.classList.add('remove-transform');
}

function scrollToTop() {
    window.scrollTo(0, 0);
}
<<<<<<< HEAD

window.onload = function() {
    fetch('http://api.soundcloud.com/users/' + carversUserId + '/tracks?client_id=' + carversClientId).then(resp => {
        resp.json().then((data) => {
            console.log(data);
        });
    });
};

=======
>>>>>>> e7699bdbd9eef7b4ee5d9225e32bcc9e91958f37
