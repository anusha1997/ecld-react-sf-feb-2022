//ASSIGNMENT 1
//Given an array of strings count all the vowel characters

let array = ['anu','manu','ramu'];
let count = 0;
for(let i = 0;i < array.length; i++){
    for(let j = 0; j < array[i].length ; j++){
        if( array[i][j] == 'a'|| array[i][j] == 'e' ||array[i][j] == 'i' ||array[i][j] == 'o' || array[i][j] == 'u' || array[i][j] == 'A' ||
        array[i][j] == 'E' || array[i][j] == 'I' ||array[i][j] == 'O' ||array[i][j] == 'U'){
            count++;
        }
    }
}
console.log(count);

//ASSIGNMENT 2
//Given a string print "YES" if it is a palindrome "NO" if it is not one
//A palindrome is a word which reads the same backward as forward, such as madam, bob
//Strings Problem

let string = 'malayalam';
let reversedString = '';

for(let i = string.length - 1 ; i >=0; i--){
    reversedString = reversedString + string[i];
    console.log(reversedString);
   
}
if(string === reversedString){
    console.log("YES");
}else {
    console.log("NO");
}

//ASSIGNMENT 3
//Given an array of marks, find out the Average

let array1 = [89, 90, 98, 87, 93];
let total = 0;
let length = array1.length;

for(let i = 0; i < length ;i++){
 total = total + array1[i]
 }
 let average = total/length;
console.log(average);

//ASSIGNMENT 4
//Given an array of strings, remove all the odd length strings from it

let strings = ['apple','orange','grapes','lemon','mango'];
let length1 = strings.length;

for(let i = 0; i < length1 ; i++){
        if(strings[i].length % 2 == 0){
            console.log(strings[i]);
        }

}

//ASSIGNMENT 5
//Given an array of numbers, change the multiples of 3 to ‘multiple’
 let array2 = [2,3,6,8,12,14,15];
 for(i = 0; i <= array2.length ; i++){
     if(array2[i] % 3 == 0){
         array2[i] = 'multiple';
     }
 }
console.log(array2);

//ASSIGNMENT 6
//Given an empty array fill that array with first 10 natural numbers
let array3 = [ ];
for(i = 1; i <=10; i++){
    array3.push(i);
}
console.log(array3);

//ASSIGNMENT 7
//Given a string split it into an array of words
let arry =[];
let wrd = '';
let str = 'coding is easy';
for(let i = 0; i<str.length;i++){
    if(str[i] == ' '){
        arry.push(wrd);
        wrd = '';
    }else {
        wrd = wrd + str[i];
    }
}arry.push(wrd);
console.log(arry);

//ASSIGNMENT 8
//Given a string print all the Characters in the odd position (Start counting with 0)

let string2 = 'kannur';
for(i = 0; i < string2.length; i++){
    if(i % 2 !== 0){
        console.log(string2[i]); 
    
    }
 }

//ASSIGNMENT 9
//Given a sentence print the count of words (Separated by a space character)

let word = '';
let arr = [];
let string4 = 'coding is easy';
for(var i = 0; i< string4.length; i++){
    if(string4[i] == ' '){
       arr.push(word);
       word = '';
    } else {
        word = word + string4[i];
        
    }
   
}
arr.push(word);
console.log(arr.length);

//ASSIGNMENT 10
//Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false
let array5 = ['react', 'html', 'edstem'];
let string5 = 'react';
let flag = 0;

for(let i=0; i<=array5.length;i++){
    if(string5 === array5[i]){
       flag = true;
    }
}
if(flag == true){
    console.log("YES");
}else {
    console.log("NO");
}
