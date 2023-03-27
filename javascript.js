// calcutelator

let operatorType = null;

let fullNum = 0;
let firstNum = 0;
let secondNum = 0;

const calculatorText = document.getElementById("p1");

function operate() {
    secondNum = stringToInt(fullNum);
    // 4 bullshit if/else statements checking what currentOperator is ??;
    if (currentOperator == 'subtract') {
        console.log("is subtract");
            answer = firstNum - secondNum;
            //dom print answer onto calc;
            console.log(answer);
    }
    if (currentOperator == 'add') {
        console.log("is add");
        answer = firstNum + secondNum;
        //dom print answer onto calc;
        console.log(answer);
    }
    if (currentOperator == 'multiply') {
        console.log("is multiply");
        answer = firstNum * secondNum;
        //dom print answer onto calc;
        console.log(answer);
    }
    if (currentOperator == 'divide') {
        console.log("is divide");
        answer = firstNum / secondNum;
        //dom print answer onto calc;
        console.log(answer);
    }
    if (currentOperator == 'remainder') {
        console.log("is remainder");
            answer = firstNum % secondNum;
            //dom print answer onto calc;
            console.log(answer);
    }
    calculatorText.innerHTML = answer;
    fullNum = answer;
}


function stringNum (num) {
    fullNum += `${num}`;
    calculatorText.innerHTML = fullNum;
    console.log(fullNum);
}
    
function isOperator (operatorType) {
    firstNum = stringToInt(fullNum);
    fullNum = 0;
    currentOperator = operatorType;
    console.log(currentOperator);
    numPressed = null;
}

function reset () {
    currentOperator = null;
    firstNum = 0;
    secondNum = 0;
    fullNum = 0;
    calculatorText.innerHTML = fullNum;
}

function clear () { //doesnt work, cant figure out why yet. console log doesnt show when button is pressed, either.
    fullNum = 0;
    calculatorText.innerHTML = fullNum;
    console.log("cleared");
}

function stringToInt(str) {
    return parseFloat(str, 10);
}


























function clickedNum(numberPressed) {
    numBeforeLast = currentNum;
    currentNum = numberPressed;
    console.log(numBeforeLast, currentNum);
    return currentNum;
}



function clickedOperator(stars) {
    operatorClicked = stars;
    console.log(operatorClicked);
}

