

 const solicitarDato = (mensaje) => {return prompt(mensaje)} ;

 function validarUsuario (dato) {
   return dato !== null && dato !== "" && /^[A-Za-z\s]+$/.test(dato);
 }
 
 function validarCUIT(dato) {
  return dato !== null && dato.length !== 11 && !/^\d{11}$/.test(dato)
 }
 
// esta funcion loguin es mi programa principal 

 function loguin() {
   let nombre;
   let apellido;
   let cuit;
   let datos = false; 


   
   while (!datos ){
      nombre = solicitarDato ("Ingrese su nombre")   
      apellido = solicitarDato ("Ingrese su apellido") 
      cuit = solicitarDato ("Ingrese su CUIT con el siguiente formato XX-XXXXXXXX-X")

      
     if (validarUsuario(nombre)&& validarUsuario(apellido)&&validarCUIT(cuit)){
         datos = true
     } else {
      alert ("Nombre, apellidos, o CUIT no validos. Ingrese nuevamente.")
     }
   }

   alert ("Registro correctamente. Su usuario es: " + nombre + " " + apellido)
   
 }

 function miFuncion() {
  loguin();
}


document.getElementById("submit").onclick = miFuncion;


