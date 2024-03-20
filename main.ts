#! /usr/bin/env node

import inquirer from "inquirer";

const sample = await inquirer.prompt([{
    message: "Enter your frist number",
    type: "number",
    name: "fristNumber"
},
{
    message: "Enter your second number",
    type: "number",
    name: "secondNumber"
},

{
    message: " sign operator",
    type: "list",
    choices: ["Addition", "Subtraction", "Multipication", "Division"],
    name: "operator",
},

])
if (sample.operator === "Addition") { console.log(sample.fristNumber + sample.secondNumber) }
else if (sample.operator === "Subtraction") { console.log(sample.fristNumber - sample.secondNumber) }
else if (sample.operator === "Multipication") { console.log(sample.fristNumber * sample.secondNumber) }
else if (sample.operator === "Division") { console.log(sample.fristNumber / sample.secondNumber) }
else {
    console.log("pleses enter valid value")

}