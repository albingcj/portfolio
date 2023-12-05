// navbar readjust
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.getElementById('custom-navbar-toggler');
    var navbar = document.querySelector('.navbar');
    var body = document.body;

    navbarToggler.addEventListener('click', function () {
        if (navbar.classList.contains('fixed-bottom')) {
            // Remove the fixed-height-from-bottom class to revert to default positioning
            navbar.classList.remove('fixed-bottom');
        } else {
            // Add the fixed-height-from-bottom class for the fixed height from the bottom
            navbar.classList.add('fixed-bottom');
        }
    });
});









let mouseX = 0;
let mouseY = 0;

const flashlight = document.getElementById("flashlight");

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
};

function getMousePosition(e) {
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    const flashlightWidth = flashlight.offsetWidth;
    const flashlightHeight = flashlight.offsetHeight;

    // Adjust the position to be under the mouse pointer
    let adjustedLeft = mouseX - flashlightWidth;
    let adjustedTop = mouseY - flashlightHeight / 2;

    // Check if the flashlight is too close to the right edge
    const maxRight = window.innerWidth - flashlightWidth;
    if (adjustedLeft > maxRight) {
        adjustedLeft = maxRight;
    }

    flashlight.style.left = adjustedLeft + "px";
    flashlight.style.top = adjustedTop + "px";
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);





// Function to toggle theme
function toggleTheme() {

    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const themeIcon = document.getElementById("themeIcon");
    const navBrand = document.querySelector(".navbar-brand"); // Use querySelector to select the element with the class "navbar-brand"
    const heroButton = document.querySelector("#hero-btn");
    if (body.classList.contains("bg-dark")) {
        // Switch to light theme and moon icon
        body.classList.remove("bg-dark");
        body.classList.add("bg-light");
        body.classList.remove("text-light");

        heroButton.classList.remove("btn-outline-light");
        heroButton.classList.add("btn-outline-dark");

        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-white");
        navBrand.classList.remove("text-light"); // Add bg-light class
        navBrand.classList.add("text-dark"); // Remove bg-dark class
        themeIcon.classList.remove("text-light");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        body.style.setProperty('--radial-inner-color-light', '#8000ff');
    } else {
        // Switch to dark theme and sun icon
        body.classList.remove("bg-light");
        body.classList.add("text-light");
        body.classList.add("bg-dark");


        heroButton.classList.remove("btn-outline-dark");
        heroButton.classList.add("btn-outline-light");

        navbar.classList.remove("bg-white");
        navbar.classList.add("bg-dark");
        navBrand.classList.add("text-light"); // Remove bg-light class
        navBrand.classList.remove("text-dark"); // Add bg-dark class
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.add("text-light");
        body.style.setProperty('--radial-inner-color-light', '#9d4718');
    }

    const navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach(link => {
        link.classList.toggle("text-light"); // Add this class if you want light text in dark theme
    });

    // You can also toggle other Bootstrap classes as needed.
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.toggle("bg-dark");
    });


    // Toggle SVG color
    const themeSvgs = document.querySelectorAll(".theme-svg");
    const themeSvgs2 = document.querySelectorAll(".theme-svg2");

    themeSvgs.forEach(themeSvg => {
        const svgPath = themeSvg.querySelector("path");

        if (body.classList.contains("bg-dark")) {
            themeSvg.style.fill = "#f8f9fa"; // Dark theme, SVG is white
            svgPath.style.fill = "#f8f9fa"; // Dark theme, SVG path is white
        } else {
            themeSvg.style.fill = "#212529"; // Light theme, SVG is black
            svgPath.style.fill = "#212529"; // Light theme, SVG path is black
        }
    });
    themeSvgs2.forEach(themeSvg => {
        const svgPaths = themeSvg.querySelectorAll("path");

        svgPaths.forEach(svgPath => {
            if (body.classList.contains("bg-dark")) {
                svgPath.style.fill = "#212529";
            } else {
                svgPath.style.fill = "#f8f9fa";
            }
        });
    });

}

// Add a click event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    themeToggleBtn.addEventListener("click", toggleTheme);
});









//hero name load
document.addEventListener("DOMContentLoaded", function () {
    const h1Output = document.querySelector(".typing-h1");
    const pOutput = document.querySelector(".typing-p");

    const h1Typed = new Typed(h1Output, {
        strings: ["~Hi there!", "~I'm Albin", "~Albin George"],
        typeSpeed: 50, // Typing speed in milliseconds
        backSpeed: 80, // Backspacing speed in milliseconds
        startDelay: 100, // Delay before starting the animation
        backDelay: 500, // Delay before starting to backspace
        // loop: true, // Loop the animation
        showCursor: false, // Hide the typing cursor
    });

    const pTyped = new Typed(pOutput, {
        strings: [
            "I'm a Designer.",
            "I'm a Developer.",
            "I build web apps.",
        ],
        typeSpeed: 30, // Typing speed in milliseconds
        backSpeed: 40, // Backspacing speed in milliseconds
        startDelay: 0, // No delay before starting the animation
        backDelay: 1000, // Delay before starting to backspace
        loop: true, // Loop the animation
        showCursor: false, // Hide the typing cursor
    });
});



// email js
$('#myForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload
    // Create an instance of Notyf

    var notyf = new Notyf();
    var formData = new FormData(this);
    formData.append('service_id', 'service_devq4ha');
    formData.append('template_id', 'template_jeklhxe');
    formData.append('user_id', 'Y9es4BKO74MEDlEEA');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        // Display a success notification
        notyf.success({
            message: 'Yep! Got it 😊',
            ripple: true,
            position: {
                x: 'center',
                y: 'bottom',
            },
            duration: 2000
        })
    }).fail(function (error) {
        // Display an error notification
        notyf.error({
            message: 'Oops! Something went wrong.',
            ripple: true,
            position: {
                x: 'center',
                y: 'bottom',
            },
            duration: 2000,
            icon: false
        })
    });
});