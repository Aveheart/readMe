// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
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
        message: 'Please list contributors',
        name: 'credit',
    },
    {
        type: 'list',
        massage: 'Which license will you use?',
        choices: ["MIT", "Mozilla", "GNU General Public", "None"],
        name: 'license',
    },

 ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = 'readMe.md';
    const data = generateMarkdown(data);

    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
