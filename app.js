var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
function myFunction() {
  var isNotPrime = false;
  var inputNumber = document.getElementById("inputNumber").value;
  var operation = document.getElementById("operation").value;

  if (operation == "wurzel") {
    result1.innerHTML = `Die Wurzel der Zahl  ${inputNumber}  ist`;
    result2.innerHTML = `${Math.sqrt(inputNumber).toFixed(2)}`;
    result1.style.color = "#461d3c";
  } else if (operation == "quadrat") {
    result1.innerHTML = `Das Quadrat von ${inputNumber}  ist`;
    result2.innerHTML = ` ${inputNumber * inputNumber}`;
    result1.style.color = "#461d3c";
    console.log(sonuc);
  } else if (operation == "prime") {
    if (inputNumber == 1 || inputNumber == 0 || inputNumber < 0) {
      result1.innerHTML = inputNumber + " ist keine Primzahl";
      result1.style.color = "#461d3c";
      result2.innerHTML = "";
    } else {
      for (i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
          isNotPrime = true;
        }
      }

      if (isNotPrime) {
        result1.innerHTML = inputNumber + " ist keine Primzahl";
        result1.style.color = "#461d3c";
        result2.innerHTML = "";
      } else {
        result1.innerHTML = inputNumber + " ist eine Primzahl";
        result1.style.color = "green";
        result2.innerHTML = "";
      }
    }
  } else if (operation == "teilbarDurch2") {
    if (inputNumber % 2 == 0) {
      result1.innerHTML = inputNumber + " ist durch 2 teilbar";
      result1.style.color = "green";
    } else {
      result1.innerHTML = inputNumber + " ist nicht durch 2 teilbar";
      result1.style.color = "#461d3c";
    }
  }
}
