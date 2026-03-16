const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  message.textContent = "Thank you " + name + "! Your message has been sent.";

  form.reset();
});
