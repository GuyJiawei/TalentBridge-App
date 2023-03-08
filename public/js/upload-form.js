const uploadFormHandler = async (event) => {
    event.preventDefault();
    const files = document.getElementById("file").files;
    const formData = new FormData();
    formData.append("file", files[0]);
    fetch("/upload", {  
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((result) => {
        console.log("Success:", result);
        })
        .catch((error) => {
        console.error("Error:", error);
    
        });
    };

document
    .querySelector('#upload-form')
    .addEventListener('submit-btn', uploadFormHandler);