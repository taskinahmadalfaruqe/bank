// STEP 01: DECLARE A ADD EVENT LISTENER 
document.getElementById('btn-deposit').addEventListener('click',function(){

    // STEP 02: GET INPUT VALUE AND CHECK TYPE OF VALUE 
    const inputValue = document.getElementById('deposit-ammonut');
    const value = inputValue.value;
    // console.log(value, typeof value);


    // STEP 03:  CONVERT VALUE STRING TO NUMBER;
    const numberValue=parseFloat(value);
    // console.log(numberValue, typeof numberValue);


    // STEP 04: GET DEPOSIT NUMBER USING INNER TEXT;
    const previousDeposit= document.getElementById('deposit');
    const  previousValue= previousDeposit.innerText;
    let preValueNumber= parseFloat(previousValue); //CONVERT STRING TO FLOAT NUMBER
    // console.log(previousValue);

    
    // STEP 05: SET THE SUM OF THE PREVIOUS DEPOSIT VALUE AND NEW ADD VALUE
    let depositSum = numberValue + preValueNumber;
    previousDeposit.innerText=depositSum;


    // STEP 06: GET BALANCE STRING
    const previousCurrentBalance =document.getElementById('balance');
    const previousCurrentBalanceString =previousCurrentBalance.innerText;
    const previousCurrentBalanceNumber = parseFloat(previousCurrentBalanceString); //CONVERT STRING TO FLOAT NUMBER
    // console.log(previousCurrentBalanceNumber, typeof previousCurrentBalanceNumber);


    // STEP 07: SET NEW CURRENT BALANCE
    const currentBalance= numberValue + previousCurrentBalanceNumber;
    previousCurrentBalance.innerText =currentBalance;
    // let newBalance = currentBalance;
    // console.log(newBalance);
   
})