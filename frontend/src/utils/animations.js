import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const initScrollAnimations = () => {
  // Smooth scroll behavior
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });

  // Animate elements on scroll with stagger
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  animateElements.forEach((element, index) => {
    const delay = element.dataset.delay ? parseFloat(element.dataset.delay) : 0;
    
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 60,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
      }
    );
  });

  // Parallax effect for hero visual
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    gsap.to(heroVisual, {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
      opacity: 0.5,
      ease: 'none',
    });
  }

  // Skill bars animation
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    gsap.fromTo(bar,
      { width: '0%' },
      {
        scrollTrigger: {
          trigger: bar,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        width: width,
        duration: 1.5,
        ease: 'power2.out',
      }
    );
  });

  // Project cards hover with magnetic effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    card.addEventListener('mouseleave', (e) => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
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

export const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: targetElement, offsetY: 80 },
      ease: 'power3.inOut',
    });
  }
};