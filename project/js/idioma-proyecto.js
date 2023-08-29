//declaracion de clases usando constantes
// llamar a cada clase que tienen los textos a convertir)
const langEl = document.querySelector('.lang-selector');
const link = document.querySelectorAll('a');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const menuHomep = document.querySelector('.menuHomep');
const menuSectionOnep = document.querySelector('.menuSectionOnep');
const menuSectionTwop = document.querySelector('.menuSectionTwop');
const menuSectionThreep = document.querySelector('.menuSectionThreep');
const menuSectionFourp = document.querySelector('.menuSectionFourp');
const menuSectionFivep = document.querySelector('.menuSectionFivep');
const menuSectionSixp = document.querySelector('.menuSectionSixp');
const paragraph = document.querySelector(".paragraph");
const tOne = document.querySelector(".t-1");
const sOne = document.querySelector(".s-1");
const tTwo = document.querySelector(".t-2");
const sTwo = document.querySelector(".s-2");
const tThree = document.querySelector(".t-3");
const tFour = document.querySelector(".t-4");
const tFive = document.querySelector(".t-5");
const tSix = document.querySelector(".t-6");
const companies = document.querySelector(".companies");
const blueprints = document.querySelector(".blueprints");
const galeryButton = document.querySelector(".galeryButton");
const bottomTitle = document.querySelector('.bottomTitle');
const bottomText = document.querySelector('.bottomText');
const footerButton = document.querySelector('.footerButton');
// const sectionTitle = document.querySelector('.sectionTitle');
// const sectionText = document.querySelector('.sectionText');
// const sectionButton = document.querySelector('.sectionButton');
// const sectionTitle2 = document.querySelector('.sectionTitle2');
// const sectionText2 = document.querySelector('.sectionText2');
// const sectionButton2 = document.querySelector('.sectionButton2');
// const sectionTitle3 = document.querySelector('.sectionTitle3');
// const sectionText3 = document.querySelector('.sectionText3');
// const sectionButton3 = document.querySelector('.sectionButton3');
// const sectionTitle4 = document.querySelector('.sectionTitle4');
// const sectionText4 = document.querySelector('.sectionText4');
// const sectionButton4 = document.querySelector('.sectionButton4');






// const additional = document.querySelector('.additional');
// const contact = document.querySelector('.contact');
// const description = document.querySelector('.description');
// const clickHere = document.querySelector('.clickHere');
// const descriptionTwo = document.querySelector('.descriptionTwo');
// const clickHereTwo = document.querySelector('.clickHereTwo');
// const languageBase = document.querySelector('.languageBase');
// const languageHtml = document.querySelector('.languageHtml');
// const clickHereThree = document.querySelector('.clickHereThree');
// const languageCss = document.querySelector('.languageCss');
// const clickHereFour = document.querySelector('.clickHereFour');
// const languageJs = document.querySelector('.languageJs');
// const clickHereFive = document.querySelector('.clickHereFive');
// const rights = document.querySelector('.rights');

//recorrido del ciclo for-Each usando una función flecha
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language de cada boton
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        title.textContent = changeLanguage[attr].title;
        subtitle.textContent = changeLanguage[attr].subtitle;
        menuHomep.textContent = changeLanguage[attr].menuHomep;
        menuSectionOnep.textContent = changeLanguage[attr].menuSectionOnep;
        menuSectionTwop.textContent = changeLanguage[attr].menuSectionTwop;
        menuSectionThreep.textContent = changeLanguage[attr].menuSectionThreep;
        menuSectionFourp.textContent = changeLanguage[attr].menuSectionFourp;
        menuSectionFivep.textContent = changeLanguage[attr].menuSectionFivep;
        menuSectionSixp.textContent = changeLanguage[attr].menuSectionSixp;
        paragraph.textContent = changeLanguage[attr].paragraph;
        tOne.textContent = changeLanguage[attr].tOne;
        sOne.textContent = changeLanguage[attr].sOne;
        tTwo.textContent = changeLanguage[attr].tTwo;
        sTwo.textContent = changeLanguage[attr].sTwo;
        tThree.textContent = changeLanguage[attr].tThree;
        tFour.textContent = changeLanguage[attr].tFour;
        tFive.textContent = changeLanguage[attr].tFive;
        tSix.textContent = changeLanguage[attr].tSix;
        companies.textContent = changeLanguage[attr].companies;
        blueprints.textContent = changeLanguage[attr].blueprints;
        galeryButton.textContent = changeLanguage[attr].galeryButton;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;
        footerButton.textContent = changeLanguage[attr].footerButton;
        // sectionTitle.textContent = changeLanguage[attr].sectionTitle;
        // sectionText.textContent = changeLanguage[attr].sectionText;
        // sectionButton.textContent = changeLanguage[attr].sectionButton;
        // sectionTitle2.textContent = changeLanguage[attr].sectionTitle2;
        // sectionText2.textContent = changeLanguage[attr].sectionText2;
        // sectionButton2.textContent = changeLanguage[attr].sectionButton2;
        // sectionTitle3.textContent = changeLanguage[attr].sectionTitle3;
        // sectionText3.textContent = changeLanguage[attr].sectionText3;
        // sectionButton3.textContent = changeLanguage[attr].sectionButton3;
        // sectionTitle4.textContent = changeLanguage[attr].sectionTitle4;
        // sectionText4.textContent = changeLanguage[attr].sectionText4;
        // sectionButton4.textContent = changeLanguage[attr].sectionButton4;




        // additional.textContent = changeLanguage[attr].additional;
        // contact.textContent = changeLanguage[attr].contact;
        // description.textContent = changeLanguage[attr].description;
        // clickHere.textContent = changeLanguage[attr].clickHere;
        // descriptionTwo.textContent = changeLanguage[attr].descriptionTwo;
        // clickHereTwo.textContent = changeLanguage[attr].clickHereTwo;
        // languageBase.textContent = changeLanguage[attr].languageBase;
        // languageHtml.textContent = changeLanguage[attr].languageHtml;
        // clickHereThree.textContent = changeLanguage[attr].clickHereThree;
        // languageCss.textContent = changeLanguage[attr].languageCss;
        // clickHereFour.textContent = changeLanguage[attr].clickHereFour;
        // languageJs.textContent = changeLanguage[attr].languageJs;
        // clickHereFive.textContent = changeLanguage[attr].clickHereFive;
        // rights.textContent = changeLanguage[attr].rights;
    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "español": {
        // home
        "title": "JARDÍN DEL TESORO",
        "subtitle": "DETALLES",
        "menuHomep": "Inicio",
        "menuSectionOnep": "Proyecto",
        "menuSectionTwop": "Apartamentos",
        "menuSectionThreep": "Amenidades",
        "menuSectionFourp": "Galeria",
        "menuSectionFivep": "Financiamiento",
        "menuSectionSixp": "Contacto",
        "paragraph": "El edificio de la torre residencial esbelto y geométricamente intrincado es un nuevo hito del distrito 7 en Taichung. Gracias a la orientación única de su arquitectura, el edificio da al Summer Green Park, abriendo los elegantes interiores de las residencias a vistas panorámicas de la ciudad. Compuesto por una serie de aspas delgadas y livianas, se eleva hacia el cielo, consolidando en su diseño áreas residenciales, espacios públicos, terrazas y paisaje. Los espacios públicos y privados están definidos por un diseño de paisaje funcional y, al mismo tiempo, poético basado en el histórico Hortus Conclusus. La geometría modular en forma de diamante domina tanto la fachada como el interior de las áreas públicas.",
        "tOne": "Proyecto",
        "sOne": "Interiores de edificio",
        "tTwo": "Tipo",
        "sTwo": "Residencial",
        "tThree": "Área",
        "tFour": "Altura",
        "tFive": "Pisos",
        "tSix": "Inaguración",
        "companies": "Todas las empresas involucradas",
        "blueprints": "Planos",
        "galeryButton": "Ver Galería",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
        "footerButton": "Contacto",
        // "sectionTitle": "Refinada e icónica",
        // "sectionText": "la fachada refleja un espectro dinámico de color y luz a medida que el sol se mueve por la superficie del edificio.",
        // "sectionButton": "Proyecto",
        // "sectionTitle2": "Diseño unificado",
        // "sectionText2": "lujosos espacios de estar y generosas áreas comunes en un elegante estilo italiano.",
        // "sectionButton2": "Apartamentos",
        // "sectionTitle3": "Bienestar y Comodidad",
        // "sectionText3": "Los residentes disfrutan de una piscina cubierta y un spa ambos con los interiores más asombrosos de la ciudad.",
        // "sectionButton3": "Amenidades",
        // "sectionTitle4": "Únete a nosotros",
        // "sectionText4": "Cotiza el financiamiento de tu apartamentos en el edificio residencial más sofisticado de Taiwan.",
        // "sectionButton4": "Financiamiento",


        // "additional": "Extras",
        // "contact": "Contacto",
        // "description": "Es un marco de desarrollo que permite crear sitios web responsivos compatibles con dispositivos moviles.",
        // "clickHere": "Click aquí",
        // "descriptionTwo": "Desarrollo de sitios web responsivos compatibles con dispositivos moviles Smartphone y Tablet.",
        // "clickHereTwo": "Click aquí",
        // "languageBase": "Lenguajes Base?",
        // "languageHtml": "Lenguaje HTML5",
        // "clickHereThree": "Click aquí",
        // "languageCss": "Lenguaje CSS",
        // "clickHereFour": "Click aquí",
        // "languageJs": "Lenguaje JAVA SCRIPT",
        // "clickHereFive": "Click aquí",
        // "rights": "Derechos Reservados"
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "title": "TREASURE GARDEN",
        "subtitle": "DETAILS",
        "menuHomep": "Home",
        "menuSectionOnep": "Project",
        "menuSectionTwop": "Apartments",
        "menuSectionThreep": "Amenities",
        "menuSectionFourp": "Gallery",
        "menuSectionFivep": "Financing",
        "menuSectionSixp": "Contact",
        "paragraph": "The slender and geometrically intricate residential tower building is a new landmark of District 7 in Taichung. Thanks to the unique orientation of its architecture, the building faces Summer Green Park, opening the elegant interiors of the residences to panoramic views of the city. Composed of a series of thin and light blades, it rises towards the sky, consolidating in its design residential areas, public spaces, terraces and landscape. Public and private spaces are defined by a functional and at the same time poetic landscape design based on the historical Hortus Conclusus. The diamond-shaped modular geometry dominates both the façade and the interior of the public areas.",
        "tOne": "Project",
        "sOne": "Building interiors",
        "tTwo": "Type",
        "sTwo": "Residential",
        "tThree": "Area",
        "tFour": "Height",
        "tFive": "Floors",
        "tSix": "Opening",
        "companies": "All companies involved",
        "blueprints": "Blueprints",
        "galeryButton": "View Gallery",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
        "footerButton": "Contact",
        // "sectionTitle": "Refined and Iconic",
        // "sectionText": "The façade reflects a dynamic spectrum of color and light as the sun moves across the building's surface.",
        // "sectionButton": "Project",
        // "sectionTitle2": "Unified Design",
        // "sectionText2": "Luxurious living spaces and generous common areas in an elegant Italian style.",
        // "sectionButton2": "Apartments",
        // "sectionTitle3": "Well-being and Comfort",
        // "sectionText3": "Residents enjoy an indoor pool and spa both with the most amazing interiors in the city.",
        // "sectionButton3": "Amenities",
        // "sectionTitle4": "Join us",
        // "sectionText4": "Quote the financing of your apartments in the most sophisticated residential building in Taiwan.",
        // "sectionButton4": "Financing",


        // "additional": "Additional features",
        // "contact": "Contact",
        // "description": "It is a development framework that allows you to create responsive websites that are compatible with mobile devices.",
        // "clickHere": "Click here",
        // "descriptionTwo": "Responsive website development Compatible with Smartphone and Tablet mobile devices.",
        // "clickHereTwo": "Click here",
        // "languageBase": "Base languages?",
        // "languageHtml": "language HTML5",
        // "clickHereThree": "Click here",
        // "languageCss": "language CSS",
        // "clickHereFour": "Click here",
        // "languageJs": "language JAVA SCRIPT",
        // "clickHereFive": "Click here",
        // "rights": "All rights reserved"
    }
}