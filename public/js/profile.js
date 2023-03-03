const profileFormHandler = async (event) => {
    event.preventDefault();
  
   const firstName = document.querySelector('#firstName').value.trim();
   const lastName = document.querySelector('#lastName').value.trim();
   const email = document.querySelector('#email').value.trim();
   const dropdown = document.querySelector('#dropdown').value.trim();

   if (firstName && lastName && email && dropdown) {
     const response = await fetch('api/users/profile', {
       method: 'POST',
       body: JSON.stringify({ firstName, lastName, email, dropdown }),
       headers: { 'Content-Type': 'application/json' }
     });
  
     if (response.ok) {
       document.location.replace('/profile');
     } else {
       alert(response.statusText);
     }
   }}

   document.querySelector('.profile-form').addEventListener('submit', profileFormHandler);

