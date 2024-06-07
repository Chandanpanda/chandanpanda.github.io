document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const calculateBudgetButton = document.getElementById('calculate-budget');
    const remainingBudgetDisplay = document.getElementById('remaining-budget');

    const expenseInputs = {
        housing: document.getElementById('housing'),
        utilities: document.getElementById('utilities'),
        food: document.getElementById('food'),
        transportation: document.getElementById('transportation'),
        healthcare: document.getElementById('healthcare'),
        insurance: document.getElementById('insurance'),
        debt: document.getElementById('debt'),
        entertainment: document.getElementById('entertainment'),
        savings: document.getElementById('savings'),
        miscellaneous: document.getElementById('miscellaneous'),
    };

    const expensePercentages = {
        housing: 0.30,
        utilities: 0.10,
        food: 0.15,
        transportation: 0.10,
        healthcare: 0.05,
        insurance: 0.05,
        debt: 0.10,
        entertainment: 0.05,
        savings: 0.05,
        miscellaneous: 0.05,
    };

    calculateBudgetButton.addEventListener('click', function () {
        const income = parseFloat(incomeInput.value) || 0;
        let totalExpenses = 0;

        for (const key in expenseInputs) {
            const recommendedAmount = income * expensePercentages[key];
            const actualAmount = parseFloat(expenseInputs[key].value) || 0;
            totalExpenses += actualAmount;

            expenseInputs[key].placeholder = `Recommended: $${recommendedAmount.toFixed(2)}`;
        }

        const remainingBudget = income - totalExpenses;
        remainingBudgetDisplay.textContent = `$${remainingBudget.toFixed(2)}`;
    });
});
