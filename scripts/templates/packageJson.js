module.exports =  ({ packageName }) => {
  return `{
    "name": "@squanch-vue3/${packageName}",
    "description": "Vue3 Component Library Component Example for ${packageName}",
    "version": "0.0.0",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/fatihsinanyaman/vue3-component-library.git"
    },
    "keywords": [
        "vue3",
        "component",
        "library",
        "vue3",
        "lerna",
        "storybook"
    ],
    "homepage": "https://github.com/fatihsinanyaman/vue3-component-library#readme",
    "bugs": {
        "url": "https://github.com/fatihsinanyaman/vue3-component-library/issues"
    },
    "author": "Fatih Sinan Yaman",
    "main": "./dist/@squanch-vue3/${packageName}.umd.js",
    "module": "./dist/@squanch-vue3/${packageName}.es.js",
    "exports": {
        ".": {
            "import": "./dist/@squanch-vue3/${packageName}.es.js",
            "require": "./dist/@squanch-vue3/${packageName}.umd.js"
        }
    },
    "scripts": {
        "build": "vite build"
    },
    "publishConfig": {
        "access": "public"
    },
    "files": [
        "dist/*"
    ],
    "dependencies": {
        "vue": "^3.0.5"
    }
}
`;
};
