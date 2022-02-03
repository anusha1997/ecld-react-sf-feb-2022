//ASSIGNMENT 1
//Define a variable count Print your name using while loop the no of times the value assigned to the variable count

let count = 10;
let i = 0;
while(i < count){
    console.log('\n');
     console.log("Anusha");
    i++;
}

//ASSIGNMENT 2
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit
let limit = 10;
for(i=0;i<limit;i++){
    console.log('\n');
    console.log("Anusha");
    i++;
}

//ASSIGNMENT 3
//Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25
let start = 20;
let end = 25;
while(end>=start){
    console.log('\n');
    console.log(end);
    end--;
}

//ASSIGNMENT 4
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4

for(let i = 13;i >= 1;i -= 4){
    console.log('\n');
    console.log(i);
}

//ASSIGNMENT 5
//Print the average of all the numbers from 1 to given limit
//Sample Limit - 5, 

let limit1 = 100;
let start1 = 1;
let sum = 0;
for(let i = start1;i < limit1; i++){
    sum += i;
}
let average = sum/limit1;
console.log('\n');
console.log("average =", average);

//ASSIGNMENT 6
// Find out the average of the first 100 n natural numbers using for loop.

let sum1 = 0;
for(i = 1; i <= 100; i++){
    sum1 = sum1 + i;
}
let average1 = sum1/100
console.log('\n');
console.log("average =", average1);

//ASSIGNMENT 7
//Print all the multiples of 3 till 100 using for loop

for(let i = 3; i <= 100; i = i + 3){
    console.log('\n');
    console.log(i);
}

//ASSIGNMENT 8
//Given a string print all the consonants which are not a,e,i,o,u using for loop.
//Hint: use && operator and !== ‘a’ like this inside a conditional statement.

let string1 = 'India';
for(let i = 0; i <string1.length; i++){
    if(string1[i] !== 'a' &&
    string1[i] !== 'e' &&
    string1[i] !== 'i' &&
    string1[i] !== 'o' &&
    string1[i] !== 'u' &&
    string1[i] !== 'A' &&
    string1[i] !== 'E' &&
    string1[i] !== 'I' &&
    string1[i] !== 'O' &&
    string1[i] !== 'U' ){

        console.log('\n');
        console.log(string1[i]);
    }

}

//ASSIGNMENT 9
//Given a string find out the length of that string

let string = 'Calicut';
console.log('\n');
console.log(string.length);


//ASSIGNMENT 10
//Given a string, print the first character and last character of that string.

let string2 = 'Vadakara';
console.log('\n');
console.log(string2[0]);
console.log(string2[string2.length - 1]);

//ASSIGNMENT 11
//Given a string print the odd indexes of that string using for loop

let string3 = 'Kannur';
for(let i = 1; i < string3.length; i = i + 2){
    console.log('\n');
    console.log(string3[i]);
}

//ASSIGNMENT 12
//Find out the sum of the first 10 natural numbers using for loop

let sum3 = 0;
for(i = 1; i<=10; i++){
    sum3 = sum3 + i
   
}
console.log('\n');
console.log(sum3);