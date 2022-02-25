// get inputfield number and convert it to float number and hendle error
function getInputToConvertFloat(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    if(isNaN(inputValue)){
        // document.getElementById('negativeNum-error').style.display = "none";
        document.getElementById('string-error').style.display = "block";
        return;
    }
    else if(inputValue < 0){
        document.getElementById('negativeNum-error').style.display = "block";
        document.getElementById('string-error').style.display = "none";
        return;
    }
    else{
        document.getElementById('negativeNum-error').style.display = "none";
        document.getElementById('string-error').style.display = "none";
    }
    return inputValue;
}
// get previous string balance id and convert it to a float number balance
function InnerTextToFloat(textId) {
    const textid = document.getElementById(textId)
    const text = parseFloat(textid.innerText);
    return text;
}
// display hide or block
function displayHideOrBlock(block,none1,none2,none3) {
        document.getElementById(block).style.display = "block";
        document.getElementById(none1).style.display = "none";
        document.getElementById(none2).style.display = "none";
        document.getElementById(none3).style.display = "none";
        return false;
}
// all input validation check
function validateAllInput() {
    const income = document.getElementById("total-income").value;
    const food = document.getElementById("expense-in-food").value;
    const rent = document.getElementById("expense-in-rent").value;
    const cloth = document.getElementById("expense-in-cloth").value;
    if (income == null || income == "") {
        displayHideOrBlock('incomeField-error','foodField-error','rentField-error','clothField-error');
    }
    else if (food == null || food == ""){
        displayHideOrBlock('foodField-error','incomeField-error','rentField-error','clothField-error');
    }
    else if( rent == null || rent == ""){
        displayHideOrBlock('rentField-error','foodField-error','incomeField-error','clothField-error');
    }
    else if( cloth == null || cloth == ""){
        displayHideOrBlock('clothField-error','rentField-error','incomeField-error','foodField-error');
    }
    else{
        document.getElementById('clothField-error').style.display = "none";
        document.getElementById('rentField-error').style.display = "none";
        document.getElementById('foodField-error').style.display = "none";
        document.getElementById('incomeField-error').style.display = "none";
    }
}

// calculate button
document.getElementById('calculate-btn').addEventListener('click',function () {
    validateAllInput();
    const income = getInputToConvertFloat('total-income');
    // expenses
    const foodExpenses = getInputToConvertFloat('expense-in-food');
    const rentExpenses = getInputToConvertFloat('expense-in-rent');
    const clothExpenses = getInputToConvertFloat('expense-in-cloth');
    
    // total expenses
    const totalExpense = foodExpenses + rentExpenses + clothExpenses;

    // total balance
    const totalBalance = income - totalExpense;
    if(income >= totalExpense){
        if(totalBalance >= 0 && totalExpense >= 0){
            document.getElementById('total-expense').innerText = totalExpense;
            document.getElementById('total-balance').innerText = totalBalance;
            document.getElementById('expense-error').style.display = "none";
        return;
        }
    }
    else{
        document.getElementById('expense-error').style.display = "block";
    }
})

// savings area

document.getElementById('save-btn').addEventListener('click', function() {
    validateAllInput();
    const parsentageInput = getInputToConvertFloat("saving-persentage");
    const totalIncome = getInputToConvertFloat("total-income");
    const multiflication = parsentageInput/100;
    const totalSaving = totalIncome*multiflication;
    if(totalSaving > totalIncome){
        document.getElementById('great-saving-error').style.display = "block";
        document.getElementById('nan-saving-error').style.display = "none";
    }
    else{
        document.getElementById('saving-amount').innerText = totalSaving;
        document.getElementById('great-saving-error').style.display = "none";
        document.getElementById('nan-saving-error').style.display = "none";
    }
    const totalBalance = document.getElementById('total-balance').innerText;
    const remainingBalance = totalBalance - totalSaving;
    if(remainingBalance >= 0 ){
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
})