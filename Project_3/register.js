import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user role in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email,
            role
        });

        alert('Registration successful!');
        window.location.href = 'login.html';
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
