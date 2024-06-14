// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// JavaScript for Responsive Menu
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('showing');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('showing');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
});

// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//wedding slider buttons
// Wedding slider buttons
let slideIndWedding = 1; // Rename slideInd to slideIndWedding
showSlidesWedding(slideIndWedding); // Call showSlidesWedding with the correct initial index

function plusSlides(n) {
  showSlidesWedding(slideIndWedding += n); // Adjust for slideIndWedding
}

function currentSlide(n) {
  showSlidesWedding(slideIndWedding = n); // Adjust for slideIndWedding
}

function showSlidesWedding(n) { // Rename showSlides to showSlidesWedding
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // If no slides, return
  if (slides.length === 0) {
    return;
  }

  // Reset slideIndWedding if it goes out of bounds
  if (n > slides.length) { slideIndWedding = 1; }
  if (n < 1) { slideIndWedding = slides.length; }

  // Hide all slides and remove 'active' class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as active
  slides[slideIndWedding - 1].style.display = "block";
  dots[slideIndWedding - 1].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
  const imagesData = [
    ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg"],
    ["./img/04.jpg", "./img/05.jpg", "./img/01.jpg"],
    ["./img/02.jpg", "./img/03.jpg", "./img/04.jpg"],
    ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg"],
    ["./img/04.jpg", "./img/05.jpg", "./img/01.jpg"],
    ["./img/02.jpg", "./img/03.jpg", "./img/04.jpg"],
    ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg"],
    ["./img/04.jpg", "./img/05.jpg", "./img/01.jpg"],
    ["./img/02.jpg", "./img/03.jpg", "./img/04.jpg"],
    ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg"],
    ["./img/04.jpg", "./img/05.jpg", "./img/01.jpg"],
    ["./img/02.jpg", "./img/03.jpg", "./img/04.jpg"],
  ];

  const sliderContainer = document.querySelector(".slider");
  const dotsContainer = document.querySelector(".dots-container");

  imagesData.forEach((imageArray, index) => {
    // Create slide div
    const slide = document.createElement("div");
    slide.className = "mySlides";

    // Create slide group div
    const slideGroup = document.createElement("div");
    slideGroup.className = "slide-group";

    // Create images and add to slide group
    imageArray.forEach(imageSrc => {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = "Image";
      slideGroup.appendChild(img);
    });

    // Append slide group to slide
    slide.appendChild(slideGroup);

    // Append slide to slider container
    sliderContainer.appendChild(slide);

    // Create dot for this slide
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function() {
      currentSlide(index + 1);
    };

    // Append dot to dots container
    dotsContainer.appendChild(dot);
  });

  // Show the first slide initially
  showSlides(slideInd);
});
