// Navigation bar
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
const navLinks = document.querySelectorAll(' nav .a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('b');
        link.classList.remove('a');
    }
})

// **** Section 1 ****
// Carga la funcion automaticamente
document.getElementById("beneficio").onchange = function(e) {
    a = e.target.value;
    // Cada condicional guarda el tipo de carro.
    if (a == "Ubicación") {
        var imagen = "imgs/torre14.jpg";
        var txtBene = "El concepto es muy simple: The Treasure Garden está ubicado en el corazón urbano de la ciudad de Taichung, delimitado por dos de las arterias más importantes de la ciudad. A diferencia de otros lugares de su tipo, Jardín del Tesoro se encuentra dentro de la ciudad, con toda la seguridad, cercanía y comodidad que esto representa.";
    } else if (a == "Arquitectura") {
        var imagen = "imgs/torre11.jpg"
        var txtBene = "El edificio de la torre residencial esbelto y geométricamente intrincado es un nuevo hito del distrito 7 en Taichung. Gracias a la orientación única de su arquitectura, el edificio da al Summer Green Park, abriendo los elegantes interiores de las residencias a vistas panorámicas de la ciudad. Compuesto por una serie de aspas delgadas y livianas, se eleva hacia el cielo, consolidando en su diseño áreas residenciales, espacios públicos, terrazas y paisaje.";
    } else if (a == "Seguridad") {
        var imagen = "imgs/torre6.jpg"
        var txtBene = "La seguridad en edificios es un tema cada vez más imprescindible. Hoy en día, los robos a departamentos son una tendencia creciente que preocupa a todos los habitantes de edificios. Aunque en general se realizan cuando las unidades están vacías, también se producen cuando sus habitantes están en los departamentos. Por lo tanto, sentirse seguro y confiado en su propia casa o departamento es esencial para tener una buena calidad de vida.";
    } else if (a == "Extravagancia") {
        var imagen = "imgs/torre5.jpg"
        var txtBene = "Conozca la extravagancia de detalles y lujo del proyecto residencial. La torre residencial, de poco menos de 160 metros de altura, tiene su lado más largo en el eje norte-sur, siguiendo la forma del sitio. gracias a la orientación única, el edificio da al parque adyacente, abriendo los elegantes interiores a vistas panorámicas de la ciudad";
    }
    // Hace conexion con el id de la imagen del carro 
    document.getElementById('imagen').src = imagen;
    document.getElementById('bene-text').innerHTML = txtBene;
}

// **** Section 2 ****
// validar
window.onload = function() {
    document.getElementById("experiencia").onchange = function(e) {
        a = e.target.value;
        // Hace conexion con el id de la version del carro
        document.getElementById("ubicacion").onchange = function(es) {
            n = es.target.value;
            // Hace conexion con el id de la imagen del carro 
            document.getElementById('imagen').src = imagen;
        }
    }
}

function validar() {
    if (document.getElementById("experiencia").value == "Seleccionar años de experiencia") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Seleccione los Años de experiencia</p>'
        })
    } else {
        if (document.getElementById("ubicacion").value == "Seleccionar ciudad de la licencia") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="formatos1"> Seleccione la Ciudad <p>'
            })
        } else {
            if (a == "6 meses" || a == "1 año" || a == "2 años") {
                if (n == "Miaoli" || n == "Changhua" || n == "Nantou" || n == "Yunlin") {
                    swal.fire({
                        imageUrl: "",
                        html: '<div><lottie-player src="https://assets7.lottiefiles.com/packages/lf20_iux6ajkg.json"  background="transparent"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player></div><p>Buscamos un perfil con más experiencia pero esperamos en un futuro poder contar con tus servicios.</p>',
                        imageWidth: 500,
                        imageHeight: 280,
                        imageAlt: "Reject",
                    })
                }
            } else if (a == "3 años") {
                if (n == "Taichung") {
                    swal.fire({
                        imageUrl: "",
                        html: '<div><lottie-player src="https://assets1.lottiefiles.com/packages/lf20_kuiykf08.json"  background="transparent"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player></div><p>Estamos interesados en trabajar contigo porfavor llenar el formulario de contacto y nos pondremos en contacto con los siguientes pasos.</p> ',
                        imageWidth: 500,
                        imageHeight: 200,
                        imageAlt: "Accepted",
                    }).then(() => {
                        location.href = "contacto.html"
                    });
                }
            }
        }
    }
}

// **** Section 3 ****
// inputs
const inNombre = document.getElementById("in-nombre");
const inApellido = document.getElementById("in-apellido");
const inSalario = document.getElementById("in-salario");
const inAccion = document.getElementById("in-accion");
const inClubYes = document.getElementById("radioExample1");
const inClubNo = document.getElementById("radioExample2");
const inChefYes = document.getElementById("radioExample3");
const inChefNo = document.getElementById("radioExample4");
const inLimpiYes = document.getElementById("radioExample5");
const inLimpiNo = document.getElementById("radioExample6");
const inPiso = document.getElementById("piso");
const inApart = document.getElementById("apartamento");
const inCuarto = document.getElementById("cuartos");

// buttons
const buttonIniciar = document.getElementById("btn-iniciar")
const buttonContinuar = document.getElementById("btn-continuar");
const buttonContinuar2 = document.getElementById("btn-continuar2");
const buttonContinuar3 = document.getElementById("btn-continuar3");
const buttonCancelar = document.getElementById("btn-cancelar");
const buttonCancelar2 = document.getElementById("btn-cancelar2");
const buttonCancelar3 = document.getElementById("btn-cancelar3");

const iniciar = () => {
    document.getElementById("animacion").style.display = "block"
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";

}

const continuar = () => {
    let error = false
    const d = new Date();
    let nombre = inNombre.value;
    let apellido = inApellido.value;
    let salario = inSalario.value;
    let accion = inAccion.value;

    if (nombre == '') {
        error = true;
        inNombre.classList.add("input-error");
    } else {
        inNombre.classList.remove("input-error");
    }
    if (apellido == '') {
        error = true;
        inApellido.classList.add("input-error");
    } else {
        inApellido.classList.remove("input-error");
    }
    if (salario == '') {
        error = true;
        inSalario.classList.add("input-error");
    } else {
        inSalario.classList.remove("input-error");
    }
    if (accion == 'Seleccione una accion:') {
        error = true;
        inAccion.classList.add("input-error");
    } else {
        inAccion.classList.remove("input-error");
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Datos incompletos'
        })
    } else {
        if (accion == 'Comprar') {
            document.getElementById('prima').innerHTML = '+ $60.000';
            document.getElementById('deposito').innerHTML = 'N/A';
        } else {
            document.getElementById('prima').innerHTML = 'N/A';
            document.getElementById('deposito').innerHTML = '+ $600';
        }

        document.getElementById('impuestos').innerHTML = '+ $1200';
        document.getElementById('precio').innerHTML = '$1.100.000';
        document.getElementById('nombre').innerHTML = nombre;
        document.getElementById('apellido').innerHTML = apellido;
        document.getElementById('fecha').innerHTML = d;
        document.getElementById('salario').innerHTML = "$" + salario;

        document.getElementById("page-1").style.display = "none";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "block";
        document.getElementById("page-4").style.display = "none";
        document.getElementById("animacion").style.display = "block"
        document.getElementById("resultado").style.display = "none"

    }

}

const continuarII = () => {
    let error = false
    let clubYes = inClubYes.value;
    let ClubNo = inClubNo.value;


    if (inClubYes.checked || inClubNo.checked) {
        inClubYes.classList.remove("input-error");
        inClubNo.classList.remove("input-error");
    } else {
        error = true;
        inClubYes.classList.add("input-error");
        inClubNo.classList.add("input-error");
    }
    if (inChefYes.checked || inChefNo.checked) {
        inChefYes.classList.remove("input-error");
        inChefNo.classList.remove("input-error");
    } else {
        error = true;
        inChefYes.classList.add("input-error");
        inChefNo.classList.add("input-error");
    }
    if (inLimpiYes.checked || inLimpiNo.checked) {
        inLimpiYes.classList.remove("input-error");
        inLimpiNo.classList.remove("input-error");
    } else {
        error = true;
        inLimpiYes.classList.add("input-error");
        inLimpiNo.classList.add("input-error");
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Datos incompletos'
        })
    } else {
        if (inClubYes.checked) {
            document.getElementById('club').innerHTML = "+ $330";
        } else {
            document.getElementById('club').innerHTML = "N/A";
        }
        if (inChefYes.checked) {
            document.getElementById('chef').innerHTML = "+ $330";
        } else {
            document.getElementById('chef').innerHTML = "N/A";
        }
        if (inLimpiYes.checked) {
            document.getElementById('servicio').innerHTML = "+ $330";
        } else {
            document.getElementById('servicio').innerHTML = "N/A";
        }

        document.getElementById("page-1").style.display = "none";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "none";
        document.getElementById("page-4").style.display = "block";
        document.getElementById("animacion").style.display = "block"
        document.getElementById("resultado").style.display = "none"

    }

}

const continuarIII = () => {
    let error = false
    let piso = inPiso.value;
    let apart = inApart.value;
    let cuartos = inCuarto.value;

    if (piso == 'pisos disponibles:') {
        error = true;
        inPiso.classList.add('input-error');
    } else {
        inPiso.classList.remove('input-error');
    }
    if (apart == 'Seleccione una opcion:') {
        error = true;
        inApart.classList.add('input-error');
    } else {
        inApart.classList.remove('input-error');
    }
    if (cuartos == 'Seleccione una opcion:') {
        error = true;
        inCuarto.classList.add('input-error');
    } else {
        inCuarto.classList.remove('input-error');
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Datos incompletos'
        })
    } else {
        document.getElementById('piso-txt').innerHTML = piso
        document.getElementById('apartamento-txt').innerHTML = apart
        document.getElementById('cuartos-txt').innerHTML = cuartos

        document.getElementById("page-1").style.display = "none";
        document.getElementById("page-2").style.display = "none";
        document.getElementById("page-3").style.display = "none";
        document.getElementById("page-4").style.display = "block";
        document.getElementById("animacion").style.display = "none"
        document.getElementById("resultado").style.display = "block"
        document.getElementById("resultado").style.display = "block"
    }
}

const cancelar = () => {
    location.reload();
    document.getElementById("page-1").style.display = "block";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("animacion").style.display = "none"
    document.getElementById("resultado").style.display = "none"

    document.getElementById('nombre').innerHTML = "XXX";
    document.getElementById('fecha').innerHTML = "XXX";
    document.getElementById('salario').innerHTML = "$0.00";
    document.getElementById('articulo').innerHTML = "XXX";
    document.getElementById('cantidad').innerHTML = 0;
    document.getElementById('subtotal').innerHTML = "₡0.00";
    document.getElementById('iva').innerHTML = "₡0.00";
    document.getElementById('servicio').innerHTML = "₡0.00";
    document.getElementById('total').innerHTML = "Total: ₡0.00"
}

const cancelarII = () => {
    location.reload();
    document.getElementById("page-1").style.display = "block";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("animacion").style.display = "block"
    document.getElementById("resultado").style.display = "none"

    document.getElementById('nombre').innerHTML = "XXX";
    document.getElementById('Apellido').innerHTML = "XXX";
    document.getElementById('fecha').innerHTML = "dd/mmm/yyyy";
    document.getElementById('salario').innerHTML = "S0.00";
    document.getElementById('cantidad').innerHTML = 0;
    document.getElementById('subtotal').innerHTML = "₡0.00";
    document.getElementById('iva').innerHTML = "₡0.00";
    document.getElementById('servicio').innerHTML = "₡0.00";
    document.getElementById('total').innerHTML = "Total: ₡0.00"
}

const cancelarIII = () => {
    location.reload();
    document.getElementById("page-1").style.display = "block";
    document.getElementById("page-2").style.display = "none";
    document.getElementById("animacion").style.display = "block"
    document.getElementById("resultado").style.display = "none"

    document.getElementById('nombre').innerHTML = "XXX";
    document.getElementById('fecha').innerHTML = "XXX";
    document.getElementById('nombre').innerHTML = "XXX";
    document.getElementById('articulo').innerHTML = "XXX";
    document.getElementById('cantidad').innerHTML = 0;
    document.getElementById('subtotal').innerHTML = "₡0.00";
    document.getElementById('iva').innerHTML = "₡0.00";
    document.getElementById('servicio').innerHTML = "₡0.00";
    document.getElementById('total').innerHTML = "Total: ₡0.00"
}

// inicio
buttonIniciar.addEventListener('click', iniciar);

// continuar page 1
buttonContinuar.addEventListener('click', continuar);
// continuar page 2
buttonContinuar2.addEventListener('click', continuarII);
// continuar page 3
buttonContinuar3.addEventListener('click', continuarIII);



// cancelar
buttonCancelar.addEventListener('click', cancelar);
// cancelar 2
buttonCancelar2.addEventListener('click', cancelarII);
// cancelar 3
buttonCancelar3.addEventListener('click', cancelarIII);

// **** Encuesta ****
const input1 = document.getElementById('radioExample7');
const input2 = document.getElementById('radioExample8');
const input3 = document.getElementById('radioExample9');
const input4 = document.getElementById('radioExample10');
const input5 = document.getElementById('radioExample11');
const input6 = document.getElementById('radioExample12');
const input7 = document.getElementById('radioExample13');
const input8 = document.getElementById('radioExample14');
const input9 = document.getElementById('radioExample15');
const btnPop = document.getElementById('btn-pop');


const popUp1 = () => {
    let error = false;

    if (input1.checked || input2.checked || input3.checked) {
        input1.classList.remove("input-error");
        input2.classList.remove("input-error");
        input3.classList.remove("input-error");
        error = false;
    } else {
        error = true;
        input1.classList.add("input-error");
        input2.classList.add("input-error");
        input3.classList.add("input-error");
    }
    if (input4.checked || input5.checked || input6.checked) {
        input4.classList.remove("input-error");
        input5.classList.remove("input-error");
        input6.classList.remove("input-error");
        let error = false;
    } else {
        error = true;
        input4.classList.add("input-error");
        input5.classList.add("input-error");
        input6.classList.add("input-error");
    }
    if (input7.checked || input8.checked || input9.checked) {
        input7.classList.remove("input-error");
        input8.classList.remove("input-error");
        input9.classList.remove("input-error");
        let error = false;
    } else {
        error = true;
        input7.classList.add("input-error");
        input8.classList.add("input-error");
        input9.classList.add("input-error");
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Datos incompletos'
        })
    } else {

        Swal.fire({
            'icon': 'sucess',
            'title': 'Gracias por Calificarnos',
            'text': 'Su opinión es importante!',
            'confirmButtonText': 'ok'
        }).then(() => {
            location.href = "home.html"
        });
    };
}

btnPop.addEventListener('click', popUp1);


// **** Footer ****
document.getElementById("btn-contacto").onclick = function() {
    location.href = "/contacto.html"
};