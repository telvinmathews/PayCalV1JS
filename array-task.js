function getOddNumbersFromArray(array) {
   let grandTotal = 0;
   for (let index = 0; index < array.length; index++) {
       let currentNumber = array[index];
       let checkIfOdd = currentNumber % 2 !== 0;
       if (checkIfOdd) {
           grandTotal += currentNumber;
       }
   }
   return grandTotal;
}

let arrayOfNumbers = [1,1,2,3,4,5,5];
let oddNumbersGrandTotal = getOddNumbersFromArray(arrayOfNumbers)
console.log("Should be 15: " + oddNumbersGrandTotal);