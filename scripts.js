document.addEventListener('DOMContentLoaded', function () {
    // --- Animation Logic ---
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // only animate once
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold if needed

    const elementsToAnimate = document.querySelectorAll('.about-us .container, .services .container, .case-studies .container, .contact-us .container');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Carousel Logic ---
     const carousel = document.querySelector('.case-studies-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
       isDown = true;
        carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

   carousel.addEventListener('mouseleave', () => {
         isDown = false;
         carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
         if(!isDown) return;
        e.preventDefault();
       const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
       carousel.scrollLeft = scrollLeft - walk;
     });
      // --- Contact Form Button Functionality ---
    const contactButton = document.querySelector('.contact-cta');
        contactButton.addEventListener('click', () => {
          // Add redirect or modal open code here:
          // For example redirect to contact page
          window.location.href = '/contact';
        });
  // --- Smooth Scrolling ---
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

          const targetId = this.getAttribute('href');
          if(targetId === "/contact") {
                 window.location.href = '/contact';
             } else {
            const targetElement = document.querySelector(targetId);
          if(targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
           }
      });
    });
});