// Login button event handler
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

function showBalance(id){
    
}

// Deposit event handler
const deposit = document.getElementById("deposit");
deposit.addEventListener('click', function(){
    depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    //console.log(depositAmount);
    currentDeposit = parseFloat(document.getElementById('current-deposit').innerText);
    //console.log(currentDeposit);
    currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    currentDeposit = currentDeposit + depositAmount;
    currentBalance = currentBalance + depositAmount;
    
    document.getElementById('current-deposit').innerText = currentDeposit;
    document.getElementById('current-balance').innerText = currentBalance;
    document.getElementById('deposit-amount').value = "";
})


// withdraw event handler
const withdraw = document.getElementById("withdraw");
withdraw.addEventListener('click', function(){
    withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    //console.log(withdrawAmount);
    currentWithdraw = parseFloat(document.getElementById('current-withdraw').innerText);
    //console.log(currentWithdraw);
    currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    currentWithdraw = currentWithdraw + withdrawAmount;
    currentBalance = currentBalance - withdrawAmount;
    document.getElementById('current-withdraw').innerText = currentWithdraw;
    document.getElementById('current-balance').innerText = currentBalance;
    document.getElementById('withdraw-amount').value = "";
})


