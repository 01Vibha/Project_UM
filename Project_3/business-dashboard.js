import { auth, db } from './firebase-config.js';
import { addDoc, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const user = auth.currentUser;

// Form submission
document.getElementById('post-idea-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const idea = document.getElementById('idea').value;

    try {
        await addDoc(collection(db, 'business-ideas'), {
            userId: user.uid,
            idea,
            timestamp: Date.now(),
        });

        alert('Idea posted successfully!');
        document.getElementById('idea').value = '';
    } catch (error) {
        alert('Error posting idea: ' + error.message);
    }
});

// Fetch posted ideas
const ideasList = document.getElementById('ideas-list');
const ideasQuery = query(collection(db, 'business-ideas'), where('userId', '==', user.uid));

onSnapshot(ideasQuery, (snapshot) => {
    ideasList.innerHTML = '';
    snapshot.forEach((doc) => {
        const ideaItem = document.createElement('li');
        ideaItem.textContent = doc.data().idea;
        ideasList.appendChild(ideaItem);
    });
});
