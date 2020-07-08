document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  let timeline = new TimelineMax({
    scrollTrigger: {
      trigger: '.first-section',
      start: 'center center',
      endTrigger:".image-wrapper" ,
      end:"bottom top",
      // markers: true,
      scrub: 1,
      duration: 2,
      // delay: 2,
      // pin: true
      }
  });

  let timeline2 = new TimelineMax({
    scrollTrigger: {
      trigger: '.image-wrapper',
      start: 'top top',
      // markers: true,
      endTrigger:"html",
      end:"bottom top",
      scrub: 1,
      duration: 2,
      // delay: 2,
      // pin: true
      }
  });


  timeline
    .to('#sixth-image', 6, {
      y: -650
    })

    .to('#fifth-image', 6, {
      y: -500
    }, '-=6')

    .to('#fourth-image', 6, {
      y: -400
    }, '-=6')

    .to('#third-image', 6, {
      y: -300
    }, '-=6')

    .to('#second-image', 6, {
      y: -200
    }, '-=6')

    .to('#first-image', 6, {
      y: -100
    }, '-=6')

    .to('.footer-wrapper', 6, {
      autoAlpha: 0
    }, '-=6')

    .to('.content, .blur', 6, {
      top: '0%'
    }, '-=6')

    .to('.title', 6, {
      y: -2000
    }, '-=6');

  timeline2
    .from('.one', 2, {
      top: '50px',
      autoAlpha: 0
    }, "-=4")
    .from('.two', 3, {
      top: '50px',
      autoAlpha: 0
    }, "-=3.5")
    .from('.three', 3, {
      top: '50px',
      autoAlpha: 0
    }, "-=3")
    .from('.four', 3, {
      top: '50px',
      autoAlpha: 0
    }, "-=2.5")
    .from('.text', 3, {
      y: 60,
      autoAlpha: 0
    }, "-=4")
    

})