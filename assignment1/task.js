//ASSIGNMENT 1
//Print your name, age, Marital Status by storing them in different variables

let fullName = 'Anusha';
let age = 24;
let martial = 'single';

console.log('Name:', fullName);
console.log('Age:',age);
console.log('Marital Status:', martial);

//ASSIGNMENT 2
//Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
//Print all the three variable types (one per line in the given order)

let gender = "female";
let height = 63;
let non_veg = "pulav";
console.log('\n');
console.log('Typeof Gender:', typeof(gender));
console.log('Typeof Height:', typeof(height));
console.log('Typeof Non-Veg:', typeof(non_veg));

//ASSIGNMENT 3
//Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)

let yearOfBirth = 1997;
let currentYear = 2021;
let currentAge = currentYear - yearOfBirth;
console.log('\n');
console.log('Current age:',currentAge);

//ASSIGNMENT 4
//Given the 3 subjects marks of a particular student calculate the total marks obtained

let sub1 = 91;
let sub2 = 89;
let sub3 = 98;
let total = sub1 + sub2 + sub3;
console.log('\n');
console.log('Total mark obtained by the student:', total);

//ASSIGNMENT 5
//Given the sides of a rectangle print the perimeter and area

let length = 10;
let breadth = 8;
let perimeter = 2 *(length + breadth);
let area = length * breadth;
console.log('\n');
console.log('Perimeter:', perimeter);
console.log('Area:', area);

//ASSIGNMENT 6
//Given a number of total months find the number of months remaining after converting the total months to years

let totalMonths = 33;
let remainingMonths = totalMonths % 12;
console.log('\n');
console.log('Remaining Months:', remainingMonths);

//ASSIGNMENT 7
//Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount

let principalAmount = 2000;
let interest = 20;
let time = 2;
let simpleInterest = (principalAmount * interest * time)/100 ;
console.log('\n');
console.log('Simple Interest:', simpleInterest);

//ASSIGNMENT 8
//Given the marks of 6 students in a class calculate their average marks

let student1 = 95;
let student2 = 89;
let student3 = 85;
let student4 = 89;
let student5 = 96;
let student6 = 93;
let averageMark = (student1 + student2 + student3 + student4 + student5 + student6 )/6
console.log('\n');
console.log('Average Mark:', averageMark);

//ASSIGNMENT 9
//Given 3 product prices and their quantity calculate the total amount of items in the cart

let product1 = 670;
let quantity1 = 3;
let product2 = 800;
let quantity2 = 5;
let product3 = 500;
let quantity3 = 2;
let totalAmount = ((product1 * quantity1) + (product2 * quantity2) + (product3 * quantity3));
console.log('\n');
console.log('Total Aomunt:' ,totalAmount);

////ASSIGNMENT 10
//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount

let priceOfProduct1 = 78;
let quantityOfProduct1 = 3;
let discountForProduct1 = 8;
let taxForProduct1 = 15;

let priceOfProduct2 = 80;
let quantityOfProduct2 = 5;
let discountForProduct2 = 10;
let taxForProduct2 = 17;

let tipPercentage = 6;

let totalForProduct1 = priceOfProduct1 * quantityOfProduct1 * [( 100 - discountForProduct1) / 100] * [(100 + taxForProduct1) / 100];
let totalForProduct2 = priceOfProduct1 * quantityOfProduct2 * [( 100 - discountForProduct2) / 100] * [(100 + taxForProduct2) / 100];

let grossTotal = totalForProduct1 + totalForProduct2;
let netTotal = grossTotal * [(100 - tipPercentage ) / 100];
console.log('\n');
console.log('Net Total:', grossTotal);
console.log('Gross Total:', netTotal);

