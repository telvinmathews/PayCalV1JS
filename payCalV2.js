let hoursWorked = prompt("How many hours have you worked?: ");
let payRate = 7.25;
let totalPay = hoursWorked * payRate;
const workedOverTime = hoursWorked > 40;
let overTimeHours = hoursWorked - 40;
let overTimePayRate = payRate * 1.5;
let totalPayWithOverTime = (payRate * 40) + (overTimeHours * overTimePayRate);

if (hoursWorked > 40) {
    console.log("Your total pay with overtime is: " + totalPayWithOverTime + "!");
    alert("Your total pay with overtime is: " + totalPayWithOverTime + "!");
} else {
    console.log("Your total pay is: " + totalPay + "!");
    alert("Your total pay is: " + totalPay + "!");
}