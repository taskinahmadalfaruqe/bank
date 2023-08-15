// STEP 01: DECLARE ADD EVENT LISTENER  
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // STEP 02: GET INPUT FIELD AND VALUE 
    const input= document.getElementById('withdraw-amount');
    const inputValue =input.value;
    const inputValueNumber= parseFloat(inputValue);
    console.log(inputValueNumber, typeof inputValueNumber);

    // STEP 03: CLEAR WITHDRAW FIELD
    input.value=''; 
        // INPUT VALUE VALIDATION 
        if(inputValue<=0){
            alert("Enter Positive Amount");
            return;
        }

    // STEP 04: GET WITHDRAW FIELD AND VALUE
    const withdrawBalance = document.getElementById('withdraw');
    const withdrawPreviousValue =withdrawBalance.innerText;
    const withPreValueNum= parseFloat(withdrawPreviousValue);
    console.log(withPreValueNum, typeof withPreValueNum); 

    // STEP 05: GET TOTAL BALANCE OF YOUR ACCOUNT
    const currentBalance= document.getElementById('balance');
    const preCurBalValue= currentBalance.innerText;
    let previousBalanceNumber= parseFloat(preCurBalValue);
    console.log(previousBalanceNumber, typeof previousBalanceNumber);

    // VALIDATION PART START YOU CAN NOT WITHDRAW MONEY FROM YOUR BALANCE BECAUSE YOU HAVE NOT ENOUGH MONEY 
    if(previousBalanceNumber < inputValueNumber){
        alert("You Have Not Enough Money");
        return;
    }

    // STEP 06: TOTAL WITHDRAW SUM
    const withdrawTotalBalance= inputValueNumber + withPreValueNum;
    withdrawBalance.innerText = withdrawTotalBalance;

    // STEP 07: GET TOTAL BALANCE OF YOUR ACCOUNT AFTER WITHDRAW
    let newBalance= previousBalanceNumber - inputValueNumber;
    currentBalance.innerText= newBalance;
    console.log(newBalance);


})