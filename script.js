/*
SPENDWISE - INTERACTIVE JAVASCRIPT

*/

/*

APPLICATION DATA
==================================================
*/

// The user's current budget
let budget = 80000;

// Array containing multiple expense records
let expenses = [
{
name: "Groceries",
amount: 7500,
category: "Food"
},
{
name: "Matatu",
amount: 2500,
category: "Transport"
},
{
name: "Rent",
amount: 18000,
category: "Rent"
}
];

// Available spending categories
const categories = [
{
name: "Food",
icon: "🍽️",
className: "food"
},
{
name: "Transport",
icon: "🚗",
className: "transport"
},
{
name: "Rent",
icon: "🏠",
className: "rent"
},
{
name: "Entertainment",
icon: "🎮",
className: "entertainment"
},
{
name: "Savings",
icon: "💎",
className: "savings"
},
{
name: "Utilities",
icon: "💡",
className: "utilities"
}
];

/*

GET HTML ELEMENTS
==================================================
*/

const budgetForm =
document.getElementById("budgetForm");

const budgetInput =
document.getElementById("budgetInput");

const expenseForm =
document.getElementById("expenseForm");

const expenseName =
document.getElementById("expenseName");

const expenseAmount =
document.getElementById("expenseAmount");

const expenseCategory =
document.getElementById("expenseCategory");

const budgetDisplay =
document.getElementById("budgetDisplay");

const expenseDisplay =
document.getElementById("expenseDisplay");

const remainingDisplay =
document.getElementById("remainingDisplay");

const expenseTableBody =
document.getElementById("expenseTableBody");

const categoryCards =
document.getElementById("categoryCards");

const budgetMessage =
document.getElementById("budgetMessage");

const clearExpensesButton =
document.getElementById("clearExpensesButton");

/*

CALCULATE TOTAL EXPENSES
==================================================
*/

function calculateTotalExpenses() {

let total = 0;


/*
    forEach() loops through every
    expense stored in the array.
*/

expenses.forEach(function(expense) {

    total = total + expense.amount;

});


return total;


}

/*

CALCULATE REMAINING BALANCE
==================================================
*/

function calculateRemainingBalance() {

const totalExpenses =
    calculateTotalExpenses();

return budget - totalExpenses;


}

/*

UPDATE SUMMARY
==================================================
*/

function updateSummary() {

const totalExpenses =
    calculateTotalExpenses();

const remaining =
    calculateRemainingBalance();


budgetDisplay.textContent =
    "KSh " + budget.toLocaleString();

expenseDisplay.textContent =
    "KSh " + totalExpenses.toLocaleString();

remainingDisplay.textContent =
    "KSh " + remaining.toLocaleString();


/*
    Conditional statements are used
    to determine the user's financial status.
*/

if (remaining < 0) {

    budgetMessage.textContent =
        "⚠️ You are over budget by KSh " +
        Math.abs(remaining).toLocaleString() +
        ". Consider reducing your spending.";

    budgetMessage.className =
        "budget-message danger";

}

else if (remaining === 0) {

    budgetMessage.textContent =
        "⚠️ You have used your entire budget.";

    budgetMessage.className =
        "budget-message warning";

}

else if (remaining <= budget * 0.20) {

    budgetMessage.textContent =
        "⚠️ Warning: You have less than 20% of your budget remaining.";

    budgetMessage.className =
        "budget-message warning";

}

else {

    budgetMessage.textContent =
        "✅ You are within your budget. You have KSh " +
        remaining.toLocaleString() +
        " remaining.";

    budgetMessage.className =
        "budget-message";

}


}

/*

DISPLAY EXPENSES
==================================================
*/

function displayExpenses() {

/*
    Clear the existing table before
    adding updated records.
*/

expenseTableBody.innerHTML = "";


/*
    Check whether the array is empty.
*/

if (expenses.length === 0) {

    const row =
        document.createElement("tr");

    row.className = "empty-row";

    row.innerHTML =
        "<td colspan='3'>No expenses added yet.</td>";

    expenseTableBody.appendChild(row);

    return;
}


/*
    Loop through every expense record.
*/

expenses.forEach(function(expense) {

    const row =
        document.createElement("tr");


    row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.category}</td>
        <td>KSh ${expense.amount.toLocaleString()}</td>
    `;


    expenseTableBody.appendChild(row);

});


}

/*

CALCULATE CATEGORY TOTALS
==================================================
*/

function getCategoryTotal(categoryName) {

let total = 0;


/*
    Loop through all expenses and
    only add expenses belonging
    to the selected category.
*/

expenses.forEach(function(expense) {

    if (expense.category === categoryName) {

        total = total + expense.amount;

    }

});


return total;


}

/*

COUNT CATEGORY EXPENSES
==================================================
*/

function getCategoryCount(categoryName) {

let count = 0;


expenses.forEach(function(expense) {

    if (expense.category === categoryName) {

        count++;

    }

});


return count;


}

/*

DISPLAY CATEGORY CARDS
==================================================
*/

function displayCategoryCards() {

categoryCards.innerHTML = "";


/*
    Loop through the categories array.
*/

categories.forEach(function(category) {

    const total =
        getCategoryTotal(category.name);

    const count =
        getCategoryCount(category.name);


    const card =
        document.createElement("div");

    card.className =
        "category-card";


    card.innerHTML = `
        <div class="category-top">

            <div class="category-icon ${category.className}">
                ${category.icon}
            </div>

        </div>

        <h3>${category.name}</h3>

        <p>
            ${count} expense record${count === 1 ? "" : "s"}
        </p>

        <div class="category-total">
            KSh ${total.toLocaleString()}
        </div>

        <div class="category-count">
            Total spent in ${category.name}
        </div>
    `;


    categoryCards.appendChild(card);

});


}

/*

UPDATE ENTIRE DASHBOARD
==================================================
*/

function updateDashboard() {

updateSummary();

displayExpenses();

displayCategoryCards();


}

/*

SET BUDGET EVENT
==================================================
*/

budgetForm.addEventListener(
"submit",
function(event) {

    /*
        Prevent the browser from
        refreshing the page.
    */

    event.preventDefault();


    const newBudget =
        Number(budgetInput.value);


    /*
        Validate the budget.
    */

    if (
        isNaN(newBudget) ||
        newBudget <= 0
    ) {

        alert(
            "Please enter a valid budget greater than zero."
        );

        return;
    }


    /*
        Update the budget variable.
    */

    budget = newBudget;


    /*
        Update the dashboard.
    */

    updateDashboard();

    console.log(
        "Budget updated to KSh " +
        budget.toLocaleString()
    );

}


);

/*

ADD EXPENSE EVENT
==================================================
*/

expenseForm.addEventListener(
"submit",
function(event) {

    event.preventDefault();


    /*
        Get values from the form.
    */

    const name =
        expenseName.value.trim();

    const amount =
        Number(expenseAmount.value);

    const category =
        expenseCategory.value;


    /*
        Validate the user input.
    */

    if (
        name === "" ||
        isNaN(amount) ||
        amount <= 0 ||
        category === ""
    ) {

        alert(
            "Please complete all expense fields correctly."
        );

        return;
    }


    /*
        Create a new expense object.
    */

    const newExpense = {

        name: name,

        amount: amount,

        category: category

    };


    /*
        Add the new expense object
        to the expenses array.
    */

    expenses.push(newExpense);


    /*
        Update everything on the dashboard.
    */

    updateDashboard();


    /*
        Clear the form.
    */

    expenseForm.reset();


    /*
        Confirmation in the console.
    */

    console.log(
        "New expense added:",
        newExpense
    );

}


);

/*

CLEAR ALL EXPENSES
==================================================
*/

clearExpensesButton.addEventListener(
"click",
function() {

    /*
        Decision making:
        only clear if expenses exist.
    */

    if (expenses.length === 0) {

        alert(
            "There are no expenses to clear."
        );

        return;
    }


    /*
        Ask the user for confirmation.
    */

    const confirmed =
        confirm(
            "Are you sure you want to remove all expenses?"
        );


    if (confirmed) {

        /*
            Empty the array.
        */

        expenses = [];


        /*
            Update the dashboard.
        */

        updateDashboard();


        console.log(
            "All expenses have been cleared."
        );

    }

}


);

/*

INITIAL PAGE LOAD
==================================================
*/

updateDashboard();

console.log("================================");
console.log("SpendWise Interactive Dashboard");
console.log("Budget: KSh " + budget.toLocaleString());
console.log(
"Expenses: KSh " +
calculateTotalExpenses().toLocaleString()
);
console.log(
"Remaining: KSh " +
calculateRemainingBalance().toLocaleString()
);
console.log("================================");