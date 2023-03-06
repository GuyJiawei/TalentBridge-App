
const viewMore = async (e) => {
     e.preventDefault();
    const id= e.target.getAttribute("data-jobsid")  
    

   
     const response =  fetch(`/api/user/:${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
      })
  
     if (response.ok) {
       document.location.replace('/ads');
     } else {
       alert(response.statusText);
     }
   }

   document.querySelector('#view').addEventListener('click', viewMore)