var initialPath = `M 5 100 Q 250 100 990 100`; // Fixed 'inital' to 'initial'
var finalPath = `M 5 100 Q 250 100 990 100`;   // Fixed 'Paht' to 'Path'

var string = document.querySelector('#string');

string.addEventListener("mousemove", (dets) => {
        // console.log('dets'); // Logs when mouse enters
        path = `M 5 100 Q ${dets.x} ${dets.y} 990 100`
        gsap.to("svg path",{
            attr:{d:path},
            duration:0.5,
            ease:"power3.out"
            
        })
    });

string.addEventListener("mouseleave", () => {
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.8,
        ease:"elastic.out(1, 0.3)"
    })
})
// string.addEventListener("mouseenter", () => {
//     console.log('string1'); // Logs when mouse enters
// });

// string.addEventListener("mouseleave", () => {
//     console.log('string2'); // Logs when mouse leaves
// });
