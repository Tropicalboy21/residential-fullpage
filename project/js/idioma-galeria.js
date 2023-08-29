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
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2")
const bottomTitle = document.querySelector('.bottomTitle');
const bottomText = document.querySelector('.bottomText');
const footerButton = document.querySelector('.footerButton');

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
        tab1.textContent = changeLanguage[attr].tab1;
        tab2.textContent = changeLanguage[attr].tab2;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;
        footerButton.textContent = changeLanguage[attr].footerButton;
    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "español": {
        "title": "Bienestar y comodidad",
        "menuHomep": "Inicio",
        "menuSectionOnep": "Proyecto",
        "menuSectionTwop": "Apartamentos",
        "menuSectionThreep": "Amenidades",
        "menuSectionFourp": "Galeria",
        "menuSectionFivep": "Financiamiento",
        "menuSectionSixp": "Contacto",
        "tab1": "Fotos",
        "tab2": "Planos",
        "blueprints": "Fotos",
        "galeryButton": "Ver Galería",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
        "footerButton": "Contacto",
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "title": "Well-being and comfort",
        "subtitle": "Details",
        "menuHomep": "Home",
        "menuSectionOnep": "Project",
        "menuSectionTwop": "Apartments",
        "menuSectionThreep": "Amenities",
        "menuSectionFourp": "Gallery",
        "menuSectionFivep": "Financing",
        "menuSectionSixp": "Contact",
        "paragraph": "The fitness and wellness program at Treasure Garden Club has been developed in collaboration with renowned fitness experts and operators. Residents enjoy a double-height windowed sports court, an indoor pool and spa, a state-of-the-art fitness center designed for personal training, and a beauty salon. It accommodates private swim lessons, trainers, personal training services, and restorative treatments.",
        "tab1": "Photos",
        "tab2": "Blueprints",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
        "footerButton": "Contact",
    }
};