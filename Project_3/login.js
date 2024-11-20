import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user role from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const role = userDoc.data().role;

        // Redirect based on role
        if (role === 'business') {
            window.location.href = 'business-dashboard.html';
        } else if (role === 'investor') {
            window.location.href = 'investor-dashboard.html';
        } else if (role === 'banker') {
            window.location.href = 'banker-dashboard.html';
        } else {
            alert('Unknown role.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});
