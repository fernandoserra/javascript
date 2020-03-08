var getImport = document.quearySelector('link[rel=import]'); //no lo estamos seleccionando de esta manera (de esta manera estamos seleccionando el selector)

//var getImport = document.querySelector('#template-file');

var getContent = getImport.import.querySelector('#content'); 

document.body.appendChild(document.importNode(getContent, true)); 