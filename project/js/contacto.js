const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputCiudad = document.getElementById("ciudad");
const inputEstado = document.getElementById("estado")
const button = document.getElementById("enviar");

const validar = () => {
    let nombre = inputNombre.value
    let correo = inputCorreo.value
    let telefono = inputTelefono.value
    let ciudad = inputCiudad.value
    let estado = inputEstado.value

    if (nombre == "" || correo == "" || telefono == "" || ciudad == "" || estado == "") {
        inputNombre.classList.add('input-error');
        inputCorreo.classList.add('input-error');
        inputTelefono.classList.add('input-error')
        inputCiudad.classList.add('input-error');
        inputEstado.classList.add('input-error')

        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Datos invalidos'
        });
    } else {
        Swal.fire({
            'title': 'Mensaje enviado con exito',
            'text': 'Gracias',
            'icon': 'success',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            location.href = "./home.html"
        });
    }
}

button.addEventListener('click', validar);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
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
