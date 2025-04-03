// Improved JavaScript functionality
console.log("JS Loaded Successfully!");

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                alert(`${input.name} is required!`);
                isValid = false;
            }
        });
        if (isValid) {
            alert(`${formId === 'registrationForm' ? 'Registration' : 'Inquiry'} successful!`);
            form.reset();
        }
    });
}

// Replace with your WhatsApp group link
const whatsappGroupLink = "https://chat.whatsapp.com/E8fnb6x0PKOG7BYLBaNgnS";

document.getElementById("whatsapp-button").href = whatsappGroupLink;

// Form Validations
validateForm('registrationForm');
validateForm('inquiryForm');

// Testimonial 
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
const dotsContainer = document.querySelector('.dots');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let autoSlideInterval;
let isTransitioning = false;

// Set carousel width dynamically to fit all testimonials
carousel.style.width = `${totalTestimonials * 100}%`; // Important fix!

// Set individual testimonial width to 100% of container
testimonials.forEach((testimonial) => {
    testimonial.style.width = `${100 / totalTestimonials}%`;
});

// Initialize dots and add event listeners
testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        if (!isTransitioning) {
            currentIndex = i;
            showTestimonial(currentIndex);
            updateDots();
            pauseAutoSlide();
        }
    });
    dotsContainer.appendChild(dot);
});

// Function to display testimonials with smooth transition
function showTestimonial(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    const offset = -index * (100 / totalTestimonials);
    carousel.style.transform = `translateX(${offset}%)`;
}

// Listen for transition completion to unlock
carousel.addEventListener('transitionend', () => {
    isTransitioning = false;
    updateDots();
});

// Update active dot indicator
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Move to the next testimonial
function nextTestimonial() {
    if (!isTransitioning) {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }
}

// Move to the previous testimonial
function prevTestimonial() {
    if (!isTransitioning) {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
    }
}

// Auto-slide functionality with pause on hover
function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
}

// Pause auto-slide and restart after user interaction
function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Button click event listeners
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        pauseAutoSlide();
    });
    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        pauseAutoSlide();
    });
}

// Pause auto-slide on hover, resume on leave
carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseleave', startAutoSlide);

// Swipe functionality for mobile
let startX = 0;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        nextTestimonial(); // Swipe left
    } else if (endX - startX > 50) {
        prevTestimonial(); // Swipe right
    }
    pauseAutoSlide();
});

// Initial setup
showTestimonial(currentIndex);
updateDots();
startAutoSlide();


