function getSum(firstNumber, secondNumber) {
    sum = firstNumber + secondNumber;
    return sum;
}
function getDifference(firstNumber, secondNumber) {
    difference = firstNumber - secondNumber;
    return difference;
}

function getAverage(num1,num2, num3) {
    average = (num1 + num2) / num3;
    return average;
}


function runCalculations() {
   let sum = getSum(5, 25);
   console.log("The sum of two numbers is: " + sum);
   let difference = getDifference(22, 1);
   console.log("The difference of two numbers is: " + difference);
   let average = getAverage(15,5,2);
   console.log("The average is: " + average);
}



runCalculations();