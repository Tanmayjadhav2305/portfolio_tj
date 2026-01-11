import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  animateElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  });
};

export const animateHover = (element, scale = 1.05) => {
  gsap.to(element, {
    scale,
    duration: 0.3,
    ease: 'power2.out',
  });
};

export const animateHoverEnd = (element) => {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  });
};
