# Vue3 + Vite +  Storybook + Lerna Component Library Blueprint
Blueprint for large Vue JS projects, using the new and exciting [Vite](https://vitejs.dev) build tool and [Lerna](https://lerna.js.org) monorepo manager.

# Live Demo
Packages storybook live demo: [https://squanch-vue3.netlify.app/](https://squanch-vue3.netlify.app/) 
Packages NPM organization: [squanch-vue3](https://www.npmjs.com/settings/squanch-vue3/packages)

## Install
Initialize the project as follows:

    git clone https://github.com/fatihsinanyaman/vue3-component-library.git
    cd vue3-component-library
    npm run initialize

This downloads the project into `vue3-component-library` folder, installs all dependencies, prepares Lerna monorepo and creates symlinks for internal dependencies. All is now ready for build.

## Create New Package

    npm run new {packageName}

package files will be automatic generation


## Build
Run the following to build all packages:

    npm run build

This runs a production build. In each package you will now find `/dist` folder where package code is bundled.

## StoryBook
Run the following to livepreview all packages:

    npm run storybook

This runs storybook for preview & development. 

## Publish Packages
Lerna will be publish automaticly all packages indipendent versions under the organization scope. For example: [squanch-vue3](https://www.npmjs.com/settings/squanch-vue3/packages)

    npm run publish

package files will be automatic generation


## License

MIT

