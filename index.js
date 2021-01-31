const fs = require('fs');
const inquirer = require ('inquirer');
const chalk = require ('chalk');
const questions = require ('./questions');
const buildReadmeTemplate = require ('./template')

const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    APACHE_2: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MPL_2: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    ZLIB: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    CC: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
}

const greeting = 
`

                            ${chalk.bold.magenta('Welcome to my README Generator!')}

        ${chalk.green('This application will generate a markdown file for your project using your responses.')}

`;
const generationError = 
`

    ${chalk.red('Looks like there was an error creating your README file. Please address the error or report it, and restart the application')}

`

const goodbye = 
`

    ${chalk.blueBright('Thank you. Your README file was successfully written. Check it out. Cheers!')}
`;

console.clear();
console.log(greeting);

async function generateFile() {
    try {
        const response = await inquirer.prompt(questions);

        const licenseType = response.app_license;
        const licenseBadge = licenseBadges[licenseType];

        const readme = buildReadmeTemplate(response, licenseBadge);
    
        fs.writeFileSync('./readme.md', readme);
    
        console.log(goodbye);

    } catch (error) {
        console.log(error);
        console.log(generationError);
    }
}

generateFile();