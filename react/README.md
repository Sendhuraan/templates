# React Template

This template contains the following,
create react app
eslint
jest
tailwind
fonts
assets (images, svg)
local CI
jenkins

# <App Name>

Welcome to <App Name> development. To get started, clone this repository and follow the instructions to effectively contribute.

This project is configured using create react app

### Setup ESLint as formatter
**Install the `ESLint` Extension by Microsoft in VS Code**

To integrate ESLint into Visual Studio Code, you will need to install the ESLint extension for Visual Studio Code. Navigate back to Visual Studio Code and search for ESLint in the Extensions tab. Click Install once you have located the extension:

Once ESLint is installed in Visual Studio Code, you’ll notice colorful underlining in your app.js file highlighting errors. These markers are color-coded based on severity. If you hover over your underlined code, you will see a message that explains the error to you. In this way, ESLint helps us find and remove code and syntax errors.

ESLint can do even more for you. ESLint can be modified to automatically fix errors every time a file is saved.

**Setup Format on Save**

To configure ESLint to automatically fix syntax and formatting issues every time you save, you will need to open the settings menu.

To find the settings in Visual Studio Code, use the command palette to open Preferences: Open Workspace Settings (JSON).

The settings.json file will open inside of your code editor. For ESLint to fix errors when you save your file, you will need to write the following code in settings.json:

`
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
}
`

### Development
Run `npm start` to start development

### Run Local CI
Once development is done, make the file `run-local-ci.sh` executable by,
`chmod +x run-local-ci.sh` and then run `./run-local-ci.sh` to check if the CI passes.

Run this local CI before making a pull request. Otherwise, your PR will be rejected.

### Build
Once development & CI is finished, go to respective environment (Linux, Windows or Mac) and run `npm run build` to build the application.
