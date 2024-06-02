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
