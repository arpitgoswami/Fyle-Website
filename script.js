const contact = document.getElementById("contact-btn");
const form = document.getElementById("contact");
const blur = document.getElementById("blur");

contact.addEventListener("mousedown", () => {
  form.style.display = "block";
  blur.style.display = "block";
});

const closeForm = () => {
  form.style.display = "none";
  blur.style.display = "none";
};

const redirect = () => {
  window.open("https://fylehq.com", "_blank");
};

const box1 = document.querySelectorAll("#box1");
const box2 = document.getElementById("box2");
const image = document.getElementById("project-img");

box1[0].addEventListener("mouseover", () => {
  image.src = "./assets/image.png";
});

box2.addEventListener("mouseover", () => {
  image.src = "./assets/image2.jpg";
});

box1[1].addEventListener("mouseover", () => {
  image.src = "./assets/image3.jpg";
});

// carousel scripting

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dot");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  showSlide(--slideIndex);
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}
