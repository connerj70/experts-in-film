var fog1 = document.querySelectorAll('.img1'),
    fog2 = document.querySelectorAll('.img3'),
    fog3 = document.querySelectorAll('.img4'),
    fog4 = document.querySelectorAll('.img6');
    
TweenMax.to(fog1, 40, {opacity:1, delay:10, left: '100%', ease:Linear.easeNone, repeat:-1, yoyo:true});
TweenMax.to(fog3, 40, {delay:0.5, right: '100%', ease:Linear.easeNone});
TweenMax.to(fog4, 35, {right: '100%', ease:Linear.easeNone});
TweenMax.to(fog2, 50, {delay:0.5, left: '100%', ease: Linear.easeNone});