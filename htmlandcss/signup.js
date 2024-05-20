document.addEventListener('DOMContentLoaded', function() {
    // Default values
    // document.getElementById('email').value = 'user@example.com';
    // document.getElementById('password').value = 'user password';
    // Event listener for form submission
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var message = document.getElementById('message');

        // Password validation requirements
        var passwordRequirements = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#])[A-Za-z\d!@#]{8,}$/;

        // Clear previous message
        message.textContent = '';
        message.style.color = '';

        if (!passwordRequirements.test(password)) {
            message.innerHTML = 'Error: Valid email and password is needed';
            message.style.color = 'red';
            return;
        }

        message.textContent = `Sign up successful! Welcome, ${email}`;
        message.style.color = 'white';
    });

    var passwordField = document.getElementById('password');
    var passwordRequirementsMessage = document.getElementById('password-requirements');

    passwordField.addEventListener('focus', function() {
        passwordRequirementsMessage.classList.remove('hidden');
    });

    passwordField.addEventListener('blur', function() {
        passwordRequirementsMessage.classList.add('hidden');
    });
});
