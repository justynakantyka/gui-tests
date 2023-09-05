# gui-tests

This repository contains the solution to the QA Automation Challenge as part of the next phase of the qualification process. It allowing me to showcase my skills in testing and demonstrate my problem-solving abilities.

## Table of contents
* [Requirements](#requirements)
* [Setup](#setup)
* [Technologies](#technologies)

## Requirements
- Node.js 18 or Node.js 16 installed (To check node version run: `node -v` or `nvm version` (if you are using nvm))
- Npm installed (This should be installed with Node.js. To check, run: `npm -v`)
- Java installed and added to your path (https://www.java.com/en/download/)
- Chrome browser installed
- Access to the Web

## Setup
**1. Clone this Repository:**
```
git clone git@github.com:justynakantyka/gui-tests.git
```
**2. Install Dependencies:**
```
npm i
```
**3. Run Tests locally:** \
To run **all specs**, use the following command:
```
npm run wdio
```
To run **a single spec**, use the following command: 
```
npm run wdio -- --spec ./test/specs/{specFileName}.e2e.js
```
Examples: \
Navigation menu tests:
```
npm run wdio -- --spec ./test/specs/navigationMenuTest.e2e.js
```
Contact Page tests:
```
npm run wdio -- --spec ./test/specs/contactPageTest.e2e.js
```

## Technologies
- WebdriverIO 8
- Mocha framework
- Spec Reporter
- Node.js 18/Node.js 16
- JavaScript