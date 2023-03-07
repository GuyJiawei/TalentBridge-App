
// function toggle_active(event){
//     console.log(event);
//     var elements= document.getElementsByTagName('a');
//     for(var i=0; i<=elements.length; i++) {
//         if (!(elements[i].getElementByClassName("active"))){
//             elements[i].classList.remove("active");
//         }
//         else{
//             elements[i].replaceClass(" ", "active");
//         }
//     }}


const a = document.getElementsByTagName('a')
a.addEventListener("click",color,false);

function color(event){
for (let i = 0; i < a.length; i++) {
    a[i].classList.remove(
        'active');
    console.log(a[i].innerText);
    if (a[i].innerText.trim() == 'Sign up')
        a[i].classList.add('active')
        event.preventDefault();
}
}
