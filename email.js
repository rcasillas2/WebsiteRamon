document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = sanitizeInput(document.getElementById("name").value);
    const email = document.getElementById("email").value.trim();
    const message = sanitizeInput(document.getElementById("message").value);
    const captcha = document.getElementById("captcha").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !message || !email || !captcha) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (captcha !== "21") {
      alert("Verificación fallida. Intenta de nuevo.");
      return;
    }

    // Si todo es válido, enviar el email
    emailjs.send("default_service", "template_kjh2ffk", {
      name: name,
      email: email,
      message: message,
    }).then(() => {
      alert("Formulario enviado correctamente.");
      form.reset();
    }, (error) => {
      alert("Error al enviar el formulario. Intenta de nuevo más tarde.");
      console.error("EmailJS error:", error);
    });
  });

  function sanitizeInput(input) {
    return input.replace(/[<>\/\\'"`]/g, "").trim();
  }
});
