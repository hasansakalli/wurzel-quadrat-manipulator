

function myFunction() {
  const inputNumber = document.getElementById("inputNumber");
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const operation = document.getElementById("operation").value;

  if ((operation == "wurzel")) {
    
    result1.innerHTML = `Die Wurzel der Zahl  ${inputNumber.value} ist` ;
    result2.innerHTML =`${ Math.sqrt(inputNumber.value).toFixed(2)}`
  




  } else if ((operation== "quadrat")) {
    result1.innerHTML = `Das Quadrat von ${inputNumber.value}  ist` ;
    result2.innerHTML = ` ${ inputNumber.value*inputNumber.value}` ;
    console.log(sonuc);
  
  console.log(operation)
}
}
