// // Get the container element
// var btnContainer = document.getElementById("nav-links");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btnN");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].remove('active');
//         // this.className += " active";
//     });
// }

function toggle_active(){
    console.log('Hello');
    var elements= document.getElementsByTagName('a');
    for(var i=0; i<=elements.length; i++) {
        if (!(elements[i].getElementByClassName("active"))){
            elements[i].replaceClass("active"," ");
        }
        else{
            elements[i].replaceClass(" ", "active");
        }
    }

}
