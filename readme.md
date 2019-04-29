To open the website:

1. Click "Clone or download"
2. Open the zip folder and unzip it
3. Open index.html in any browser to view the website!



*Workflow and Structure:
- Install node.js
- When we create any sass in the css folder(scss) it gets compiled into the dist folder
- main.scss is our main sass file, any other files created will be partials that we import into that file
- Use node sass to compile scss down to regular css so the browser can read it
- Create package.json file which is like a manifest for the project
- Type npm i node-sass to install and create a node modules folder, anything that we install with npm gets put inside this folder.
- We can run the sass script by typing npm run sass, this will run whatever you have "echoed" where it says "sass:" in the package.json file.
- Always work in the main.scss file
- the .gitignore file is created so we ignore the node_modules folder as we don't want it in repository - its just a dependencies folder
- The config file has all the mixing and variables, its imported into the scss file