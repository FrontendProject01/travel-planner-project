const bgimages = [
    'css/welcome.jpg',
    'css/hotel.jpg',
    'css/hotel1.jpg'
];

let index = 0;
function changeBackground() {     // for background image change
    document.querySelector('.hero').style.backgroundImage = `url('${bgimages[index]}')`;
    index = (index + 1) % bgimages.length; // Corrected variable
}

// Change background every 3 seconds
setInterval(changeBackground, 1500);

// Initial call to set first image
changeBackground();

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


    updateDots();
});





function searchDestinations() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let destinations = document.querySelectorAll('.destination');

    destinations.forEach(dest => {
        let title = dest.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            dest.style.display = "block";
        } else {
            dest.style.display = "none";
        }
    });
}

function filterDestinations() {
    let filter = document.getElementById('filterSelect').value;
    let destinations = document.querySelectorAll('.destination');

    destinations.forEach(dest => {
        if (filter === "all" || dest.classList.contains(filter)) {
            dest.style.display = "block";
        } else {
            dest.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const userConfirmed = confirm("Are you sure you want to submit the form?");
        if (userConfirmed) {
            alert("Form submitted successfully!");
            contactForm.submit(); // Submit the form if the user confirms
        } else {
            alert("Form submission canceled.");
        }
    });
});
