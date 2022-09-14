// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
    
return inquirer
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
        name: 'install',
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
        type: 'input',
        message: 'Enter your test instructions',
        name:'test'
    },
    {
        type: 'list',
        massage: 'Which license will you use?',
        choices: ["MIT", "Mozilla", "GNU General Public"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'enter github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'enter email',
        name: 'email',
    },

 ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, err =>{
        if (err) throw new Error(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(writeToFile);
}

// Function call to initialize app
init()
