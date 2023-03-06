

function toggle_active(event){
    console.log(event);
    var elements= document.getElementsByTagName('a');
    for(var i=0; i<=elements.length; i++) {
        if (!(elements[i].getElementByClassName("active"))){
            elements[i].classList.remove("active");
        }
        else{
            elements[i].replaceClass(" ", "active");
        }
    }

}
