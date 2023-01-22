document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll(' nav .a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('b');
        link.classList.remove('a');
    }
})

document.getElementById("btn-contacto").onclick = function() {
    location.href = "/contacto.html"
}