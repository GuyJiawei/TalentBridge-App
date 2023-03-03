const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log(response);
      if (response.ok) {
        console.log('logged in');
        document.location.replace('/profile');
      } else {
        alert('Invalid Login Details');
      }
    }
  };
  

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    if (event) {
      const response = await fetch('/signup', {
        method: 'GET',
      });
  
      if (response.ok) {
        document.location.replace('/signup');
      } else {
        console.error(err);
        alert(response.statusText);
      }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('#sign-up-btn')
//   .addEventListener('click', signupBtnHandler);