module.exports =  ({ packageName }) => {
  return `{
    "name": "@squanch-vue3/${packageName}",
    "description": "Sandbox Component",
    "version": "0.0.5",
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
