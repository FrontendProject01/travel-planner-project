document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Image Slider
let images = ["css/about.jpg", "india.avif", "newyork.avif"];
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    document.getElementById("about-img").src = images[currentIndex];
    updateDots();
}

function currentSlide(index) {
    currentIndex = index;
    document.getElementById("about-img").src = images[currentIndex];
    updateDots();
}

function updateDots() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// Testimonials Rotation
let testimonials = document.querySelectorAll(".testimonial-box");
let testimonialIndex = 0;

function rotateTestimonials() {
    testimonials.forEach((box) => box.classList.remove("active"));
    testimonials[testimonialIndex].classList.add("active");
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 1500);

// Shopping Cart
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Slider
    let images = ["css/about.jpg", "india.avif", "newyork.avif"];
    let currentIndex = 0;

    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        document.getElementById("about-img").src = images[currentIndex];
        updateDots();
    }

    function currentSlide(index) {
        currentIndex = index;
        document.getElementById("about-img").src = images[currentIndex];
        updateDots();
    }

    function updateDots() {
        let dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    // Testimonials Rotation
    let testimonials = document.querySelectorAll(".testimonial-box");
    let testimonialIndex = 0;

    function rotateTestimonials() {
        testimonials.forEach((box) => box.classList.remove("active"));
        testimonials[testimonialIndex].classList.add("active");
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    }

    setInterval(rotateTestimonials, 1500);

    // Shopping Cart Functionality
    const cart = [];
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const totalCostElement = document.getElementById("total-cost");
    const form = document.getElementById("booking-form");

    cartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const packageDiv = event.target.closest(".package");
            if (packageDiv) {
                const price = Number(packageDiv.dataset.price);
                if (!isNaN(price)) {
                    cart.push(price);
                    updateTotalCost();
                } else {
                    console.error("Invalid price detected.");
                }
            }
        });
    });

    function updateTotalCost() {
        const totalCost = cart.reduce((sum, price) => sum + price, 0);
        totalCostElement.textContent = `₹${totalCost}`;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (cart.length === 0) {
            alert("Please add at least one package to the cart!");
            return;
        }

        alert("Booking confirmed! Thank you for choosing Smart Travel Planner.");
        form.reset();
        cart.length = 0;
        updateTotalCost();
    });

    updateDots();
});

const bgimages = [
    'css/welcome.jpg',
    'css/hotel.jpg',
    'css/hotel1.jpg'
];

let index = 0;
function changeBackground() {
    document.querySelector('.hero').style.backgroundImage = `url('${bgimages[index]}')`;
    index = (index + 1) % bgimages.length; // Corrected variable
}

// Change background every 3 seconds
setInterval(changeBackground, 1500);

// Initial call to set first image
changeBackground();

