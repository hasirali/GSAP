// window.addEventListener("wheel",(dets)=>{
//     if(dets.deltaY>0){
//         gsap.to(".marqueue",{
//             transform:"translateX(-200%)",
//             delay:1,
//             duration:2,
//             repeat:-1,
//             ease:"none"
//         })
//         gsap.to(".marqueue img",{
//             rotate:180,
//         })
//     }
//     else{
//         gsap.to(".marqueue",{
//             // x:-100,
//             transform:"translateX(0%)",
//             delay:1,
//             duration:2,
//             repeat:-1,
//             ease:"none"
//         })
//         gsap.to(".marqueue img",{
//             rotate:0,
//         })
//     }
// })
window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
        gsap.to(".marqueue", {
            x: "-200%",          // Use x for horizontal translation
            delay: 1,
            duration: 2,
            repeat: -1,
            ease: "none"
        });
        gsap.to(".marqueue img", {
            rotate: 180,         // Specify the rotation in degrees
    
            ease: "power1.out"   // Optional easing for rotation
        });
    } else {
        gsap.to(".marqueue", {
            x: "0%",             // Translate back to the original position
            delay: 1,
            duration: 2,
            repeat: -1,
            ease: "none"
        });
        gsap.to(".marqueue img", {
            rotate: 0,           // Reset rotation to 0 degrees
            ease: "power1.out"   // Optional easing for rotation
        });
    }
});

