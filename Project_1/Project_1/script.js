//Header toogle

let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//Typing Effect
let typed = new Typed('.auto-input', {
    strings: ["Front-End Developer", "Back-End Developer","Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})

//Contact validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    if (name == "" || email == "" || subject == "" || message == "") {
        errorMessage.textContent = "Please fill out all required fields.";
        return false;
    }

    // Simple email validation pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Message sent successfully!");
    return true;
}
