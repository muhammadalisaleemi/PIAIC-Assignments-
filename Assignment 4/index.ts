//Exercise #1 Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
{
  console.log(
    "Exercise #1 Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array."
  );

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function callN(array: number[], index: number, value: number) {
    array.splice(index, 0, value);
    return array;
  }
  console.log(callN(array, 9, 10));
}

//Exercise # 2 Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
{
  console.log(
    " Exercise # 2 Implement a simple shopping cart program using an array. Create functions to add items remove items and update quantities using the splice method Print the cart's contents after each operation"
  );
  let shoppingCart: string[] = ["Alo", "Palak", "Doodh"];
  function addItems(itemIndex: number, itemName: string) {
    shoppingCart.splice(itemIndex, 0, itemName);
    return shoppingCart;
  }
  console.log("Before Adding", shoppingCart);
  console.log("After Adding");
  console.log(addItems(1, "Makhn"));
}

//Exercise # 3 Write a program that uses a while loop to print the first 25 integers
{
  console.log(
    "Exercise # 3 Write a program that uses a while loop to print the first 25 integers"
  );

  console.log("Before loop");

  var index: number;
  index = 1;
  var num: number;
  num = 1;
  while (index <= 25) {
    console.log(num * index);
    index = index + 1;
    console.log("After loop");
  }
}

//Exercise # 4 Write a program that uses a while loop to print the first 10 even numbers.
{
  console.log(
    "Exercise # 4 Write a program that uses a while loop to print the first 10 even numbers."
  );

  let loop: number = 1;
  while (loop <= 10) {
    if (loop % 2 == 0) {
      console.log(loop, "Even Numbers In 10");
    }
    loop += 1;
  }
}

//Exercise # 5 Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
{
  console.log(
    "Exercise # 5 Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number."
  );
  function factorial(num: number): number {
    let result = 1;
    while (num > 1) {
      result *= num;
      num -= 1;
    }
    return result;
  }
  let num1 = 5;
  console.log(`Factorial of ${num1} is: `);
  console.log(factorial(num1));
}
// Exercise # 6 Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
{
  console.log(
    "Exercise # 6 Write a program having an array of numbers if the number is negative it should remove the negative number from the array."
  );

  let numbers = [10, 20, 30, -50, 60, -70];

  numbers = numbers.filter((number) => number >= 0);

  console.log(numbers);
}
//Exercise # 7 Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
{
  console.log(
    "create a function that takes an array of numbers as parameter. Use while loop to calculate and return sum of all the number in that array."
  );
  function sum(num: number[]) {
    let i = 0;
    let arraySum = 0;
    while (i < num.length) {
      arraySum += num[i];
      i++;
    }
    return arraySum;
  }
  console.log(
    "Sum of the numbers in given Array is: ",
    sum([1, 2, -3, 4, -5, 6, 7, 8, -9])
  );
}

//Exercise # 8 Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
{
  function asd(cTemp: number[]) {
    let i = 0;
    let fTemp: number[] = [];
    while (i < cTemp.length) {
      fTemp[i] = (cTemp[i] * 9) / 5 + 32;
      i++;
    }
    return fTemp;
  }

  console.log("Temperatures in Fahrenheit Are: ", asd([30, 40, 10, -3, 55]));
}
