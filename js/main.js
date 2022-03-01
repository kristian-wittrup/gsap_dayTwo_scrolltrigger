gsap.registerPlugin(ScrollTrigger);
/*
 gsap.to(".box", { // test with box and box2

//  scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once) // Version 1.0
  scrollTrigger: { // advanced version
    trigger: ".box", // test with box and box2

    toggleActions: "play pause reverse reset",  // default play 3x none:: ' 
    // first: When in view(scroll), Second: when it goes past, Third: return to it(scroll up), Fourth: Scroll all the way past start
    // Possible settings = play pause resume reverse restart reset complete none
    
    markers: true, // Indicator to help us
    
    start: "top center", // Start animation at a different place: default: top of element comes into view
    // top center = animation starts when top of HTML block is in the center of page
    // keywords: top center bottom + pixels, percentages(relative to top)

   end: "+=400px" //"bottom 100px", // can use relative value(from start) => "+=300px"
  // end: () => "+=" + document.querySelector(".box2").offsetWidth
  },
  x: 400,
  //y: 100,
  duration: 8
}); 
*/

/*
// Part II
gsap.to(".box", { // test with box and box2
  x: 400,
  //y: 100,
  duration: 8,

    scrollTrigger: { 
      trigger: ".box2", // 1
      endTrigger: ".box2", // 3
      
      toggleActions: "play pause reverse reset",  // 1
      markers: true, // 1
      start: "top center", // 2  Based on trigger element
      end: "bottom 60%", // 2     Based on trigger element,
      scrub: 1 // animation based on how much user scrolls between start and stop  :: True is instant, 1+ is with catch-up
    },
  });
 */
 /*
  
// Part III
  const tl = gsap.timeline({
    scrollTrigger: { 
      trigger: ".box", // 1
   //   endTrigger: ".box2", // 3
    //  pin:true, // Makes the "trigger follow down to, here: it goes down the y axis"
      toggleActions: "play pause reverse reset",  // 1
      markers: true, // 1
      start: "top center", // 2  Based on trigger element
      end: "bottom 60%", // 2     Based on trigger element,
      scrub: 2 // animation based on how much user scrolls between start and stop  :: True is instant, 1+ is with catch-up
    },
  })


 tl.to(".box3", { // test with box and box2
    x: 400,
    //y: 100,
    duration: 8,
  }); 
*/



  // Part IV

  
  ScrollTrigger.defaults({
    markers:true
  })

  const tl = gsap.timeline()


tl.to(".box_pinning1", { xPercent:100})
tl.from(".box_pinning2", { xPercent:100 })
 tl.from(".box_pinning3", {yPercent:-100})
 tl.to(".box_pinning3", { opacity:0})

  ScrollTrigger.create({
    animation: tl,
    trigger: ".container", // .box_pinning1
    start: "0px top",
    end: () => "+=" + document.querySelector(".box_pinning2").offsetHeight,// "+=500vh",
   // markers:true,
    pin: true,
    scrub:true,
    snap: 1 / 4,
    toggleClass: "active"
    //anticipatePin:1
  })


 


/* const tl = gsap.timeline({})

gsap.defaults({
  duration: 1
});

tl.to(".rolling_box", {

  height:'100vh',
  scaleY:1,
  ease: Circ.easeOut,
 // bottom:0
})
.to(".rolling_box p", {
  opacity:1,
  y: 20
})
.to(".rolling_box .box_inside", {
  duration: 2,
  opacity:1,
  scale: 1
})


document.getElementById("btn").addEventListener("click", function(){
  
})
 */