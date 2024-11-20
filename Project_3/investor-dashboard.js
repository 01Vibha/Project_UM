import { auth, db } from './firebase-config.js';
import { collection, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Fetch business ideas
const ideasList = document.getElementById('ideas-list');
onSnapshot(collection(db, 'business-ideas'), (snapshot) => {
    ideasList.innerHTML = '';
    snapshot.forEach((doc) => {
        const ideaItem = document.createElement('li');
        ideaItem.textContent = doc.data().idea;
        ideasList.appendChild(ideaItem);
    });
});

// Post investment proposals
document.getElementById('post-investment-proposal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const proposal = document.getElementById('proposal').value;

    try {
        await addDoc(collection(db, 'investment-proposals'), {
            userId: auth.currentUser.uid,
            proposal,
            timestamp: Date.now(),
        });

        alert('Proposal posted successfully!');
        document.getElementById('proposal').value = '';
    } catch (error) {
        alert('Error posting proposal: ' + error.message);
    }
});
