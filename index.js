const fs = require('fs');
const inquirer = require ('inquirer');
const questions = require ('./questions');
const buildReadmeTemplate = require ('./template')

const langTypes = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C or C++', 'R', 'other'];
const frameworks = ['Bootstrap', 'Foundation', 'JQuery', 'NodeJS', 'others'];
const licenseTypes = ['MIT', 'MPL_2', 'WTFPL', 'CC', 'ZLIB', 'UNLICENSE', 'APACHE_2', 'Other'];
const contactTypes = ['LinkedIn', 'Twitter', 'Discord', 'Email', 'Slack', 'Text', 'other(mention in next answer)'];
const licenseBadge = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    APACHE_2: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MPL_2: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    ZLIB: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    CC: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
}


async function generateFile() {
    try {
        const response = await inquirer.prompt(questions);

        const readme = buildReadmeTemplate(response);
    
        fs.writeFileSync('./readme.md', readme);
    
        console.log('File was successfully written. Enjoy your README file!');

    } catch (error) {
        console.log(error);
    }
}

generateFile();












// inquirer.prompt([{
//     type:'confirm',
//     message: 'Welcome. Are you ready to create your README file?',
//     name: 'app_ready',
// },{
//     type:'input',
//     message: 'Q1. What is the name of your repository?',
//     name: 'repo_name',
// },{
//     type:'input',
//     message: 'Q2. What is the name of your web application?',
//     name: 'app_name',
// },{
//     type:'input',
//     message: 'Q3. What is the deployed link for your web application? Copy from your browser and paste here',
//     name: 'app_link',
// },{
//     type:'input',
//     message: 'Q4. Please enter the link to the preview image of your app. ? If the image is hosted in your repo, type in the path relative to your index.html file (e.g., ./image/preview.png).',
//     name: 'app_preview',
// },{
//     type:'input',
//     message: 'Q5. What type of license are you using for this application? If none, type "none".',
//     name: 'app_license',
// },{
//     type:'input',
//     message: 'Q6. Describe the purpose of this application? What is it designed to do?',
//     name: 'app_desc',
// },{
//     type:'input',
//     message: 'Q7. How should a user use your application? Include any special instructions you might have',
//     name: 'app_usage',
// },{
//     type:'input',
//     message: 'Q8. Is there installation required? If so, please explain.',
//     name: 'app_install',
// },{
//     type:'input',
//     message: 'Q9. Where did you get the idea for this app? What was your inspiration or targeted problem?',
//     name: 'app_idea',
// },{
//     type:'checkbox',
//     message: 'Q10. What languages did did you use? Select all that apply.',
//     choices: langTypes,
//     name: 'app_lang',
// },{
//     type:'input',
//     message: 'Q11. What third party libraries did you use? These include "Bootstrap", "Foundation", "JQuery", etc. (Type them in separated by a comma)',
//     name: 'app_libs',
// },{
//     type:'input',
//     message: 'Q12. Did you use any APIs, such as "moment.js", "google.apis", "openWeatherMap", etc? If so, please type them here (separated by commas)',
//     name: 'app_apis',
// },{
//     type:'input',
//     message: 'Q13. Does your app have any special features you would like to mention?',
//     name: 'app_feat',
// },{
//     type:'input',
//     message: 'Q14. Did you have any contributors or teammates on this app? If so, please mention their names and a link to their GitHub or LinkedIn profile.',
//     name: 'app_team',
// },{
//     type:'input',
//     message: 'Q15. Enter your GitHub username.',
//     name: 'app_gitHub_name',
// },{
//     type:'list',
//     message: 'Q16.p1. Which platform should someone try to reach you at regarding any questions or comments?',
//     choices: contactTypes,
//     name: 'app_contact',
// },{
//     type:'input',
//     message: 'Q16.p2. Enter your contact details for the platform above.',
//     name: 'app_contact_details',
// },{
//     type:'input',
//     message: 'Q17. Leave a concise message as a summary for your application.',
//     name: 'app_summary',

// }]).then((response)=>{
//     const text = `
//         repo name: ${chalk.red(response.repo_name) || 'none'}
//         app name: ${chalk.green(response.app_name) || 'none'}
//         deployed link: ${chalk.blue(response.app_link) || 'none'}
//         app preview: ${chalk.bgRed(response.app_preview) || 'none'}
//         app license: ${chalk.magenta(response.app_license) || 'none'}
//         app description: ${chalk.green(response.app_desc) || 'none'}
//         app inspiration: ${chalk.red(response.app_idea) || 'none'}
//         app installation: ${chalk.green(response.app_install) || 'none'}
//         app usage: ${chalk.green(response.app_usage) || 'none'}
//         web languages used: ${chalk.magenta(response.app_lang) || 'none'}
//         third party libraries used: ${chalk.blue(response.app_libs) || 'none'}
//         APIs used: ${chalk.yellow(response.app_apis) || 'none'}
//         features: ${chalk.yellow(response.app_feat) || 'none'}
//         contributors: ${chalk.blue(response.app_team) || 'none'}
//         GitHub Username : ${chalk.blue(response.app_gitHub_name) || 'none'}
//         contact info: ${chalk.red(response.app_contact) || 'none'}
//         contact details: ${chalk.magenta(response.app_contact_details) || 'none'}
//         summary: ${chalk.green(response.app_summary) || 'none'}
//     `;

    // console.log('Thanks. Your file has been generated!');
    // console.log('============================================================================================================');
    // const answers = "answers = " + `${JSON.stringify(response)}\n`;
    // fs.writeFile("responses.txt", answers , (err) => (err) ? console.log(error) : console.log("success!"));

    













// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
