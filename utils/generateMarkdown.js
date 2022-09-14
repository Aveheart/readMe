// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === undefined){
    return "";
  }else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === undefined){
    return "";
  }else if (license === "MIT") {
    return `[license](https://opensource.org/licenses/MIT)`
  } else if (license === "Mozilla"){
    return `[license](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return `[license](https://opensource.org/licenses/lgpl-3.0.html)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === undefined) {
    return "";
  }else if (license === "MIT") {
    return `This project is licensed under the MIT License. For the full license see this link: ${renderLicenseLink(license)}`
  } else if (license === "Mozilla"){
    return `This project is licensed under the Mozilla Public License. For the full license see this link: ${renderLicenseLink(license)}`
  } else {
    return `This project is licensed under the GNU General Public License. For the full license see this link: ${renderLicenseLink(license)}`
  }
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
