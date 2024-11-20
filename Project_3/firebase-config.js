document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userType = document.getElementById('user-type').value;

    // Create a user object
    let user = {
        username: username,
        email: email,
        password: password,
        userType: userType
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    window.location.href = 'login.html'; // Redirect to login page
});
