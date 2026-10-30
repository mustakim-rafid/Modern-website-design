const scroll = new LocomotiveScroll({ // to scroll smoothly -->
    el: document.querySelector('#main'),
    smooth: true
});
function circleMove(/*scalex, scaley*/) {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`/*scale(${scalex},${scaley})*/
    });
}

function firstpageAnim() {
    let anim = gsap.timeline();
    anim.from("#nav", {
        y: '-10',
        duration: 1.2,
        ease: Expo.easeInOut,
        opacity: 0
    }).to(".boundingelem", {
        y: 0,
        duration: 1.6,
        delay: -.5,
        ease: Expo.easeInOut,
        stagger: .2
    }).from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 0.8,
        delay: -.2,
        ease: Expo.easeInOut
    }).from("#smallbox", {
        x: 10,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -.2,
        duration: 1
    })
}
circleMove();
firstpageAnim();

// function circlechapta() {
//     let xscale = 1;
//     let yscale = 1;

//     let xprev = 0;
//     let yprev = 0;
//     window.addEventListener("mousemove", (dets) => {
//         clearTimeout();

//         xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
//         yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         circleMove(xscale, yscale);
//         setTimeout(() => {
//             document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
//         }, 100);
//     });
// }
// circlechapta();

