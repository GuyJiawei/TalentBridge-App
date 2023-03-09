const x = window.location.pathname.replace("/", "");
const a = document.getElementsByTagName('a')
for (let i = 0; i < a.length; i++) {
    a[i].classList.remove(
        'active');
    if (x == "" && (a[i].innerText.trim().replace(/\s/g, "").toLowerCase() == 'home')) {
        a[i].classList.add('active')
    }
    else if (a[i].innerText.trim().replace(/\s/g, "").toLowerCase() == x)
        a[i].classList.add('active')
};
