#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n>>>>>>>>"), chalk.bold.yellowBright.italic("Wellcome"), chalk.bold.red.italic("to"), chalk.bold.blue.italic("Student"), chalk.bold.yellow.italic("Management"), chalk.bold.cyan.italic("System"), chalk.bold.green("<<<<<<<<\n"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let my_balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: chalk.italic.bold("Enter student name:"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.bold("please enter a non-empty value.");
        },
    },
    {
        name: "courses",
        type: "list",
        message: (chalk.italic.bold("\nSelect the course to enrolled")),
        choices: ["MS Office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFee = {
    "MS Office": 2000,
    "HTML": 2500,
    "Javascript": 4000,
    "Typescript": 5000,
    "Python": 7500
};
console.log(`\n Tution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${my_balance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.italic.bold("\nSelect any one account for paiying fees"),
        choices: ["Bank Transfer", "Easypaisa", "JazzCash",]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    }
]);
console.log(`\n Your payment Transation is: ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(chalk.bold.italic(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`));
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.italic.bold("what would you like to do next?"),
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log(chalk.green("\n*"), chalk.green("*"), chalk.blue("*"), chalk.yellow("*"), chalk.cyan("*"), chalk.red("*"), chalk.bold.italic.white("Status"), chalk.cyanBright("*"), chalk.green("*"), chalk.blue("*"), chalk.yellow("*"), chalk.cyan("*"), chalk.red("*"));
        console.log(chalk.bold(`Name: ${answer.students}`));
        console.log(chalk.bold(`Roll No: ${randomNumber}`));
        console.log(chalk.bold(`Course: ${answer.courses}`));
        console.log(chalk.bold(`Tution Fees Paid: ${paymentAmount}`));
        console.log(chalk.bold(`Balance: ${my_balance += paymentAmount}`));
    }
    else {
        console.log(chalk.italic("\nExiting Student Management System\n"));
    }
}
else {
    console.log("\nInvalid amount due to course\n");
}
