function sendMail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer le formulaire
    const form = document.getElementById("contact-form");

    // Vérifiez si le formulaire est valide
    if (!form.checkValidity()) {
        alert("Veuillez remplir tous les champs requis correctement.");
        return false; // Ne pas envoyer le formulaire
    }

    let parms = {
        name2: document.getElementById("lastName").value,
        name1: document.getElementById("firstName").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_pmqlbxu", "template_w0ixuy4", parms)
        .then(function (res) {
            alert("Success! Your message has been sent. Status: " + res.status);
            form.reset(); // Réinitialise le formulaire après succès
        })
        .catch(function (err) {
            alert("Failed to send email. Please try again later. Error: " + err);
        });
}
