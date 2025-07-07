var main = document.querySelector(".main")
var pointer = document.querySelector(".pointer")

main.addEventListener("mousemove",function(dets){
    pointer.style.left = dets.x +"px"
    pointer.style.top = dets.y +"px"
})

gsap.from(".nav",{
    y:"-200",
    duration:1,
    delay :1,
    scrub:2,
})


gsap.from(".banner",{
    x:"-2000",
    duration:1.5,
    delay :1,
    scrub:5,
})