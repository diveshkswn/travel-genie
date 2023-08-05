/* eslint-disable no-undef */
const scanner = require('sonarqube-scanner');


const token =  process.argv[2];

scanner(
  {
    serverUrl : 'https://sonarcloud.io',
    token : token,
    options: {
      'sonar.projectName': 'travel-genie',
      'sonar.projectDescription': 'travel-genie app',
      "sonar.organization" : "personal-github-organization"
    }
  },
  () => process.exit()
)