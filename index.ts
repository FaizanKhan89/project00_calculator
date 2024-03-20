#! /usr/bin/env node  //npx command
//SHABANG

import inquirer from "inquirer";
//Array[]
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"], 
  },
]);

//Conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}
else{
    console.log("Please Select Valid Operator")
}
