import validator from './validator.js';

document.getElementById("botonvalidar").addEventListener("click", function () {
  let creditCardNumber = document.getElementById("tarjeta").value;
  console.log(typeof (creditCardNumber))
  if (validator.isValid(creditCardNumber)) {
    document.getElementById("validacion").innerHTML = "Su compra " +
      validator.maskify(creditCardNumber) + " ha sido completada con éxito ✓";
    document.getElementById("validacion").style.color = '#000000';
  }
  else {
    document.getElementById("validacion").innerHTML = "Su tarjeta N°" + 
      validator.maskify(creditCardNumber) + "  ha sido rechazada. ";
    document.getElementById("validacion").style.color = '#000000';
  }
},
  false); 