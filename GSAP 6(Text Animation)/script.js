// function breakTheText(){
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

    
//     var clutter="";
//     var splittedText = h1Text.split("");
//     splittedText.forEach((e)=>{
//     clutter=clutter+`<span>${e}</span>`;
//     })
//     console.log(clutter)
// }
// breakTheText();

function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
                     // or
    // var h1text = document.querySelector("h1").textContent
    var clutter = "";
    var splittedText = h1Text.split("");
    var halfvalue=splittedText.length/2;
    splittedText.forEach((e,idx) => {
        if(idx<halfvalue){
            clutter += `<span class="a">${e}</span>`;
        }
        else{
            clutter += `<span class="b">${e}</span>`;
        }
    });

    // Insert the new content with spans back into the h1
    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.15, // Adjust the stagger for a smoother animation
});
gsap.from("h1 .b", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: -0.15, // Adjust the stagger for a smoother animation
});



