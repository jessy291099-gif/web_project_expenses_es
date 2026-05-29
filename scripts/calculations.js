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
function calculateCategoryExpenses(groceries) {
  let groceriesExpenses = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (groceriesExpenses === 0) {
      categoryExpenses += expenseEntries[1];
    }
  }
  return categoryExpenses;
}
