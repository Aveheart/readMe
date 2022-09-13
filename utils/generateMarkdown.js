// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === undefined){
    return "";
  }else if
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === undefined){
    return "";
  }else if
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === undefined) {
    return "";
  }else if
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
## Contributing
${data.contribute}
## Tests
${data.test}
## Questions?
My Github: [Github](https://github.com/${data.github})
Have any questions or want to contribute? Feel free to email me here: [email](${data.email})
`;
}

module.exports = generateMarkdown;
