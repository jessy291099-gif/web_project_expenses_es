let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}
console.log("Valor total de los gastos:", totalExpensesValue);
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  const result = totalExpensesValue / expenseEntries.length;
  return result;
}
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
let balanceColor = "green";
function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    const total = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, total]);
  }

  let largestCategory = categoriesData[0][0];
  let largestTotal = categoriesData[0][1];

  for (let i = 1; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestTotal) {
      largestTotal = categoriesData[i][1];
      largestCategory = categoriesData[i][0]; // Guardar el nombre de la categoría
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}
