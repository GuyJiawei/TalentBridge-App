

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
