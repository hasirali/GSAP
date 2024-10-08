var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var imagediv = document.querySelector('.image')

main.addEventListener('mousemove', function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:'back.out(1.7)'
    })
})

imagediv.addEventListener('mouseenter', function () {
    cursor.innerHTML = '🚀';  // Set the cursor inner HTML before animating
    gsap.to(cursor, {
        scale: 3,  // Animate the scale
        duration:2,
    });
});

// Optionally reset the cursor on mouse leave
imagediv.addEventListener('mouseleave', function () {
    cursor.innerHTML = '';  // Reset the cursor inner HTML
    gsap.to(cursor, {
        scale: 1,  // Reset the scale
    });
});