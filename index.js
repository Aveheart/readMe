// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');
inquirer
 .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',

    },
    {
        type: 'input',
        message: 'How would one install your project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How would one use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give credit to anyone or anything thats due',
        name: 'credit',
    },
    {
        type: 'list',
        massage: 'Which license will you use?',
        choices: ["MIT", "Mozilla", "GNU General Public"],
        name: 'license',
    },

 ])