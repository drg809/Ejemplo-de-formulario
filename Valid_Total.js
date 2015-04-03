function validarDNI(dni) {

if (formulario.dni.value == ""){
alert("Escribe tu DNI para poder enviarlo al servidor.");
return(false);
}

  var numero
  var let
  var letra
  var expresion_regular_dni
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     let = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     letra=letra.substring(numero,numero+1);
     if (letra!=let) {
       alert('El Dni es incorrecto, la letra del NIF no se corresponde');
     }else{
       alert('El Dni es correcto');
     }
  }else{
     alert('El Dni es incorrecto, formato no válido');
   }
}


function validarnombre(nombre){

if (formulario.nombre.value == ""){
alert("Escribe tu nombre para poder enviarlo al servidor.");
return(false);
}
}

function validarapellidos(apellidos){

if (formulario.apellidos.value == ""){
alert("Escribe tus apellidos para poder enviarlo al servidor.");
return(false);
}
}

function validarfecha(fecha){
     if (fecha != undefined && fecha.value != "" ){
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)){
            alert("El formato de fecha no es válido (dd/mm/aaaa)");
            //return false;
        }
        var dia  =  parseInt(fecha.value.substring(0,2),10);
        var mes  =  parseInt(fecha.value.substring(3,5),10);
        var anio =  parseInt(fecha.value.substring(6),10);
 
    switch(mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numDias=31;
            break;
        case 4: case 6: case 9: case 11:
            numDias=30;
            break;
        case 2:
            if (comprobarSiBisisesto(anio)){ numDias=29 }else{ numDias=28};
            break;
        default:
            alert("La fecha introducida es erronea");
            return false;
    }
 
        if (dia>numDias || dia==0){
            alert("La fecha introducida es erronea");
            return false;
        }
        return true;
    }
}

function validardomicilio(domicilio){
 if (formulario.domicilio.value == ""){
alert("Escribe tu domicilio.");
return(false);
}
}

function validarCP(CP){
if (formulario.CP.value == ""){
alert("Escribe tu Código Postal.");
return(false);
}
var elcp = /^\d{5}$/
if(!elcp.test(formulario.CP.value)) {   
        alert('CP no válido.')  
        return false  
}
}

function validarprovincia(provincia){
if (formulario.provincia.value == ""){
alert("Escribe tu Provincia.");
return(false);
}
}

function validartelf(telf){
var eltelf = /(^([0-9]{9,9})|^)$/
if(!eltelf.test(formulario.telf.value)) {   
        alert('Teléfono no válido.')  
        return false  
} 
}


function validaremail(email){
valor = document.getElementById("email").value;
if( !(/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(valor)) ) {
alert ("Introduce un email correcto.");
  return false;
}
}

function hom(){
alert("Has seleccionado sexo: HOMBRE.");
}
function muj(){
alert("Has seleccionado sexo: MUJER.");
}

function validarb() {
	var banco = document.getElementById('banco').value
	var sucursal = document.getElementById('sucursal').value
	var dc = document.getElementById('dc').value
	var cuenta = document.getElementById('cuenta').value
  if (banco == ""  || sucursal == "" || dc == "" || cuenta == "")
    alert("Por favor, introduzca los datos de su cuenta");
  else {
    if (banco.length != 4 || sucursal.length != 4 ||
        dc.length != 2 || cuenta.length != 10)
      alert("Por favor, introduzca correctamente los datos de su cuenta;"
	    + " no están completos");
    else {
      if (!numerico(banco) || !numerico(sucursal) ||
          !numerico(dc) || !numerico(cuenta))
        alert("Por favor, introduzca correctamente los datos de su "
         + "cuenta; no son numericos");
      else {
        if (!(obtenerDigito("00" + banco + sucursal) ==
              parseInt(dc.charAt(0))) || 
            !(obtenerDigito(cuenta) ==
              parseInt(dc.charAt(1))))
          alert("Los dígitos de control no se corresponden con los demás"
            + " números de la cuenta");
	    else
          alert ("CCC correcto");
      }
    }
  }
}
