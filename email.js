function sendEmail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_40nb4pb", "template_kjh2ffk", parms).then(alert("Email sent successfully!"))
}