//ASSIGNMENT 1
//If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"

let year = 2027;
if(year % 4 === 0){
    console.log("LEAP YEAR");
} else if( year % 100 === 0){
     console.log("LEAP YEAR");
} else if( year % 400 === 0){
    console.log("LEAP YEAR");
} else {
    console.log("NOT LEAP YEAR");
}

//ASSIGNMENT 2
// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

let currentYear = 2022;
let birthYear = 1997;
let age = currentYear - birthYear;

if(age > 18){
    console.log("YES the person can vote");
} else {
    console.log("NO the person can't vote");
}
//ASSIGNMENT 3
//Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

let  X = 'z';
console.log('\n');
if(X == 'a'||  X == 'e'|| X == 'i' || X == 'o' || X == 'u' || X == 'A'||  X == 'E'|| X == 'I' || X == 'O' || X == 'U'){
console.log("V");
}else {
    console.log("C");
}

//ASSIGNMENT 4
//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

let pin ='673521';
console.log('\n');
if(pin.length == 6){
    console.log("VALID");
}else {
    console.log("INVALID");
}

//ASSIGNMENT 5
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let WEST = "GUJARATH";
let EAST = "NAGALAND";
let SOUTH = "KERALA";
let NORTH = "JAMMU";

let state = "JAMMU";
console.log('\n');
if(state == 'KERALA'){
    console.log(state+ " IS IN SOUTH");
}else if( state == "GUJARATH"){
    console.log(state+ " IS IN WEST");
}else if(state == "NAGALAND"){
    console.log(state+ " IS IN EAST");
}else {
    console.log(state+ " IS IN NORTH");
}

//ASSIGNMENT 6
//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)

let num = 8;
let result = num % 2 == 0 ? "EVEN":"ODD";
console.log('\n');
console.log(result);

//ASSIGNMENT 7
//Given two numbers a, b Print the below statements based on the condition
//"A > B"
//"A < B"
//"A = B" Note: Use Ternary Operators

let a = 10;
let b = 20;
let answer = a > b ? "A > B" : a < b ? "A < B" :"A = B";
console.log('\n');
console.log(answer);

//ASSIGNMENT 8
//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

let S = "Small";
let M = "Medium";
let L = "Large";
let XL = "Extra Large";

let size = "Large";
let value = size == S ? "Small" : size == M ? "Medium" : size == L ? "Large" : size == XL ? "Extra Large" : "Not a valid code";
console.log('\n');
console.log(value);
