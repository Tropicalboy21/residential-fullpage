// declaracion de clases usando constantes
// llamar a cada clase que tienen los textos a convertir
const langEl = document.querySelector('.lang-selector');
const link = document.querySelectorAll('a');
const title = document.querySelector('.title');
// const subtitle = document.querySelector('.subtitle');
const menuHomep = document.querySelector('.menuHomep');
const menuSectionOnep = document.querySelector('.menuSectionOnep');
const menuSectionTwop = document.querySelector('.menuSectionTwop');
const menuSectionThreep = document.querySelector('.menuSectionThreep');
const menuSectionFourp = document.querySelector('.menuSectionFourp');
const menuSectionFivep = document.querySelector('.menuSectionFivep');
const menuSectionSixp = document.querySelector('.menuSectionSixp');
const paragraph = document.querySelector(".paragraph");
// const testi = document.querySelector(".testi")
// const quote = document.querySelector(".quote");
// const tx_1 = document.querySelector(".tx-1");
// const tx_2 = document.querySelector(".tx-2");
// const tx_3 = document.querySelector(".tx-3");
// const tx_4 = document.querySelector(".tx-4");
// const tx_5 = document.querySelector(".tx-5");
// const tx_6 = document.querySelector(".tx-6");
// const companies = document.querySelector(".companies");
const blueprints = document.querySelector(".blueprints");
const galleryButton = document.querySelector(".galleryButton");
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
        // subtitle.textContent = changeLanguage[attr].subtitle;
        menuHomep.textContent = changeLanguage[attr].menuHomep;
        menuSectionOnep.textContent = changeLanguage[attr].menuSectionOnep;
        menuSectionTwop.textContent = changeLanguage[attr].menuSectionTwop;
        menuSectionThreep.textContent = changeLanguage[attr].menuSectionThreep;
        menuSectionFourp.textContent = changeLanguage[attr].menuSectionFourp;
        menuSectionFivep.textContent = changeLanguage[attr].menuSectionFivep;
        menuSectionSixp.textContent = changeLanguage[attr].menuSectionSixp;
        paragraph.textContent = changeLanguage[attr].paragraph;
        // testi.textContent = changeLanguage[attr].testi;
        // quote.textContent = changeLanguage[attr].quote;
        // tx_1.textContent = changeLanguage[attr].tx_1;
        // tx_2.textContent = changeLanguage[attr].tx_2;
        // tx_3.textContent = changeLanguage[attr].tx_3;
        // tx_4.textContent = changeLanguage[attr].tx_4;
        // tx_5.textContent = changeLanguage[attr].tx_5;
        // tx_6.textContent = changeLanguage[attr].tx_6;
        // tFive.textContent = changeLanguage[attr].tFive;
        // tSix.textContent = changeLanguage[attr].tSix;
        // companies.textContent = changeLanguage[attr].companies;
        blueprints.textContent = changeLanguage[attr].blueprints;
        galleryButton.textContent = changeLanguage[attr].galleryButton;
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
        "title": "Bienestar y comodidad",
        // "subtitle": "Detalles",
        "menuHomep": "Inicio",
        "menuSectionOnep": "Proyecto",
        "menuSectionTwop": "Apartamentos",
        "menuSectionThreep": "Amenidades",
        "menuSectionFourp": "Galeria",
        "menuSectionFivep": "Financiamiento",
        "menuSectionSixp": "Contacto",
        "paragraph": "El programa de acondicionamiento físico y bienestar en Treasure Garden Club ha sido desarrollado en colaboración con reconocidos expertos en fitness y operadores. Los residentes disfrutan de una doble altura cancha de deportes con ventanas, una piscina cubierta y un spa, un gimnasio de alta tecnología diseñado para entrenamiento personal y salón de belleza. Acomoda privado clases de natación, entrenadores, servicios de entrenamiento personal y tratamientos reparadores.",
        // "testi": "Testimoniales",
        // "qoute": '“Es la atención a la calidad de los interiores lo que distingue al proyecto. Para nosotros es difícil pensar en arquitectura sin imaginar cómo es el interior del edificio. La extraordinaria iluminación de la entrada, la calidad de los muebles y los accesorios marcan la diferencia.” – Antonio Citterio',
        "tx_1": "La mejor residencia en Taichung.",
        "tx_2": "Amo la diseños y sus lujosos interiores.",
        "tx_3": "La tranquildad es un punto a favor.",
        "tx_4": "Su diseño es impresionante.",
        "tx_5": "Enamorado con el lugar y los acabados.",
        "tx_6": "La mejor residencia.",
        // "tOne": "Proyecto",
        // "sOne": "Interiores de edificio",
        // "tTwo": "Tipo",
        // "sTwo": "Residencial",
        // "tThree": "Área",
        // "tFour": "Altura",
        // "tFive": "Pisos",
        // "tSix": "Inaguración",
        // "companies": "Todas las empresas involucradas",
        "blueprints": "Fotos",
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
        // "testi": "Testimonials",
        // "quote": '“It is the attention to the quality of the interiors that distinguishes the project. It is difficult for us to think about architecture without imagining what the interior of the building is like. The extraordinary lighting in the entrance, the quality of the furniture and the accessories make the difference”. –Antonio Citterio',
        // "tx_1": "The best residence in Taichung.",
        // "tx_2": "I love the luxurious interiors.",
        // "tx_3": "Tranquility is a plus point.",
        // "tx_4": "It's design is impressive.",
        // "tx_5": "In love with the place and the finishes.",
        // "tx_6": "The best residence.",
        // "tOne": "Project",
        // "sOne": "Building interiors",
        // "tTwo": "Type",
        // "sTwo": "Residential",
        // "tThree": "Area",
        // "tFour": "Height",
        // "tFive": "Floors",
        // "tSix": "Opening",
        // "companies": "All companies involved",
        "blueprints": "Photos",
        "galleryButton": "View Gallery",
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