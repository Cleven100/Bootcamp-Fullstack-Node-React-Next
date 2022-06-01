const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

function showError(input, message) {
 const formControl = input.parentElement;
 formControl.className = 'form-control error';
 const small = formControl.querySelector('small');
 small.innerText = message;
}

function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess'
}

function isValidEmail(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username,'Usarname is required');
    } else {
        showSucess(username);
    }

    if(email.value === '') {
        showError(email,'Email is required');  
    } else if(!isValidEmail(email.value)) {
        showError(email,'Email is not valid');  
    }
    else {
        showSucess(email);
    }


    if(password.value === '') {
        showError(password,'Password is required');
    } else {
        showSucess(password);
    }

    if(passwordTwo.value === '') {
        showError(passwordTwo,'Confirm password is required');
    } else {
        showSucess(passwordTwo);
    }
    
   
    
})