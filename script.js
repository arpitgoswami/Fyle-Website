const contact = document.getElementById("contact-btn");
const form = document.getElementById("contact");
const blur = document.getElementById("blur");

contact.addEventListener("mousedown", () => {
  form.style.display = "block";
  blur.style.display = "block";
});

const close = () => {
  form.style.display = "none";
  blur.style.display = "none";
};

const redirect = () => {
  window.location("https://fylehq.com", "_blank");
};
