// ==========================================
// SupportHub - Login Page JavaScript
// Author : Ashish Satpute
// Project : Customer Support Ticket System
// ==========================================

// ===========================
// DOM ELEMENTS
// ===========================

const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginButton = document.querySelector("button[type='submit']");

// ===========================
// PASSWORD SHOW / HIDE
// ===========================

togglePassword.addEventListener("click", () => {

    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.classList.toggle("bi-eye");
    togglePassword.classList.toggle("bi-eye-slash");

});

// ===========================
// EMAIL VALIDATION
// ===========================

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

// ===========================
// SHOW ERROR
// ===========================

function showError(message, inputField) {

    alert(message);

    inputField.focus();

}

// ===========================
// LOGIN FORM
// ===========================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Empty Email

    if (email === "") {

        showError("Please enter your email address.", emailInput);

        return;

    }

    // Invalid Email

    if (!isValidEmail(email)) {

        showError("Please enter a valid email address.", emailInput);

        return;

    }

    // Empty Password

    if (password === "") {

        showError("Please enter your password.", passwordInput);

        return;

    }

    // Password Length

    if (password.length < 6) {

        showError("Password must contain at least 6 characters.", passwordInput);

        return;

    }

    // ===========================
    // BUTTON LOADING
    // ===========================

    loginButton.disabled = true;

    loginButton.innerHTML = `
        <i class="bi bi-arrow-repeat spinner"></i>
        Logging in...
    `;

    // Fake Login Delay
    // Replace with API call later

    setTimeout(() => {

        loginButton.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            Login Successful
        `;

        // Redirect after success

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1000);

    }, 2000);

});