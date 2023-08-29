// declaracion de clases usando constantes
// llamar a cada clase que tienen los textos a convertir
const langEl = document.querySelector('.lang-selector');
const link = document.querySelectorAll('a');
const menuHomep = document.querySelector('.menuHomep');
const menuSectionOnep = document.querySelector('.menuSectionOnep');
const menuSectionTwop = document.querySelector('.menuSectionTwop');
const menuSectionThreep = document.querySelector('.menuSectionThreep');
const menuSectionFourp = document.querySelector('.menuSectionFourp');
const menuSectionFivep = document.querySelector('.menuSectionFivep');
const menuSectionSixp = document.querySelector('.menuSectionSixp');
const paragraph = document.querySelector('.paragraph');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const ciudad = document.getElementById('ciudad');
const estado = document.getElementById('estado');
const agente = document.getElementById('agente');
const comentario = document.getElementById('comentario');
const bottomTitle = document.querySelector('.bottomTitle');
const bottomText = document.querySelector('.bottomText');
const SendButton = document.querySelector('.sendButton')

contactSpanish = () => {
    nombre.setAttribute("placeholder", "Nombre");
    correo.setAttribute("placeholder", "Correo Electrónico");
    telefono.setAttribute("placeholder", "Numero de Telefóno");
    ciudad.setAttribute("placeholder", "Ciudad");
    estado.setAttribute("placeholder", "Estado/Provincia");
    agente.setAttribute("placeholder", "¿Eres un Agente de Bienes Raices? (opcional)");
    comentario.setAttribute("placeholder", "Comentarios (opcional)");
}

contactEnglish = () => {
    nombre.setAttribute("placeholder", "Name");
    correo.setAttribute("placeholder", "Email");
    telefono.setAttribute("placeholder", "Phone number");
    ciudad.setAttribute("placeholder", "City");
    estado.setAttribute("placeholder", "State/County");
    agente.setAttribute("placeholder", "Are you a Real Estate Agent? (optional)");
    comentario.setAttribute("placeholder", "Comments (optional)");
}

//recorrido del ciclo for-Each usando una función flecha
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language de cada boton
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        menuHomep.textContent = changeLanguage[attr].menuHomep;
        menuSectionOnep.textContent = changeLanguage[attr].menuSectionOnep;
        menuSectionTwop.textContent = changeLanguage[attr].menuSectionTwop;
        menuSectionThreep.textContent = changeLanguage[attr].menuSectionThreep;
        menuSectionFourp.textContent = changeLanguage[attr].menuSectionFourp;
        menuSectionFivep.textContent = changeLanguage[attr].menuSectionFivep;
        menuSectionSixp.textContent = changeLanguage[attr].menuSectionSixp;
        paragraph.textContent = changeLanguage[attr].paragraph;
        SendButton.textContent = changeLanguage[attr].SendButton;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;

    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "español": {
        "menuHomep": "Inicio",
        "menuSectionOnep": "Proyecto",
        "menuSectionTwop": "Apartamentos",
        "menuSectionThreep": "Amenidades",
        "menuSectionFourp": "Galeria",
        "menuSectionFivep": "Financiamiento",
        "menuSectionSixp": "Contacto",
        "paragraph": "Nuestro equipo de ventas espera programar su recorrido privado en el lugar.",
        "SendButton": "Enviar",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "menuHomep": "Home",
        "menuSectionOnep": "Project",
        "menuSectionTwop": "Apartments",
        "menuSectionThreep": "Amenities",
        "menuSectionFourp": "Gallery",
        "menuSectionFivep": "Financing",
        "menuSectionSixp": "Contact",
        "paragraph": "Our sales team looks forward to scheduling your private on-site tour.",
        "SendButton": "Send",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
    }
};