document.getElementById('btn-submit').addEventListener('click', function(){

    console.log("Button Clicked By Add Event")

    const emailField =document.getElementById('user-email');
    const email= emailField.value;
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    if(email=== "taskin@gmail.com" && password ==="taskin"){
        console.log( "Valid User");
        window.location.href='bank.html'
    }else{
        alert( "Invalid User. Please Enter Correct Password Or Email");
    }
});

/*
to Work to follow 6 step 
01. first select button and make a add event listener
02. find user email with .value
03. find user password with .value
04. user information check.
05. if user is valid lets jump bank home page with (window.location.href='bank.js');
06. if user is invalid lets get him a alert with alert( "Invalid User. Please Enter Correct Password Or Email");
*/