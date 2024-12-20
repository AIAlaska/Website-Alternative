document.addEventListener('DOMContentLoaded', () => {

    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#83e5ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#83e5ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

  // Dynamic Background for Service Cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
      const bgImage = card.getAttribute('data-image');
      if(bgImage){
          card.style.setProperty('--bg-image',`url('${bgImage}')`);
          card.style.setProperty('--bg-size',`cover`);
          card.style.setProperty('--bg-position',`center`);

          card.style.setProperty('--before-bg',`url('${bgImage}')`);
      }
  });


    //GSAP Animations
    gsap.from('header', {
        y: -80,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-content h1, .hero-content p, .hero-content a',{
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3
    });
    gsap.from('.hero-image',{
      opacity: 0,
       scale: 0.9,
      duration: 1,
      ease: 'power2.out',
      delay:0.5
    });

    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
    });

    // Content Management
   const content = {
      'hero-title': 'Unleash the Power of AI with Alaska Intelligence',
      'hero-description': 'Elevate your business with our bespoke AI and Machine Learning solutions. We deliver strategic insights and cutting-edge technology for unparalleled growth and innovation.',
      'hero-button': 'Explore Our Solutions',
      'about-title': 'About Alaska Intelligence',
      'about-description': 'We are a premier AI and ML consulting agency, specializing in delivering transformative solutions. Our team of experts is dedicated to pushing the boundaries of AI, providing strategic guidance and advanced technology to help your business thrive in the age of intelligent automation. We combine deep industry knowledge with innovative approaches to ensure our clients achieve sustainable competitive advantage.',
        'team-members': [
            { name: 'Dr. Evelyn Reed', role: 'Chief AI Strategist', image: 'images/ai-head1.jpg' },
            { name: 'Kaito Nakamura', role: 'Lead Machine Learning Engineer', image: 'images/ai-head2.jpg' },
            { name: 'Isabelle Moreau', role: 'Senior AI Consultant', image: 'images/ai-head3.jpg' }
        ],
        'services-title': 'Our Specialized Services',
        'services': [
            { title: 'AI-Driven Automation', description: 'Leverage sophisticated AI models to automate complex workflows, enhance efficiency, and reduce operational costs.', image: 'images/ml.jpg' },
            { title: 'Advanced Predictive Analytics', description: 'Gain powerful insights with our predictive analytics solutions, enabling data-driven decision-making and strategic foresight.', image: 'images/dl.jpg' },
            { title: 'Custom ML Model Development', description: 'We design and deploy custom Machine Learning models tailored to address your unique business challenges and opportunities.', image: 'images/ai-strategy.jpg' }
        ],
      'contact-title': 'Connect with Our Experts',
        'form-name-label': 'Your Name',
        'form-email-label': 'Your Email',
        'form-message-label': 'Your Inquiry',
      'form-button': 'Send Your Message'
    };


    // Load Content Function
    function loadContent() {
        for (const key in content) {
            if (content.hasOwnProperty(key)) {
                // Handle arrays separately
                if (Array.isArray(content[key])) {
                    continue; // Skip arrays as they're handled separately
                }
                
                const element = document.querySelector(`[data-content="${key}"]`);
                if (element) {
                    if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                        element.textContent = content[key];
                    } else if (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2') {
                        element.textContent = content[key];
                    } else if (element.tagName === 'LABEL') {
                        element.textContent = content[key];
                    }
                } else {
                    console.log(`Element not found for key: ${key}`); // Add debugging
                }
            }
        }
    }
    loadContent();

    // Team Member Generation
   const teamContainer = document.getElementById('team-container');
    content['team-members'].forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="team-member-image">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
       `;
        teamContainer.appendChild(teamCard);
    });

    // Services Card Generation
    const servicesContainer = document.getElementById('services-container');
    content['services'].forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
      serviceCard.setAttribute('data-image', service.image);
        serviceCard.innerHTML = `
           <div class="service-text">
             <h3>${service.title}</h3>
             <p>${service.description}</p>
           </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });

    // Update service card backgrounds after they are created
    const generatedServiceCards = document.querySelectorAll('.service-card');
    generatedServiceCards.forEach(card => {
        const bgImage = card.getAttribute('data-image');
        if(bgImage){
            card.style.setProperty('--bg-image',`url('${bgImage}')`);
            card.style.setProperty('--bg-size',`cover`);
            card.style.setProperty('--bg-position',`center`);
            card.style.setProperty('--before-bg',`url('${bgImage}')`);
        }
    })

   // Contact Form Submission with API
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const data = {
            name: name,
            email: email,
            message: message
        }


        fetch('https://httpbin.org/post', { //Replace with your api endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    });
});