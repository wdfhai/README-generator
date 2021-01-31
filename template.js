const licenseBadge = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    APACHE_2: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MPL_2: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    ZLIB: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    CC: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
}

// const getBadge = (response) => {
//     const licenseBadge.${(response.license)};
//     console.log(l);
// };
const buildReadmeTemplate = (response) =>
`
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">

    <h3 align="center">${(response.title)}</h3>

    <p align="center">
    ${(response.app_tagline)}
    <br />
    <br />
    <a href="${(response.app_link)}">View Demo</a>
    </p>
</p>

<img src="${(response.app_preview)}" alt="project preview img" style="height: 250px; width: 300px;">

<details open="open">
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#about-the-project">Description</a></li>
        <li><a href="#built-with">Built With</a></li></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#summary">Summary</a></li>
    </ol>
</details>

### Description

${(response.app_desc)}

### Built With

Following languages, frameworks and libraries were used in the development of this project:

- ${(response.app_lang)}
- ${(response.app_frameworks)}

### Installation

${(response.app_install)}

### Usage

${(response.app_usage)}

### Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

### License

This project is using the following license: ${(response.app_license)}

### Contact

- My Github name is ${(response.github_name)}.
- For any questions or comments, please reach out to me on ${(response.contact)} at ${(response.contact_details)}.

### Summary

${(response.summary)}
`

module.exports = buildReadmeTemplate;