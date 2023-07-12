var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var operator = document.getElementById("operator");
var calculateButton = document.getElementById("submitButton");
var resultObject = document.getElementById("resultObject");
var firstNumberNum;
var secondNumberNum;
var operatorSymbol;
var result;

calculateButton.addEventListener("click", function(){
    firstNumberNum = firstNumber.value;
    secondNumberNum = secondNumber.value;
    operatorSymbol = operator.value;
    firstNumberNum = parseInt(firstNumberNum, 10);
    secondNumberNum = parseInt(secondNumberNum, 10);
    switch(operatorSymbol){
        case "+":
            result = firstNumberNum + secondNumberNum;
            break;
        case "-":
            result = firstNumberNum - secondNumberNum;
            break;
        case "*":
            result = firstNumberNum * secondNumberNum;
            break;
        case "/":
            result = firstNumberNum / secondNumberNum;
            if(firstNumberNum == 0 && secondNumberNum == 0){
                result = "Estamos graciosos hoy";
            }
            break;
    }
    resultObject.innerHTML = result;
});