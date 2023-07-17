const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('toggler');

eyeIcon.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        // If the input type is currently 'password', change it to 'text'
        passwordInput.type = 'text';
    } else {
        // Otherwise, change it back to 'password'
        passwordInput.type = 'password';
    }
});
