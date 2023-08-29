//declaracion de clases usando constantes
//llamar a cada clase que tienen los textos a convertir

const langEl = document.querySelector('.lang-selector');
const link = document.querySelectorAll('a');
const menuHomep = document.querySelector('.menuHomep');
const menuSectionOnep = document.querySelector('.menuSectionOnep');
const menuSectionTwop = document.querySelector('.menuSectionTwop');
const menuSectionThreep = document.querySelector('.menuSectionThreep');
const menuSectionFourp = document.querySelector('.menuSectionFourp');
const menuSectionFivep = document.querySelector('.menuSectionFivep');
const menuSectionSixp = document.querySelector('.menuSectionSixp');
const sct_txt = document.querySelector(".sct-txt");
const sct_txt2 = document.querySelector(".sct-txt2");
const select1 = document.querySelector(".select1")
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");
const opt3 = document.querySelector(".opt3");
const opt4 = document.querySelector(".opt4");
const title_txt = document.querySelector(".title-txt");
const select2 = document.querySelector(".select2");
const opt5 = document.querySelector(".opt5");
const opt6 = document.querySelector(".opt6");
const opt7 = document.querySelector(".opt7");
const opt8 = document.querySelector(".opt8");
const title_txt2 = document.querySelector(".title-txt2");
const select3 = document.querySelector(".select3");
const miButton = document.querySelector(".miButton");
const title_txt3 = document.querySelector(".title-txt3");
const txt_p = document.querySelector(".txt-p");
const startButton = document.querySelector(".startButton");
const bottomTitle = document.querySelector('.bottomTitle');
const bottomText = document.querySelector('.bottomText');
const footerButton = document.querySelector('.footerButton');
const title_txt4 = document.querySelector('.title-txt4');
const form_label1 = document.querySelector('.form-label1');
const form_label2 = document.querySelector('.form-label2');
const form_label3 = document.querySelector('.form-label3');
const form_label4 = document.querySelector('.form-label4');
const select4 = document.querySelector(".select4");
const opt9 = document.querySelector(".opt9");
const opt10 = document.querySelector(".opt10");
const nextButton = document.querySelector('.nextButton');
const cancelButton = document.querySelector('.cancelButton');
const title_txt5 = document.querySelector('.title-txt5');
const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const a5 = document.querySelector('.a5');
const a6 = document.querySelector('.a6');
const nextButton2 = document.querySelector('.nextButton2');
const cancelButton2 = document.querySelector('.cancelButton2');
const title_txt6 = document.querySelector('.title-txt6');
const form_label5 = document.querySelector('.form-label5');
const select5 = document.querySelector(".select5");
const opt11 = document.querySelector(".opt11");
const opt12 = document.querySelector(".opt12");
const opt13 = document.querySelector(".opt13");
const opt14 = document.querySelector(".opt14");
const form_label6 = document.querySelector('.form-label6');
const select6 = document.querySelector(".select6");
const opt15 = document.querySelector(".opt15");
const opt16 = document.querySelector(".opt16");
const form_label7 = document.querySelector('.form-label7');
const select7 = document.querySelector(".select7");
const opt17 = document.querySelector(".opt17");
const opt18 = document.querySelector(".opt18");
const opt19 = document.querySelector(".opt19");
const opt20 = document.querySelector(".opt20");
const endButton = document.querySelector('.endButton');
const cancelButton3 = document.querySelector('.cancelButton3');
const r1 = document.querySelector('.r1');
const r2 = document.querySelector('.r2');
const r3 = document.querySelector('.r3');
const r4 = document.querySelector('.r4');
const r5 = document.querySelector('.r5');
const r6 = document.querySelector('.r6');
const r7 = document.querySelector('.r7');
const r8 = document.querySelector('.r8');
const r9 = document.querySelector('.r9');
const r10 = document.querySelector('.r10');
const r11 = document.querySelector('.r11');
const footerR = document.querySelector('.footerR');
const title_txt7 = document.querySelector('.title-txt7');
const q4 = document.querySelector('.q4');
const q5 = document.querySelector('.q5');
const q6 = document.querySelector('.q6');
const a7 = document.querySelector('.a7');
const a8 = document.querySelector('.a8');
const a9 = document.querySelector('.a9');
const a10 = document.querySelector('.a10');
const a11 = document.querySelector('.a11');
const a12 = document.querySelector('.a12');
const a13 = document.querySelector('.a13');
const a14 = document.querySelector('.a14');
const a15 = document.querySelector('.a15');
const surveyButton = document.querySelector('.surveyButton');

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
        sct_txt.textContent = changeLanguage[attr].sct_txt;
        sct_txt2.textContent = changeLanguage[attr].sct_txt2;
        select1.textContent = changeLanguage[attr].select1;
        opt1.textContent = changeLanguage[attr].opt1;
        opt2.textContent = changeLanguage[attr].opt2;
        opt3.textContent = changeLanguage[attr].opt3;
        opt4.textContent = changeLanguage[attr].opt4;
        title_txt.textContent = changeLanguage[attr].title_txt;
        select2.textContent = changeLanguage[attr].select2;
        opt5.textContent = changeLanguage[attr].opt5;
        opt6.textContent = changeLanguage[attr].opt6;
        opt7.textContent = changeLanguage[attr].opt7;
        opt8.textContent = changeLanguage[attr].opt8;
        title_txt2.textContent = changeLanguage[attr].title_txt2;
        select3.textContent = changeLanguage[attr].select3;
        miButton.textContent = changeLanguage[attr].miButton
        title_txt3.textContent = changeLanguage[attr].title_txt3;
        txt_p.textContent = changeLanguage[attr].txt_p;
        startButton.textContent = changeLanguage[attr].startButton;
        bottomTitle.textContent = changeLanguage[attr].bottomTitle;
        bottomText.textContent = changeLanguage[attr].bottomText;
        footerButton.textContent = changeLanguage[attr].footerButton;
        title_txt4.textContent = changeLanguage[attr].title_txt4;
        form_label1.textContent = changeLanguage[attr].form_label1;
        form_label2.textContent = changeLanguage[attr].form_label2;
        form_label3.textContent = changeLanguage[attr].form_label3;
        form_label4.textContent = changeLanguage[attr].form_label4;
        opt9.textContent = changeLanguage[attr].opt9;
        opt10.textContent = changeLanguage[attr].opt10;
        nextButton.textContent = changeLanguage[attr].nextButton;
        cancelButton.textContent = changeLanguage[attr].cancelButton;
        title_txt5.textContent = changeLanguage[attr].title_txt5;
        q1.textContent = changeLanguage[attr].q1;
        q2.textContent = changeLanguage[attr].q2;
        q3.textContent = changeLanguage[attr].q3;
        a1.textContent = changeLanguage[attr].a1;
        a2.textContent = changeLanguage[attr].a2;
        a3.textContent = changeLanguage[attr].a3;
        a4.textContent = changeLanguage[attr].a4;
        a5.textContent = changeLanguage[attr].a5;
        a6.textContent = changeLanguage[attr].a6;
        nextButton2.textContent = changeLanguage[attr].nextButton2;
        cancelButton2.textContent = changeLanguage[attr].cancelButton2;
        title_txt6.textContent = changeLanguage[attr].title_txt6;
        form_label5.textContent = changeLanguage[attr].form_label5;
        select5.textContent = changeLanguage[attr].select5;
        opt11.textContent = changeLanguage[attr].opt11;
        opt12.textContent = changeLanguage[attr].opt12;
        opt13.textContent = changeLanguage[attr].opt13;
        opt14.textContent = changeLanguage[attr].opt14;
        form_label6.textContent = changeLanguage[attr].form_label6;
        select6.textContent = changeLanguage[attr].select6;
        opt15.textContent = changeLanguage[attr].opt15;
        opt16.textContent = changeLanguage[attr].opt16;
        form_label7.textContent = changeLanguage[attr].form_label7
        select7.textContent = changeLanguage[attr].select7;
        opt17.textContent = changeLanguage[attr].opt17;
        opt18.textContent = changeLanguage[attr].opt18;
        opt19.textContent = changeLanguage[attr].opt19;
        opt20.textContent = changeLanguage[attr].opt20;
        endButton.textContent = changeLanguage[attr].endButton;
        cancelButton3.textContent = changeLanguage[attr].cancelButton3;
        r1.textContent = changeLanguage[attr].r1;
        r2.textContent = changeLanguage[attr].r2;
        r3.textContent = changeLanguage[attr].r3;
        r4.textContent = changeLanguage[attr].r4;
        r5.textContent = changeLanguage[attr].r5;
        r6.textContent = changeLanguage[attr].r6;
        r7.textContent = changeLanguage[attr].r7;
        r8.textContent = changeLanguage[attr].r8;
        r9.textContent = changeLanguage[attr].r9;
        r10.textContent = changeLanguage[attr].r10;
        r11.textContent = changeLanguage[attr].r12;
        footerR.textContent = changeLanguage[attr].footerR;
        title_txt7.textContent = changeLanguage[attr].title_txt7;
        q4.textContent = changeLanguage[attr].q4;
        q5.textContent = changeLanguage[attr].q5;
        q6.textContent = changeLanguage[attr].q6;
        a7.textContent = changeLanguage[attr].a7;
        a8.textContent = changeLanguage[attr].a8;
        a9.textContent = changeLanguage[attr].a9;
        a10.textContent = changeLanguage[attr].a10;
        a11.textContent = changeLanguage[attr].a11;
        a12.textContent = changeLanguage[attr].a12;
        a13.textContent = changeLanguage[attr].a13;
        a14.textContent = changeLanguage[attr].a14;
        a15.textContent = changeLanguage[attr].a15;
        surveyButton.textContent = changeLanguage[attr].surveyButton;

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
        "sct_txt": "Explora nuestros beneficios con las imagenes que se muestran del lado derecho",
        "sct_txt2": "¿Eres un Agente de Bienes raices? ¿deseas obtener más información para trabajar en conjunto con el Jardin del Tesoro?",
        "select1": "Seleccione un Beneficio:",
        "opt1": "Ubicación",
        "opt2": "Arquitectura",
        "opt3": "Seguridad",
        "opt4": "Extravagancia",
        "title_txt": "Años de experiencia",
        "select2": "Seleccionar años de experiencia:",
        "opt5": "6 meses",
        "opt6": "1 año",
        "opt7": "2 años",
        "opt8": "3 años",
        "title_txt2": "Ciudad donde laboras",
        "select3": "Seleccionar ciudad de la licencia",
        "miButton": "Más info",
        "title_txt3": "Realice su Cotización",
        "txt_p": "En la industria inmobiliaria contar con las mejores prácticas de cotización de propiedades es vital para cerrar más y mejores tratos. Ningún comprador quiere pagar el precio más alto por una casa, por lo que este recurso es necesario para que la negociación sea beneficiosa para ambas partes.",
        "startButton": "Iniciar",
        "title_txt4": "Datos Personales",
        "form_label1": "Nombre:",
        "form_label2": "Apellido:",
        "form_label3": "Salario:",
        "form_label4": "Acción:",
        "select4": "Seleccione una accion:",
        "opt9": "Comprar",
        "opt10": "Alquiler",
        "nextButton": "Continuar",
        "cancelButton": "Cancelar",
        "title_txt5": "Servicios",
        "q1": "¿Deseas ser parte del Jardin del tesoro Club?",
        "q2": "¿Deseas Tener Chef personal?",
        "q3": "¿Deseas servicio de limpieza?",
        "a1": " Si",
        "a2": " No",
        "a3": " Si",
        "a4": " No",
        "a5": " Si",
        "a6": " No",
        "nextButton2": "Continuar",
        "cancelButton2": "Cancelar",
        "title_txt6": "Datos de Apartamento",
        "form_label5": "Numero de piso:",
        "select5": "pisos disponibles:",
        "opt11": "4to piso",
        "opt12": "16to piso",
        "opt13": "17to piso",
        "opt14": "22do piso",
        "form_label6": "¿Apartamento Completo o parcial?:",
        "select6": "Seleccione una opcion:",
        "opt15": "Completo",
        "opt16": "Parcial",
        "form_label7": "¿Numero de cuartos?:",
        "select7": "Seleccione una opcion:",
        "opt17": "1 cuarto",
        "opt18": "3 cuartos",
        "opt19": "4 cuartos",
        "opt20": "8 cuartos",
        "endButton": "Finalizar",
        "cancelButton3": "Cancelar",
        "r1": "Salario",
        "r2": "Jardín del Tesoro Club",
        "r3": "Chef personal",
        "r4": "Servicio de limpieza",
        "r5": "Precio",
        "r6": "Deposito",
        "r7": "Prima",
        "r8": "Numero de piso",
        "r9": "Apartamento",
        "r10": "Numero de habitaciones",
        "r11": "Impuestos Estimados",
        "footerR": "Gracias por confiar en nosotros.",
        "title_txt7": "Calificanos",
        "q4": "¿Que tan útil fue la cotización?",
        "q5": "¿Cúal es la Calidad de los imágenes?",
        "q6": "¿Cúal es la calidad de el resultado?",
        "a7": "Malo",
        "a8": "Regular",
        "a9": "Excelente",
        "a10": "Malo",
        "a11": "Regular",
        "a12": "Excelente",
        "a13": "Malo",
        "a14": "Regular",
        "a15": "Excelente",
        "surveyButton": "Calificar",
        "bottomTitle": "Jardín del Tesoro",
        "bottomText": "Los espacios de vida y entretenimiento más grandiosos",
        "footerButton": "Contacto",
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
        "sct_txt": "Explore our benefits with the images shown on the right side.",
        "sct_txt2": "Are you a Real Estate Agent? Do you want more information to work together with The Tresure Garden?",
        "select1": "Select a Benefit:",
        "opt1": "Location",
        "opt2": "Architecture",
        "opt3": "Safety",
        "opt4": "Extravagance",
        "title_txt": "Years of experience",
        "select2": "Select years of Experience:",
        "opt5": "6 months",
        "opt6": "1 year",
        "opt7": "2 years",
        "opt8": "3 years",
        "title_txt2": "City where you work",
        "select3": "Select license city",
        "miButton": "More info",
        "title_txt3": "Make your Quote",
        "txt_p": "In the real estate industry, having the best property listing practices is vital to closing more and better deals. No buyer wants to pay the highest price for a house, so this resource is necessary for the negotiation to be beneficial for both parties.",
        "startButton": "Start",
        "title_txt4": "Personal Details",
        "form_label1": "Name:",
        "form_label2": "Last name:",
        "form_label3": "Salary:",
        "form_label4": "Action:",
        "select4": "Select an action:",
        "opt9": "Buy",
        "opt10": "Rent",
        "nextButton": "Next",
        "cancelButton": "Cancel",
        "title_txt5": "Services",
        "q1": "Do you want to be part of the Treasure Garden Club?",
        "q2": "Do you want to have a personal Chef?",
        "q3": "Do you want cleaning service?",
        "a1": " Yes",
        "a2": " No",
        "a3": " Yes",
        "a4": " No",
        "a5": " Yes",
        "a6": " No",
        "nextButton2": "Next",
        "cancelButton2": "Cancel",
        "title_txt6": "Apartment details",
        "form_label5": "Floor number:",
        "select5": "floors available:",
        "opt11": "4th floor",
        "opt12": "16th floor",
        "opt13": "17th floor",
        "opt14": "22nd floor",
        "form_label6": "Full or partial apartment?:",
        "select6": "Select an option:",
        "opt15": "Complete",
        "opt16": "Partial",
        "form_label7": "Number of rooms?:",
        "select7": "Select an option:",
        "opt17": "1 room",
        "opt18": "3 rooms",
        "opt19": "4 rooms",
        "opt20": "8 rooms",
        "endButton": "Finish",
        "cancelButton3": "Cancel",
        "r1": "Salary",
        "r2": "Treasure Garden Club",
        "r3": "Personal Chef",
        "r4": "Cleaning Service",
        "r5": "Price",
        "r6": "Deposit",
        "r7": "Advance payment",
        "r8": "Floor nuber",
        "r9": "Apartment",
        "r10": "Number of rooms",
        "r11": "Estimated taxes",
        "footerR": "Thanks you for trust us.",
        "title_txt7": "Rate us",
        "q4": "How useful was the quote?",
        "q5": "What is the quality of the images?",
        "q6": "What is the quality of the result?",
        "a7": "Bad",
        "a8": "Regular",
        "a9": "Excelent",
        "a10": "Bad",
        "a11": "Regular",
        "a12": "Excelent",
        "a13": "Bad",
        "a14": "Regular",
        "a15": "Excelent",
        "surveyButton": "Rate",
        "bottomTitle": "Treasure Garden",
        "bottomText": "The Greatest Living and Entertainment Spaces",
        "footerButton": "Contact",
    }
};