const yargs = require("yargs/yargs");
const chalk = require("chalk");
const { hideBin } = require("yargs/helpers");
fs = require("fs");

const argv = yargs(hideBin(process.argv)).argv;

packagesFolder = __dirname.substr(0, __dirname.lastIndexOf("/")) + "/packages/";

const newPackageName = argv._[0];
const newPackagePath = packagesFolder + newPackageName;

const validNMPPackageName = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
if (!validNMPPackageName.test(newPackageName)) {
  console.log(chalk.red("🛑 Not a valid package name"));
  process.exit(0);
}

if (fs.existsSync(newPackagePath)) {
  console.log(chalk.red("🛑 Component already exists!"));
  process.exit(0);
}


// button-group ButtonGroup
const newPackageNameCamelCase = 
    newPackageName
        .split('-') // ['button', 'group']
        .map(partOfTheName => partOfTheName[0].toLocaleUpperCase() + partOfTheName.slice(1)) // ['Button', 'Group']
        .join('') // 'ButtonGroup'

console.log('✅ created ' + newPackagePath)
fs.mkdirSync(newPackagePath);
fs.mkdirSync(newPackagePath + '/src');

const indexJS =  require("./templates/indexJS.js");
const indexVue =  require("./templates/indexVue.js");
const packageJson =  require("./templates/packageJson.js");
const stories =  require("./templates/stories.js");
const viteConfig =  require("./templates/viteConfig.js");

const filesToCreate = [
  {
    filepath: "/src/index.vue",
    content: indexVue({ packageName: newPackageNameCamelCase }),
  },
  {
    filepath: "/package.json",
    content: packageJson({ packageName: newPackageName }),
  },
  {
    filepath: "/index.js",
    content: indexJS({ packageName: newPackageNameCamelCase }),
  },
  {
    filepath: `/${newPackageName}.stories.js`,
    content: stories({ packageName: newPackageNameCamelCase }),
  },
  {
    filepath: `/vite.config.js`,
    content: viteConfig(),
  },
];

filesToCreate.forEach((file) => {
  const fileBuffer = new Uint8Array(Buffer.from(file.content));
  fs.writeFileSync(newPackagePath + file.filepath, fileBuffer);
  console.log(`✅ created ${newPackagePath}${file.filepath}`);
});

console.log("🚀 done creating " + chalk.green(newPackageName) + "!");