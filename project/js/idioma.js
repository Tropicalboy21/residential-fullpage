//declaracion de clases usando constantes
// llamar a cada clase que tienen los textos a convertir)
const langEl = document.querySelector('.lang-selector');
const link = document.querySelectorAll('a');
const title = document.querySelector('.title');
const menuHome = document.querySelector('.menuHome');
const menuSectionOne = document.querySelector('.menuSectionOne');
const menuSectionTwo = document.querySelector('.menuSectionTwo');
const menuSectionThree = document.querySelector('.menuSectionThree');
const menuSectionFour = document.querySelector('.menuSectionFour');
const menuSectionFive = document.querySelector('.menuSectionFive');
const menuSectionSix = document.querySelector('.menuSectionSix');
const sectionTitle = document.querySelector('.sectionTitle');
const sectionText = document.querySelector('.sectionText');
const sectionButton = document.querySelector('.sectionButton');
const additional = document.querySelector('.additional');
const contact = document.querySelector('.contact');
const description = document.querySelector('.description');
const clickHere = document.querySelector('.clickHere');
const descriptionTwo = document.querySelector('.descriptionTwo');
const clickHereTwo = document.querySelector('.clickHereTwo');
const languageBase = document.querySelector('.languageBase');
const languageHtml = document.querySelector('.languageHtml');
const clickHereThree = document.querySelector('.clickHereThree');
const languageCss = document.querySelector('.languageCss');
const clickHereFour = document.querySelector('.clickHereFour');
const languageJs = document.querySelector('.languageJs');
const clickHereFive = document.querySelector('.clickHereFive');
const rights = document.querySelector('.rights');

//recorrido del ciclo for-Each usando una función flecha
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language de cada boton
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        title.textContent = changeLanguage[attr].title;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuSectionOne.textContent = changeLanguage[attr].menuSectionOne;
        menuSectionTwo.textContent = changeLanguage[attr].menuSectionTwo;
        menuSectionThree.textContent = changeLanguage[attr].menuSectionThree;
        menuSectionFour.textContent = changeLanguage[attr].menuSectionFour;
        menuSectionFive.textContent = changeLanguage[attr].menuSectionFive;
        menuSectionSix.textContent = changeLanguage[attr].menuSectionSix;
        sectionTitle.textContent = changeLanguage[attr].sectionTitle;
        sectionText.textContent = changeLanguage[attr].sectionText;
        sectionButton.textContent = changeLanguage[attr].sectionButton;
        additional.textContent = changeLanguage[attr].additional;
        contact.textContent = changeLanguage[attr].contact;
        description.textContent = changeLanguage[attr].description;
        clickHere.textContent = changeLanguage[attr].clickHere;
        descriptionTwo.textContent = changeLanguage[attr].descriptionTwo;
        clickHereTwo.textContent = changeLanguage[attr].clickHereTwo;
        languageBase.textContent = changeLanguage[attr].languageBase;
        languageHtml.textContent = changeLanguage[attr].languageHtml;
        clickHereThree.textContent = changeLanguage[attr].clickHereThree;
        languageCss.textContent = changeLanguage[attr].languageCss;
        clickHereFour.textContent = changeLanguage[attr].clickHereFour;
        languageJs.textContent = changeLanguage[attr].languageJs;
        clickHereFive.textContent = changeLanguage[attr].clickHereFive;
        rights.textContent = changeLanguage[attr].rights;
    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "español": {
        "title": "Jardín del tesoro",
        "menuHome": "Inicio",
        "menuSectionOne": "Proyecto",
        "menuSectionTwo": "Apartamentos",
        "menuSectionThree": "Amenidades",
        "menuSectionFour": "Galeria",
        "menuSectionFive": "Financiamiento",
        "menuSectionSix": "Contacto",
        "sectionTitle": "Refinada e icónica",
        "sectionText": "la fachada refleja un espectro dinámico de color y luz a medida que el sol se mueve por la superficie del edificio.",
        "sectionButton": "Proyecto",
        "additional": "Extras",
        "contact": "Contacto",
        "description": "Es un marco de desarrollo que permite crear sitios web responsivos compatibles con dispositivos moviles.",
        "clickHere": "Click aquí",
        "descriptionTwo": "Desarrollo de sitios web responsivos compatibles con dispositivos moviles Smartphone y Tablet.",
        "clickHereTwo": "Click aquí",
        "languageBase": "Lenguajes Base?",
        "languageHtml": "Lenguaje HTML5",
        "clickHereThree": "Click aquí",
        "languageCss": "Lenguaje CSS",
        "clickHereFour": "Click aquí",
        "languageJs": "Lenguaje JAVA SCRIPT",
        "clickHereFive": "Click aquí",
        "rights": "Derechos Reservados"
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "title": "Treasure Garden",
        "menuHome": "Home",
        "menuSectionOne": "Project",
        "menuSectionTwo": "Apartments",
        "menuSectionThree": "Amenities",
        "menuSectionFour": "Gallery",
        "menuSectionFive": "financing",
        "menuSectionSix": "Contact",
        "sectionTitle": "Refined and Iconic",
        "sectionText": "The façade reflects a dynamic spectrum of color and light as the sun moves across the building's surface.",
        "additional": "Additional features",
        "sectionButton": "Project",
        "contact": "Contact",
        "description": "It is a development framework that allows you to create responsive websites that are compatible with mobile devices.",
        "clickHere": "Click here",
        "descriptionTwo": "Responsive website development Compatible with Smartphone and Tablet mobile devices.",
        "clickHereTwo": "Click here",
        "languageBase": "Base languages?",
        "languageHtml": "language HTML5",
        "clickHereThree": "Click here",
        "languageCss": "language CSS",
        "clickHereFour": "Click here",
        "languageJs": "language JAVA SCRIPT",
        "clickHereFive": "Click here",
        "rights": "All rights reserved"
    }
}