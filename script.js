// Contact form validation using JavaScript
// Prevents empty input and checks email format


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (message === "") {
        alert("Please enter your message");
        return;
    }

    alert("Form submitted successfully! 😊");

    // clear form
    document.getElementById("contactForm").reset();
});
