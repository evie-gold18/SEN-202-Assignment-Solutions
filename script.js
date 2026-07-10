// ===============================
// Security Incident Mapping (SIM)
// script.js
// ===============================

// Display welcome message
window.onload = function () {
    console.log("Welcome to the SIM System.");
};

// Function to validate forms
function validateForm() {

    let inputs = document.querySelectorAll("input[required], textarea[required], select[required]");

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value.trim() === "") {

            alert("Please fill in all required fields.");

            inputs[i].focus();

            return false;
        }

    }

    return true;
}

// Registration Success
function registerUser() {

    if (validateForm()) {

        alert("Registration Successful!");

        window.location.href = "login.html";
    }

    return false;
}

// Login Success
function loginUser() {

    if (validateForm()) {

        alert("Login Successful!");

        window.location.href = "dashboard.html";
    }

    return false;
}

// Report Incident
function submitIncident() {

    if (validateForm()) {

        alert("Incident Report Submitted Successfully!");

        document.getElementById("incidentForm").reset();
    }

    return false;
}

// Contact Form
function contactUs() {

    if (validateForm()) {

        alert("Thank you! Your message has been sent.");

        document.getElementById("contactForm").reset();
    }

    return false;
}

// Logout
function logout() {

    let answer = confirm("Are you sure you want to logout?");

    if (answer) {

        alert("You have logged out successfully.");

        window.location.href = "login.html";
    }

}