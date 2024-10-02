const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const expenseContainer = document.getElementById("expense-container");
const updatePopup = document.getElementById("update-popup");
const updateForm = document.getElementById("update-form");
//add api key
const API_KEY = "2bkDX9R9KNKZtfMbR6OM5KVHVEj90MJOZnXYYNmCJMYgYKhnZpSuGmP6";
const randomPage = Math.floor(Math.random() * 50) + 1; // Assuming there are 50 pages of results
  const API_URL = `https://api.pexels.com/v1/search?query=nature&per_page=1&page=${randomPage}`; // Random nature image from random page
const setRandomBackground = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    const imageUrl = data.photos[0].src.large2x;
    //set the background image
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  } catch (error) {
    toastr.error("Error fetching the background image:", error);
  }
};

setRandomBackground();

// Load expenses from localStorage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let currentEditIndex = null;

// If there are any expenses in localStorage, display them
if (expenses.length > 0) {
  renderExpenses();
  expenseContainer.classList.remove("hidden");
}

// Add expense
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("expense-name").value;
  const amount = document.getElementById("expense-amount").value;

  // Only push the data once
  if (name && amount) {
    expenses.push({ name, amount });
    saveExpensesToLocalStorage(); // Save to localStorage
    renderExpenses(); // Render updated list

    // Toastr notification for adding expense
    toastr.success("Expense Added!");

    // Show the expense container
    expenseContainer.classList.remove("hidden");

    expenseForm.reset(); // Reset form fields
  } else {
    toastr.error("Please fill in all fields");
  }
});

// Render expenses
function renderExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    expenseList.innerHTML += `
          <li class="flex justify-between items-center py-2">
            <div>
              <span class="font-bold capitalize">${expense.name}</span>
              <span class="text-black font-bold"> - ৳${expense.amount}</span>
            </div>
            <div>
              <button class="text-black font-bold mr-2" onclick="editExpense(${index})">Edit</button>
              <button class="text-red-500 font-bold" onclick="deleteExpense(${index})">Delete</button>
            </div>
          </li>
        `;
  });
}

// Save expenses to localStorage
const saveExpensesToLocalStorage = () => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};

// Delete expense
window.deleteExpense = function (index) {
  expenses.splice(index, 1); // Remove the selected expense
  saveExpensesToLocalStorage(); // Save updated array to localStorage
  renderExpenses(); // Re-render the updated list

  // Toastr notification for deleting expense
  toastr.error("Expense Deleted!");

  // If no expenses left, hide the container
  if (expenses.length === 0) {
    expenseContainer.classList.add("hidden");
  }
};

// Edit expense
window.editExpense = function (index) {
  currentEditIndex = index;
  const expense = expenses[index];
  document.getElementById("update-name").value = expense.name;
  document.getElementById("update-amount").value = expense.amount;
  updatePopup.classList.remove("hidden");
};

// Handle update form submit
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("update-name").value;
  const amount = document.getElementById("update-amount").value;
  expenses[currentEditIndex] = { name, amount }; // Update the selected expense
  saveExpensesToLocalStorage(); // Save updated array to localStorage
  renderExpenses(); // Re-render the updated list

  // Toastr notification for updating expense
  toastr.info("Expense Updated!");

  updatePopup.classList.add("hidden");
});

// Cancel update
document.getElementById("cancel-update").addEventListener("click", () => {
  updatePopup.classList.add("hidden");
});
