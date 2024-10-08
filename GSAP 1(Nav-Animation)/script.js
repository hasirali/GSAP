tl = gsap.timeline();

tl.from("#logo",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
})
tl.from("nav a",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:1,
})
.tl.from(".hero p",{
    y:30,
    opacity:0,
    duration:1,
})