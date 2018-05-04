alert("un mensaje de prueba");

var numero = 3;
var nombre = "abcd";
var numero2 = 2;
var resultado = 0;

resultado =numero + numero2;

		alert(resultado); 
    
	var m = "global";
function muestraMensaje(){
    m = "local";
    alert(m);
}

	alert(m);
	muestraMensaje();
	alert(m);