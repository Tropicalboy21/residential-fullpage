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
const sectionTitle2 = document.querySelector('.sectionTitle2');
const sectionText2 = document.querySelector('.sectionText2');
const sectionButton2 = document.querySelector('.sectionButton2');
const sectionTitle3 = document.querySelector('.sectionTitle3');
const sectionText3 = document.querySelector('.sectionText3');
const sectionButton3 = document.querySelector('.sectionButton3');
const sectionTitle4 = document.querySelector('.sectionTitle4');
const sectionText4 = document.querySelector('.sectionText4');
const sectionButton4 = document.querySelector('.sectionButton4');
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
        sectionTitle2.textContent = changeLanguage[attr].sectionTitle2;
        sectionText2.textContent = changeLanguage[attr].sectionText2;
        sectionButton2.textContent = changeLanguage[attr].sectionButton2;
        sectionTitle3.textContent = changeLanguage[attr].sectionTitle3;
        sectionText3.textContent = changeLanguage[attr].sectionText3;
        sectionButton3.textContent = changeLanguage[attr].sectionButton3;
        sectionTitle4.textContent = changeLanguage[attr].sectionTitle4;
        sectionText4.textContent = changeLanguage[attr].sectionText4;
        sectionButton4.textContent = changeLanguage[attr].sectionButton4;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;
        footerButton.textContent = changeLanguage[attr].footerButton;
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
        "sectionTitle2": "Diseño unificado",
        "sectionText2": "lujosos espacios de estar y generosas áreas comunes en un elegante estilo italiano.",
        "sectionButton2": "Apartamentos",
        "sectionTitle3": "Bienestar y Comodidad",
        "sectionText3": "Los residentes disfrutan de una piscina cubierta y un spa ambos con los interiores más asombrosos de la ciudad.",
        "sectionButton3": "Amenidades",
        "sectionTitle4": "Únete a nosotros",
        "sectionText4": "Cotiza el financiamiento de tu apartamentos en el edificio residencial más sofisticado de Taiwan.",
        "sectionButton4": "Financiamiento",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
        "footerButton": "Contacto",
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "title": "Treasure Garden",
        "menuHome": "Home",
        "menuSectionOne": "Project",
        "menuSectionTwo": "Apartments",
        "menuSectionThree": "Amenities",
        "menuSectionFour": "Gallery",
        "menuSectionFive": "Financing",
        "menuSectionSix": "Contact",
        "sectionTitle": "Refined and Iconic",
        "sectionText": "The façade reflects a dynamic spectrum of color and light as the sun moves across the building's surface.",
        "sectionButton": "Project",
        "sectionTitle2": "Unified Design",
        "sectionText2": "Luxurious living spaces and generous common areas in an elegant Italian style.",
        "sectionButton2": "Apartments",
        "sectionTitle3": "Well-being and Comfort",
        "sectionText3": "Residents enjoy an indoor pool and spa both with the most amazing interiors in the city.",
        "sectionButton3": "Amenities",
        "sectionTitle4": "Join us",
        "sectionText4": "Quote the financing of your apartments in the most sophisticated residential building in Taiwan.",
        "sectionButton4": "Financing",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
        "footerButton": "Contact",
    }
};