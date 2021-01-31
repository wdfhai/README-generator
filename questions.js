const langTypes = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C or C++', 'R', 'other'];
const frameworks = ['Bootstrap', 'Foundation', 'JQuery', 'NodeJS', 'others'];
const licenseTypes = ['MIT', 'MPL_2', 'WTFPL', 'CC', 'ZLIB', 'UNLICENSE', 'APACHE_2', 'Other'];
const contactTypes = ['LinkedIn', 'Twitter', 'Discord', 'Slack', 'Text', 'other(mention in next answer)'];

const questions = [
    {
        type:'input',
        message: 'Q1. What is the title of your project?',
        name: 'title',
    },{
        type:'input',
        message: 'Q2. Enter a tagline or motto for your project.',
        name: 'app_tagline',
    },{
        type:'input',
        message: 'Q3. What is the deployed link for your web application? Copy from your browser and paste here',
        name: 'app_link',
    },{
        type:'input',
        message: 'Q4. Please enter the link to the preview image of your app. ? If the image is hosted in your repo, type in the path relative to your index.html file (e.g., ./image/preview.png).',
        name: 'app_preview',
    },{
        type:'input',
        message: 'Q5. Describe the purpose of this application? What is it designed to do?',
        name: 'app_desc',
    },{
        type:'input',
        message: 'Q6. How should a user use your application? Include any special instructions you might have.',
        name: 'app_usage',
    },{
        type:'input',
        message: 'Q7. Is there installation required? If so, please explain.',
        name: 'app_install',
    },{
        type:'checkbox',
        message: 'Q8. What languages did did you use? Select all that apply.',
        choices: langTypes,
        name: 'app_lang',
    },{
        type:'checkbox',
        message: 'Q9. What frameworks or libraries did you use? Select all that apply.',
        choices: frameworks,
        name: 'app_frameworks',
    },{
        type:'list',
        message: 'Q10. Select the license your project is being distributed under on GitHub',
        choices: licenseTypes,
        name: 'app_license',
    },{
        type:'input',
        message: 'Q11. Enter your GitHub username.',
        name: 'github_name',
    },{
        type:'input',
        message: 'Q12. Enter your email address.',
        name: 'email',
    },{
        type:'list',
        message: 'Q13.p1. Which platform should someone try to reach you at regarding any questions or comments?',
        choices: contactTypes,
        name: 'contact',
    },{
        type:'input',
        message: 'Q13.p2. Enter your contact details for the platform above.',
        name: 'contact_details',
    },{
        type:'input',
        message: 'Q14. Leave a concise message as a summary for your application.',
        name: 'summary',  
    }
];



module.exports = questions;