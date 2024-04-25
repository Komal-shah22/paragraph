#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold.italic("\n              ASSALAM-O-ALIKUM\n"));
console.log(chalk.yellow.bold.italic("\n  Please one of the following question to create the paragraph\n"));

let result:any = await inquirer.prompt([{
    name:"name",
    type:"input",
    message:chalk.blue.bold.italic("What is your name...."),
},
{
    name:"father",
    type:"input",
    message:chalk.blue.bold.italic("What is your father name....")
},
{
    name:"age",
    type :"input",
    message:chalk.blue.bold.italic("whats your age...."),

},
{
   name:"class",
   type:"input",
   message:chalk.blue.bold.italic("In which class do you read....")
},
{
    name:"course",
    type:"checkbox",
    message:chalk.blue.bold.italic("SELECT ONE OF THESE...."),
    choices:["CLOUD COMPUTING","BLOCKCHAIN","METAVERSE"]
},
{
    name:"live",
    type:"input",
    message:chalk.blue.bold.italic("where do you live...")
},
{
    name:"hobby",
    type:"input",
    message:chalk.blue.bold.italic("what is your favrouit hobby....")
},
{
    name:"dream",
    type:"input",
    message:chalk.blue.bold.italic("what is your dream....")
}
]);
const newarr =chalk.red.bold.italic(`\nHello! My self ${result.name} & my father name is ${result.father} i am ${result.age} years old and a ${result.class} grade student. i am currently taking a ${result.course} course.I live in ${result.live}, then my favourit hobby is ${result.hobby} & then my dream is ${result.dream}.`);
console.log(newarr);
console.log(chalk.yellow.bold.italic(`\n                     THANKS`));






