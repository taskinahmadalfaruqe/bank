// STEP 01: DECLARE ADD EVENT LISTENER  
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // STEP 02: GET INPUT FIELD AND VALUE 
    const input= document.getElementById('withdraw-amount');
    const inputValue =input.value;
    const inputValueNumber= parseFloat(inputValue);
    console.log(inputValueNumber, typeof inputValueNumber);


    // STEP 03: GET WITHDRAW FIELD AND VALUE
    const withdrawBalance = document.getElementById('withdraw');
    const withdrawPreviousValue =withdrawBalance.innerText;
    const withPreValueNum= parseFloat(withdrawPreviousValue);
    console.log(withPreValueNum, typeof withPreValueNum);

    // STEP 04: TOTAL WITHDRAW SUM
    const withdrawTotalBalance= inputValueNumber + withPreValueNum;
    withdrawBalance.innerText = withdrawTotalBalance;

    // STEP 05: GET TOTAL BALANCE OF YOUR ACCOUNT
    const currentBalance= document.getElementById('balance');
    const preCurBalValue= currentBalance.innerText;
    let previousBalanceNumber= parseFloat(preCurBalValue);
    console.log(previousBalanceNumber, typeof previousBalanceNumber);

    // STEP 06: GET TOTAL BALANCE OF YOUR ACCOUNT AFTER WITHDRAW
    let newBalance= previousBalanceNumber - inputValueNumber;
    currentBalance.innerText= newBalance;
    console.log(newBalance);

    // STEP 07: CLEAR WITHDRAW FIELD
    input.value='';
    
})