import { auth, db } from './firebase-config.js';
import { addDoc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Post loan details
document.getElementById('post-loan-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const loanDetails = document.getElementById('loan-details').value;

    try {
        await addDoc(collection(db, 'loans'), {
            userId: auth.currentUser.uid,
            loanDetails,
            timestamp: Date.now(),
        });

        alert('Loan details posted successfully!');
        document.getElementById('loan-details').value = '';
    } catch (error) {
        alert('Error posting loan: ' + error.message);
    }
});

// Fetch loan details
const loansList = document.getElementById('loans-list');
onSnapshot(collection(db, 'loans'), (snapshot) => {
    loansList.innerHTML = '';
    snapshot.forEach((doc) => {
        const loanItem = document.createElement('li');
        loanItem.textContent = doc.data().loanDetails;
        loansList.appendChild(loanItem);
    });
});
