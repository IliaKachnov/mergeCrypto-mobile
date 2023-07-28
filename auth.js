const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const signinSwapBtn = document.getElementById('signin__swap');
const signupSwapBtn = document.querySelector('#signup__swap');

signinSwapBtn.addEventListener('click', () => {
  signup.classList.add('hide');
  signin.classList.remove('hide');
});

signupSwapBtn.addEventListener('click', () => {
  signin.classList.add('hide');
  signup.classList.remove('hide');
});