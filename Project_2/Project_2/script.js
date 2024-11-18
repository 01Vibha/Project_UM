let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

// Set Budget
totalAmountButton.addEventListener("click", () => {
    tempAmount = parseFloat(totalAmount.value);

    if (tempAmount === "" || tempAmount < 0 || isNaN(tempAmount)) {
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        document.getElementById("amount").innerText = tempAmount.toFixed(2);
        balanceValue.innerText = tempAmount.toFixed(2);
        balanceValue.style.color = ""; // Reset to default color
        totalAmount.value = "";
    }
});

// Disable Edit/Delete Buttons
const disableButtons = (bool) => {
    const editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((button) => {
        button.disabled = bool;
    });
};

// Modify List Elements
const modifyElement = (element, edit = false) => {
    const parentDiv = element.parentElement;
    const expenseAmount = parseFloat(parentDiv.querySelector(".amount").innerText);
    const expenseTitle = parentDiv.querySelector(".product").innerText;

    if (edit) {
        productTitle.value = expenseTitle;
        userAmount.value = expenseAmount;
        disableButtons(true);
    }

    const currentBalance = parseFloat(balanceValue.innerText);
    const currentExpenditure = parseFloat(expenditureValue.innerText);

    balanceValue.innerText = (currentBalance + expenseAmount).toFixed(2);
    expenditureValue.innerText = (currentExpenditure - expenseAmount).toFixed(2);

    if (parseFloat(balanceValue.innerText) < 0) {
        balanceValue.style.color = "red";
    } else {
        balanceValue.style.color = "";
    }

    parentDiv.remove();
};

// Create List
const listCreator = (expenseName, expenseValue) => {
    const sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue.toFixed(2)}</p>`;

    const editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        modifyElement(editButton, true);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "24px";
    deleteButton.addEventListener("click", () => {
        modifyElement(deleteButton);
    });

    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    list.appendChild(sublistContent);
};

// Add Expenses
checkAmountButton.addEventListener("click", () => {
    const expenseTitle = productTitle.value.trim();
    const expenseAmount = parseFloat(userAmount.value);

    if (!expenseTitle || isNaN(expenseAmount) || expenseAmount <= 0) {
        productTitleError.classList.remove("hide");
        setTimeout(() => {
            productTitleError.classList.add("hide");
        }, 2000);
        return;
    }

    const currentBalance = parseFloat(balanceValue.innerText);
    const newExpenditure = parseFloat(expenditureValue.innerText) + expenseAmount;

    if (expenseAmount > currentBalance) {
        // Show warning, update balance to negative, and clear fields
        const warningMessage = document.createElement("p");
        warningMessage.classList.add("error");
        warningMessage.innerText = "Expense exceeds remaining balance!";
        document.querySelector(".user-amount-container").appendChild(warningMessage);

        balanceValue.innerText = (currentBalance - expenseAmount).toFixed(2);
        balanceValue.style.color = "red";

        setTimeout(() => {
            warningMessage.remove();
        }, 2000);
    } else {
        balanceValue.innerText = (currentBalance - expenseAmount).toFixed(2);
    }

    expenditureValue.innerText = newExpenditure.toFixed(2);
    listCreator(expenseTitle, expenseAmount);

    productTitle.value = "";
    userAmount.value = "";
});
