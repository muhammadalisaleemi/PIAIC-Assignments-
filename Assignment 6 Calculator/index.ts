import inquirer from "inquirer";

async function calculator() {
  const operations = [
    "Addition",
    "Subtraction",
    "Multiplication",
    "Modulus",
    "Division",
    "Exponent",
  ];

  const { operation } = await inquirer.prompt({
    type: "list",
    name: "operation",
    message: "Which operation would you like to perform?",
    choices: operations,
  });

  const { num1, num2 } = await inquirer.prompt([
    {
      type: "input",
      name: "num1",
      message: "Enter the first number:",
      filter: Number,
    },
    {
      type: "input",
      name: "num2",
      message: "Enter the second number:",
      filter: Number,
    },
  ]);

  let result;
  switch (operation) {
    case "Addition":
      result = num1 + num2;
      break;
    case "Subtraction":
      result = num1 - num2;
      break;
    case "Multiplication":
      result = num1 * num2;
      break;
    case "Modulus":
      result = num1 % num2;
      break;
    case "Division":
      result = num1 / num2;
      break;
    case "Exponent":
      result = Math.pow(num1, num2);
      break;
  }

  console.log(`The result of ${operation} of ${num1} and ${num2} is ${result}`);
}

calculator();
