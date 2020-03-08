let infoClienteGeneral =
    [
        {
            "descripcion": "Alto x Ancho del Navegador",
            "valor": window.innerHeight + ' x ' + window.innerWidth
        },
        {
            "descripcion": "Alto x Ancho del Navegador (barras de herramientas / desplazamiento)",
            "valor": window.outerHeight + ' x ' + window.outerWidth
        },
        {
            "descripcion": "Navegador y Sistema",
            "valor": window.navigator.userAgent
        },
        {
            "descripcion": "Lenguaje Activo",
            "valor": window.navigator.language
        },
        {
            "descripcion": "Lenguajes Configurados",
            "valor": window.navigator.languages
        },
        {
            "descripcion": "Navegador Online",
            "valor": window.navigator.onLine
        },
        {
            "descripcion": "Ubicación Actual",
            "valor": window.document.documentURI
        }
    ]

console.log("***************************INFO********************************");
    console.time;
    for (let index = 0; index < infoClienteGeneral.length; index++) {
        console.log("========================================================");
        console.log(`Descripcion: ${infoClienteGeneral[index].descripcion}`);
        console.log(`Valor: ${infoClienteGeneral[index].valor}`);
        console.log("========================================================");           
        /*if(index > 3){
            debugger
        }*/
    }
    console.timeEnd;
console.log("***************************INFO********************************");