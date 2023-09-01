"use strict";
//Exercise #1 Develop a program that calculates and prints the sum of the first five  even numbers using a for loop.
let sum = 0;
for (let i = 2; i <= 10; i += 2) {
    sum += i;
}
console.log("The sum of the first five even numbers is: " + sum);
//Exercise #2 Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let evenNumbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] % 2 === 0) {
        console.log("Even Numbers:", evenNumbers[i]);
    }
}
//Exercise #3 Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let oddnumbers = [1, 2, 3, 4, 5, 6];
for (let o = 0; o < oddnumbers.length; o++) {
    if (oddnumbers[o] % 2 === 0) {
        oddnumbers.splice(o, 1);
        o--;
    }
}
console.log("Odd Numbers:", oddnumbers);
//Exercise #4 Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateAreaOfCircle(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}
const radius = 5;
const area = calculateAreaOfCircle(radius);
console.log("The Calculated Area Of Cricle:", area);
//Exercise #5 Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let studentGrades = [80, 47, 70, 30, 90, 60, 51, 48, 49, 45];
for (let sG = 0; sG < studentGrades.length; sG++) {
    if (studentGrades[sG] < 50) {
        studentGrades.splice(sG, 1);
        sG--;
    }
}
console.log("Grades Above 50:", studentGrades);
//Exercise #6 Write a program that uses a function to find the largest element in an array of numbers.
function findLargest(num) {
    let largest = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
console.log("Largest Number Is.", findLargest([1, 2, 3, 4, 5]));
