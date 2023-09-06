# gui-tests

This repository contains the solution to the QA Automation Challenge. It allowing me to showcase my skills in testing and demonstrate my problem-solving abilities.

## Table of contents
* [Requirements](#requirements)
* [Setup](#setup)
* [Technologies](#technologies)
* [Debugging in VSCode](#debugging-in-vscode)

## Requirements
- Node.js 18 or Node.js 16 installed (To check node version run: `node -v` or `nvm version` (if you are using nvm))
- Npm installed (It should already be installed when you install Node.js. To check, run: `npm -v`)
- Java installed and added to your path (https://www.java.com/en/download/)
- Chrome browser installed
- Access to the Web

## Setup
**1. Clone this Repository:**
```
git clone git@github.com:justynakantyka/gui-tests.git
```
**2. Go to the gui-tests directory**
```
cd gui-tests
```
**3. Install Dependencies:**
```
npm i
```
**4. Run Tests locally:** \
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

## Debugging in VSCode
In the repository, there is a configuration for debugging tests in VSCode: `.vscode/launch.json`. \
\
How to debug:
1. Open the test file (e.g. `test/specs/contactPageTest.e2e.js`).
2. Set a breakpoint at the location you want to inspect.
3. Go to the 'Run and Debug' tab in VSCode.
4. Click the green arrow to start debugging.