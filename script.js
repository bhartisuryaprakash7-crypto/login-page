const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Login

document
.getElementById('loginForm')
.addEventListener('submit', function(e){

    e.preventDefault();

    window.location.href = "success.html";
});

// Register

document
.getElementById('registerForm')
.addEventListener('submit', function(e){

    e.preventDefault();

    alert("Registration Successful!");
});