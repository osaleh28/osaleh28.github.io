const form = document.querySelector("form");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const data = new FormData(form);

  fetch("https://formspree.io/f/xpqybjlw", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      formMessage.textContent = "✅ Message sent successfully!";
      formMessage.classList.remove("hidden");
      formMessage.classList.add("success");

      form.reset();
    } else {
      formMessage.textContent = "❌ Something went wrong. Please try again.";
      formMessage.classList.remove("hidden");
    }
  })
  .catch(() => {
    formMessage.textContent = "⚠️ Network error. Please try again.";
    formMessage.classList.remove("hidden");
  });
});
