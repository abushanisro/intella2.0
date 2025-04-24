// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS with minimal duration
  AOS.init({
    duration: 10,  // Very quick duration
    once: true,
    mirror: false
  });

  // Only initialize particles if the element exists
  const particlesElement = document.getElementById('particles-js');
  if (particlesElement) {
    // Initialize Particles.js
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  // Custom cursor - Only initialize if elements exist
  const cursorFollow = document.querySelector('.cursor-follow');
  const cursorDot = document.querySelector('.cursor-dot');
  
  if (cursorFollow && cursorDot) {
    document.addEventListener('mousemove', (e) => {
      cursorFollow.style.left = e.clientX + 'px';
      cursorFollow.style.top = e.clientY + 'px';
      
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    });
  }
  
  // Replace touch ripple with instant scroll animation
  const elementsToAnimate = document.querySelectorAll('.why-box, .icon-box, .welcome h2, .welcome p');
  
  // Function to check if elements are in viewport - very minimal threshold
  function checkScroll() {
    elementsToAnimate.forEach(function(element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight; // Full viewport height
      
      if (elementPosition < screenPosition) {
        // Instantly make elements visible without animation
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }
  
  // Initial check on page load
  checkScroll();
  
  // Check on scroll with no debounce for immediate response
  window.addEventListener('scroll', checkScroll);
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Modified icon boxes - no animation delay
  const iconBoxes = document.querySelectorAll('.icon-box');
  
  iconBoxes.forEach((box) => {
    // Remove the float animation
    box.style.animation = "none";
    
    // Make immediately visible on scroll
    box.style.opacity = "0";
    box.style.transform = "translateY(15px)";
    
    // Just keep hover animation
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
    });
  });
});