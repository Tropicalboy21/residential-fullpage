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
const testi = document.querySelector(".testi")
const quote = document.querySelector(".quote");
const tx_1 = document.querySelector(".tx-1");
const tx_2 = document.querySelector(".tx-2");
const tx_3 = document.querySelector(".tx-3");
const tx_4 = document.querySelector(".tx-4");
const tx_5 = document.querySelector(".tx-5");
const tx_6 = document.querySelector(".tx-6");
const blueprints = document.querySelector(".blueprints");
const galleryButton = document.querySelector(".galleryButton");
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
        subtitle.textContent = changeLanguage[attr].subtitle;
        menuHomep.textContent = changeLanguage[attr].menuHomep;
        menuSectionOnep.textContent = changeLanguage[attr].menuSectionOnep;
        menuSectionTwop.textContent = changeLanguage[attr].menuSectionTwop;
        menuSectionThreep.textContent = changeLanguage[attr].menuSectionThreep;
        menuSectionFourp.textContent = changeLanguage[attr].menuSectionFourp;
        menuSectionFivep.textContent = changeLanguage[attr].menuSectionFivep;
        menuSectionSixp.textContent = changeLanguage[attr].menuSectionSixp;
        paragraph.textContent = changeLanguage[attr].paragraph;
        testi.textContent = changeLanguage[attr].testi;
        quote.textContent = changeLanguage[attr].quote;
        tx_1.textContent = changeLanguage[attr].tx_1;
        tx_2.textContent = changeLanguage[attr].tx_2;
        tx_3.textContent = changeLanguage[attr].tx_3;
        tx_4.textContent = changeLanguage[attr].tx_4;
        tx_5.textContent = changeLanguage[attr].tx_5;
        tx_6.textContent = changeLanguage[attr].tx_6;
        blueprints.textContent = changeLanguage[attr].blueprints;
        galleryButton.textContent = changeLanguage[attr].galleryButton;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;
        footerButton.textContent = changeLanguage[attr].footerButton;
    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "español": {
        "title": "DISEÑO UNIFICADO",
        "subtitle": "Detalles",
        "menuHomep": "Inicio",
        "menuSectionOnep": "Proyecto",
        "menuSectionTwop": "Apartamentos",
        "menuSectionThreep": "Amenidades",
        "menuSectionFourp": "Galeria",
        "menuSectionFivep": "Financiamiento",
        "menuSectionSixp": "Contacto",
        "paragraph": "Esta nueva torre residencial se caracteriza por piezas arquitectónicas de lamas esbeltas y ligeras, desde el suelo hasta el cielo, cubiertas por una pantalla en forma de diamante de geometría elegante y flexible aplicada tanto en fachada como en el interiorde los espacios comunes. El proyecto de paisaje se basa en la definición de un espacio de acceso claro y definido. Delimita un lugar privado, definido hacia el exterior por un doble cerramiento con diseño de diamante,un muro filtrante para crear un jardín rico, tranquilo y poético, con árboles frutales en su interior, y árboles escultóricos para marcar el acceso vehicular y la entrada.",
        "testi": "Testimoniales",
        "qoute": '“Es la atención a la calidad de los interiores lo que distingue al proyecto. Para nosotros es difícil pensar en arquitectura sin imaginar cómo es el interior del edificio. La extraordinaria iluminación de la entrada, la calidad de los muebles y los accesorios marcan la diferencia.” – Antonio Citterio',
        "tx_1": "La mejor residencia en Taichung.",
        "tx_2": "Amo la diseños y sus lujosos interiores.",
        "tx_3": "La tranquildad es un punto a favor.",
        "tx_4": "Su diseño es impresionante.",
        "tx_5": "Enamorado con el lugar y los acabados.",
        "tx_6": "La mejor residencia.",
        "blueprints": "Fotos",
        "galeryButton": "Ver Galería",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
        "footerButton": "Contacto",
    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "title": "UNIFIED DESIGN",
        "subtitle": "Details",
        "menuHomep": "Home",
        "menuSectionOnep": "Project",
        "menuSectionTwop": "Apartments",
        "menuSectionThreep": "Amenities",
        "menuSectionFourp": "Gallery",
        "menuSectionFivep": "Financing",
        "menuSectionSixp": "Contact",
        "paragraph": "This new residential tower is characterized by architectural pieces with slender and light slats, from the ground to the ceiling, covered by a diamond-shaped screen with an elegant and flexible geometry applied both on the façade and inside the common spaces. The landscape project is based on the definition of a clear and defined access space. It delimits a private place, defined towards the exterior by a double enclosure with a diamond design, a filtering wall to create a rich, calm and poetic garden, with fruit trees inside, and sculptural trees to mark the vehicular access and the entrance.",
        "testi": "Testimonials",
        "quote": '“It is the attention to the quality of the interiors that distinguishes the project. It is difficult for us to think about architecture without imagining what the interior of the building is like. The extraordinary lighting in the entrance, the quality of the furniture and the accessories make the difference”. –Antonio Citterio',
        "tx_1": "The best residence in Taichung.",
        "tx_2": "I love the luxurious interiors.",
        "tx_3": "Tranquility is a plus point.",
        "tx_4": "It's design is impressive.",
        "tx_5": "In love with the place and the finishes.",
        "tx_6": "The best residence.",
        "blueprints": "Photos",
        "galleryButton": "View Gallery",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
        "footerButton": "Contact",
    }
};