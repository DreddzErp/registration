function Login() {
document.getElementById('registrationform').onsubmit = function(event) {
    event.preventDefault();
}
let errors = [];
let email = document.getElementById('Email').value;
let password = document.getElementById('Password').value;
let errorElement = document.getElementById('errors');

// Validate email
if (email.trim() === '') {
    errors.push("Email is required.");
} else if (!email.includes('@')) {
    errors.push("Email must be valid.");
}

// Validate password
if (password.trim().length < 10) {
    errors.push("Password must be at least 10 characters long.");
}
 // Display errors or submit the form
 if (errors.length > 0) {
    errorElement.innerHTML = errors.join('<br>');
} else {
    errorElement.innerHTML = "Registration successful!";
    document.getElementById('registrationform').reset();
}
}

function signup() {
    let errors2 = [];
    let password2 = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check password length
    if (password2.trim().length < 8) {
        errors2.push("Password must be at least 8 characters long.");
    }

     // Check password complexity
     if (!complexityRegex.test(password2)) {
        errors2.push("Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }

    // Check if password and confirm password match
    if (password2 !== confirmPassword) {
        errors2.push("Passwords do not match.");
    }

    // Display errors if any
    if (errors2.length > 0) {
        document.getElementById('errors').innerText = errors2.join(", ");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

function forgot_password() {
    let errors3 = [];
    let email2 = document.getElementById('email2').value;
    let errorElement = document.getElementById('errors');

    // Validate email
    if (email2.trim() === '') {
        errors3.push("Email is required.");
    } else if (!email2.includes('@')) {
        errors3.push("Email must be valid.");
    }

    // Display errors, if any
    if (errors3.length > 0) {
        document.getElementById('errors').innerText = errors3.join(", ");
    return false; // Prevent form submission
    }
    return true; // Allow form submission
}