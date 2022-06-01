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

function checkEmail(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(input.value.trim())) {
         showSucess(input);
  } else {
      showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
 inputArr.forEach(function(input) {
   if(input.value.trim() === '') {
       showError(input, `${getFieldName(input)} is required`);
   } else {
       showSucess(input);
   }
 });
}


function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSucess(input);
    }
}

function checkPasswordsMatch(inputOne, inputTwo) {
    if(inputOne.value !== inputTwo.value) {
        showError(inputTwo, 'Passwords do not match')
    }
}

function getFieldName(input) {
     if((input.id) === 'passwordTwo') {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1, 8);
    }

    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

   checkRequired([username, email, password, passwordTwo]);

   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   checkEmail(email);
   checkPasswordsMatch(password, passwordTwo)
   
    
   
    
})