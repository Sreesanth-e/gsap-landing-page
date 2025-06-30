var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.8,
    delay:1,
    opacity:0,
    stagger:0.2
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.4
},"-=0.5")
gsap.to(".section1bottomn img", {
    x: "-150%",  
    scrollTrigger: {
        trigger: ".section1bottomn img",
        scroller: "body",
        start: "top 80%",  
        end: "top -100vh", 
        scrub: 2,  
        pin: false 
    }
});

var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        scrub:4,
    }
})

tl2.from(".services", {
    x: -300,
    opacity: 0,
    duration:1
   
});

tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 0.5
}, "Bot1");

tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 0.5
}, "Bot1");

tl2.from(".elem.line2.left", {
    x: -250,
    opacity: 0,
    duration: 0.7 
}, "Bot2");

tl2.from(".elem.line2.right", {
    x: 250,
    opacity: 0,
    duration: 0.7
}, "Bot2");

tl2.from(".elem.line3.left", {
    x: -200,
    opacity: 0,
    duration: 1.5
}, "Bot3");

tl2.from(".elem.line3.right", {
    x: 200,
    opacity: 0,
    duration: 1.5
}, "Bot3");

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        scrub:4,
    }
})
tl3.from(".Bot2",{
    x:-300,
    scale:4,
    duration: 0.1,
})

gsap.from("")


