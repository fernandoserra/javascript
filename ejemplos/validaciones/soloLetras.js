function soloLetras(e)
{
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyzBCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789 ";//Se define todo el abecedario y números que se quiere que se muestre.
    especiales = [8,9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.

    tecla_especial = false
	for(var i in especiales)
	{
		if(key == especiales[i])
		{
			tecla_especial = true;
			break;
		}
	}
	if(letras.indexOf(tecla) == -1 && !tecla_especial)
	{
		return false;
	}
}