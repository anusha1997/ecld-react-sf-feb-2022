//ASSIGNMENT 1
//Write a function named addNumbers which takes two numbers as input and return their sum

function addNumbers(num1,num2){
    var sum = num1 + num2 ;
    return sum;
}
console.log(addNumbers(11,10));

//ASSIGNMENT 2
//Write a function to find the absolute difference of two numbers

function diffNumbers(num1,num2){
    var diff = num1 - num2;
    return diffr = Math.abs(diff);
}
console.log(diffNumbers(4,12));

//ASSIGNMENT 3
//Write a function isOdd which returns a boolean value based the number is odd or not

function isOdd(num){
    if(num % 2 !== 0){
        return true;
    } 
    return false;
}
console.log(isOdd(11));

//ASSIGNMENT 4
//Write a function which prints the odd numbers from 0 to a given limit(included)

function oddNumbers(){
    for(i = 0; i <= 20 ; i++){
        if(i % 2 !== 0){
           console.log(i);
        }
    }
}
oddNumbers();

//ASSIGNMENT 5
//Write a function to calculate the average of an array. If there are no items in the array it should return 0

let sum = 0;
  function average(limit, array){
      if(n === 0){
          return 0;
      } else {
          for(i = 0; i <= limit;i++){
              sum = sum + i;
          }
          let avg = sum/limit;
          console.log(avg);
      }
  }
  let array = [];
  let n = array.length;
console.log(average(n,array));

//ASSIGNMENT 6
//Write a function to convert a character to lower case

let word = "HELLO WORLD";
function toLower(){
console.log(word.toLowerCase());
}
toLower();