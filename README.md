document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const expensesList = document.getElementById('expenses-list');
    const addExpenseButton = document.getElementById('add-expense');
    const calculateBudgetButton = document.getElementById('calculate-budget');
    const remainingBudgetDisplay = document.getElementById('remaining-budget');

    addExpenseButton.addEventListener('click', function () {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');

        const expenseDesc = document.createElement('input');
        expenseDesc.type = 'text';
        expenseDesc.placeholder = 'Expense description';

        const expenseAmount = document.createElement('input');
        expenseAmount.type = 'number';
        expenseAmount.placeholder = 'Amount';

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-expense');
        removeButton.textContent = 'Remove';

        removeButton.addEventListener('click', function () {
            expensesList.removeChild(expenseItem);
        });

        expenseItem.appendChild(expenseDesc);
        expenseItem.appendChild(expenseAmount);
        expenseItem.appendChild(removeButton);

        expensesList.appendChild(expenseItem);
    });

    calculateBudgetButton.addEventListener('click', function () {
        const income = parseFloat(incomeInput.value) || 0;
        let totalExpenses = 0;

        document.querySelectorAll('.expense-item input[type="number"]').forEach(input => {
            totalExpenses += parseFloat(input.value) || 0;
        });

        const remainingBudget = income - totalExpenses;
        remainingBudgetDisplay.textContent = `$${remainingBudget.toFixed(2)}`;
    });
});
