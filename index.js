#! /usr/bin/env node
import inquirer from "inquirer";
// 1) when we run this code computer will genrate a random number
// 2) user input for guessing number
// 3) comparing user input with computer genrated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 _ 10:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
