# Vite + Vue + Lerna Monorepo Blueprint
Blueprint for large Vue JS projects, using the new and exciting [Vite](https://vitejs.dev) build tool and [Lerna](https://lerna.js.org) monorepo manager.

## Install
Initialize the project as follows:

    git clone https://bitbucket.org/letsdebugit/vite-monorepo-example.git
    cd vite-monorepo-example
    npm run initialize

This downloads the project into `vite-monorepo-example` folder, installs all dependencies, prepares Lerna monorepo and creates symlinks for internal dependencies. All is now ready for build.

## Build
Run the following to build all packages:

    npm run build

This runs a production build. In each package you will now find `/dist` folder where package code is bundled.

## Run
You only need two of these to deploy and run the application:

* Back-end bundle found in `/packages/application/server/dist`
* Front-end bundle found in `/packages/application/client/dist`

You can run the back-end with NodeJS and serve the front-end with a web server. Back-end requires installation of third-party dependencies such as `fastify` as specified in `package.json`, using `npm install`.

## Develop
For development time you don't need to build in production mode. It's enough to open terminal and execute

    npm run dev:server

to build and execute the back-end. It will be served at [http://localhost:3333](http://localhost:3333).

API documentation pages and simple UI for trying it out is implemented using OpenAPI (aha Swagger) and is accessible at [http://localhost:3333/documentation](http://localhost:3333/documentation).


To run the front-end in development mode, open another terminal and execute

    npm run dev:client

It will be available at [http://localhost/3000](http://localhost/3000).


# References
* The code was originally published at my blog [Let's Debug It](https://letsdebug.it/post/12-monorepo-with-lerna-vite-and-vue).
* Vite can be found at https://vitejs.dev/. Highly recommended!
* Lerna can be found at https://lerna.js.org/.


# LICENSE
Copyright 2021, Tomasz Waraksa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
