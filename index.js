const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);

  fetch("https://formspree.io/f/xpqybjlw", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json"
    }
  })
    .then(function (response) {
      formMessage.classList.remove("hidden", "success", "error");

      if (response.ok) {
        formMessage.textContent = "Success! Your message has been sent.";
        formMessage.classList.add("success");
        form.reset();
      } else {
        formMessage.textContent = "Sorry, your message was not sent. Please try again.";
        formMessage.classList.add("error");
      }
    })
    .catch(function () {
      formMessage.classList.remove("hidden", "success", "error");
      formMessage.textContent = "Sorry, your message was not sent. Please check your connection and try again.";
      formMessage.classList.add("error");
    });
});
