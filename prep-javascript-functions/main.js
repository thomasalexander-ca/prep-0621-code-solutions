function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('addTwoNumbersResult:', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('addAndMultipyresults:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('productDividedByFive:', productDividedByFive);

function subtractTwoNumber(num1, num2) {
  var result = num1 - num2;
  return result;

}

var difference = subtractTwoNumber(22, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  var result = (2 * Math.PI) * radius;
  return result;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getfullname(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getfullname('Thomas', 'Alexander');
console.log('fullName:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}

var cubed = cube(5);
console.log('cubed:', cubed);
