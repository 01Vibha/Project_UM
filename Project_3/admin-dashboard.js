import { db } from './firebase-config.js';
import { collection, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const userList = document.getElementById('user-list');
onSnapshot(collection(db, 'users'), (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach((doc) => {
        const user = doc.data();
        const userItem = document.createElement('li');
        userItem.textContent = `${user.name} (${user.email}) - ${user.type}`;
        userList.appendChild(userItem);
    });
});

const businessIdeasList = document.getElementById('business-ideas-list');
onSnapshot(collection(db, 'business-ideas'), (snapshot) => {
    businessIdeasList.innerHTML = '';
    snapshot.forEach((doc) => {
        const idea = doc.data();
        const ideaItem = document.createElement('li');
        ideaItem.textContent = idea.idea;
        businessIdeasList.appendChild(ideaItem);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = async () => {
            await deleteDoc(doc.ref);
            alert('Idea deleted successfully');
        };
        ideaItem.appendChild(deleteButton);
    });
});

const investmentProposalsList = document.getElementById('investment-proposals-list');
onSnapshot(collection(db, 'investment-proposals'), (snapshot) => {
    investmentProposalsList.innerHTML = '';
    snapshot.forEach((doc) => {
        const proposal = doc.data();
        const proposalItem = document.createElement('li');
        proposalItem.textContent = proposal.proposal;
        investmentProposalsList.appendChild(proposalItem);
    });
});

const loanList = document.getElementById('loan-list');
onSnapshot(collection(db, 'loans'), (snapshot) => {
    loanList.innerHTML = '';
    snapshot.forEach((doc) => {
        const loan = doc.data();
        const loanItem = document.createElement('li');
        loanItem.textContent = loan.loanDetails;
        loanList.appendChild(loanItem);
    });
});
