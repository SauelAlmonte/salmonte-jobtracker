// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const Confirmpassword = document.getElementById('password2')
const usernameErr = username.nextElementSibling
const passwordErr = password.nextElementSibling
const emailErr = email.nextElementSibling
const ConfirmpasswordErr = Confirmpassword.nextElementSibling
const usernameSuccess = usernameErr.nextElementSibling
const emailSuccess = emailErr.nextElementSibling
const passwordSucess = passwordErr.nextElementSibling
const ConfirmpasswordSuccess = ConfirmpasswordErr.nextElementSibling

// const usernameErr = document.getElementById("usernameErr")

// 2. Add event / modification

regForm.addEventListener('click', function (e) {
  e.preventDefault()

  validateEmpty(username)
  validateIsEmail(email)
 // validateConfirmpassword(password, password2)
 // validateMinLength(user)
  //validateContainsMSIMBOOrg(email)

//TODO: add the validation for email (Code Challenge 5a)
//@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the below blueprints

//@TODO: add the validation for password (Code Challenge 5a)
//@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the 



//@TODO: add the validation for email
//if (email.value === '') {
  //emailErr.className = 'block bg-red-500 text-white'
//} else {
//emailSuccess.className = 'block bg-green-600 text-white'  



  function validateEmpty(input) {
    console.log(input)
    if (email.value === '') {
      showError(emailErr.classname.innerHTML= bg-red-600 text-white)
    } else {
      showemailSuccess(input)
    }
}


  function showError(input) {
    //steps to do this ... coul Algo ...
    console.log('input is empty')
  }
  
  function showSuccess () {
    console.log('you are ready to submit')
  }

 // function validatePassMatch(password, password2) {
//@TODO: check if the passwords match
//})

  function validateIsEmail(email) {
    //@TODO: check if input is an email
  }

  function validateMinLength(input) {
    //@TODO: check length
  }

 

  //function validateConfirmpassword(password, password2)
    //how we validate
  

  // 2. Check if the value is empty
  //if (username.value === '') {
    // 3. If empty, give user some feedback
  //  usernameErr.className = 'block bg-red-500 text-white'
 // } else {
  // usernameSuccess.className = 'block bg-green-600 text-white'}
  //@TODO: add the validation for password //
})
