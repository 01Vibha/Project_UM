window.onload = function() {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('username-display').textContent = storedUser.username;
    }
};

function postBusinessIdea() {
    let idea = document.getElementById('business-idea').value;
    alert('Business Idea Posted: ' + idea);
    // You can add further functionality here to save ideas in the database.
}

function postInvestmentProposal() {
    let proposal = document.getElementById('investment-proposal').value;
    alert('Investment Proposal Posted: ' + proposal);
    // Further functionality to save proposals.
}

function postLoanDetails() {
    let loanDetails = document.getElementById('loan-details-input').value;
    alert('Loan Details Posted: ' + loanDetails);
    // Further functionality for loan management.
}
