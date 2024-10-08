gsap.from("#page1 .box",{
    scale: 0,
    delay:1,
    duration: 1,
    rotate:360,
    ease: "bounce"

})
gsap.from("#page2 .box",{
    scale: 0,
    // delay:1,
    duration: 1,
    rotate:360,
    scrollTrigger: "#page2 .box",
    scrollTrigger: {
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        // scrub:true or Number(on smoothness)
        scrub:2,
        start:"top 90%",
        // pin:true,
    },

})
gsap.from("#page3 h1",{
    x:500,
    scale:1,
    opacity:0,
    duration:2,
    // delay:1,
    ease:"bounce",

    scrollTrigger: {
        trigger:"#page3 h1",
        scroller:"body",
        // markers:true,
        scrub:2,
    start:"top 60%"
    }

})
gsap.from("#page3 h2",{
    x:-500,
    scale:1,
    opacity:0,
    duration:2,
    // delay:1,
    ease:"bounce",
    scrollTrigger: {
        trigger:"#page3 h2",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 60%",
        end:"top 10%"
    }

})

gsap.to("#page4 h1", {
    x: "-150%",  // Move the text 150% to the left
    duration: 15,  // Adjust the duration for speed
    ease: "linear",  // Make it scroll smoothly
    scrollTrigger: {
        trigger: "#page4",  // Start the animation when .box is visible
        scroller: "body",  // Use the body as the scroll container
        start: "top 0%",  // Start the animation when the top of the trigger hits the top of the viewport
        end: "top -150%",  // End the animation when the bottom of the trigger hits the bottom of the viewport
        scrub: true,  // Smooth the animation
        pin: true,  // Pin the element while it's animating
        markers: true  // Show the trigger and the scrubbing line
    }
});
