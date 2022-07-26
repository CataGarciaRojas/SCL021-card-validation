const validator = {
  // Validamos CreditCard
  isValid(creditCardNumber) {
    console.log ("number card: " + creditCardNumber)
    let newDigits = 0;
    let arrCreditCardNumber = Array.from(creditCardNumber)
    //console.log("este es el arreglo de la tarjeta " + arrCreditCardNumber)
    //var reversed = arrCreditCardNumber.reverse();
    //console.log("esta es la reversa de los num " + reversed)
    for (let i = 0; i < arrCreditCardNumber.length; i++) { //for para iterar a través de cada dígito de creditCardNumber
      console.log("indice " + i + ": " + arrCreditCardNumber[i])
      //console.log("este es el digito de la tarjeta " + arrCreditCardNumber[i])
      if (i % 2 === 0) { //en el contexto del array el index es par o impar, usando el operador módulo
        let multiplicacion = parseInt(arrCreditCardNumber[i] * 2);
        //console.log("esta es la multiplicacion de mis posiciones pares " + multiplicacion)
        if (multiplicacion > 9) {
          console.log("par mayor o igual a 9")
          //console.log("la multiplicacion es mayor a ten " + multiplicacion)
          let multiplicacionArr = multiplicacion.toString().split("")
          //console.log("este es el array que divide un numero entero en dos " + multiplicacionArr)
          let sum = parseInt(multiplicacionArr[0]) + parseInt(multiplicacionArr[1])
          //console.log("este es el resultado del array " + sum)
          newDigits = newDigits + sum
        } else {
          console.log("par menor a 9")
          newDigits = newDigits + multiplicacion
        }
      } else {
        console.log("impar ")
        //console.log("sumando num de indice impar: " + arrCreditCardNumber[i])
        newDigits = newDigits + parseInt(arrCreditCardNumber[i])
      }
    }
    console.log("resultado de " + newDigits)
    console.log("resultado valid modTen: ")
    console.log(newDigits % 10 === 0)
    return (newDigits % 10) === 0;
  },

/* isValid2(value){

  if (/[^0-9-\s]+/.test(value)) return false;
  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0, bEven = false;
  value = value.replace(/\D/g, "");
  for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
  }
  return (nCheck % 10) == 0;
},*/


  //Para enmascarar la respuesta de creditCardNumber

  maskify(creditCardNumber) {
    var lastFour = "";
    lastFour = creditCardNumber.slice(-4);
    var maskedNumbers = "";
    for (var i = (creditCardNumber.length) - 4; i > 0; i--) {
      maskedNumbers += "#";
    }
    creditCardNumber = maskedNumbers + lastFour;
    return creditCardNumber
  }
}
export default validator;
