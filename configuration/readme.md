# Default Build Configurations

1.  `build/vite.common.js` for common packages
2.  `build/vite.client.js` for front-end packages

Each package in its `vite.config.js` creates a build configuration using one of these shared configurations, using a factory function imported from `build` folder, respectively:

1. `getCommonConfiguration()`
2. `getClientConfiguration()`


## Background
There are many benefits of this approach. As the project grows, you'd have to maintain more and more individual build configurations, one for each of the packages. In large applications this can easily be a hundred of them. On the other hand, they are rarely different. Even if they are different, the differences are usually minimal - yet another external module, or a plugin added.

With shared build configurations this becomes much easier to manage. See for example `vite.config.js` file for `@sinanymn/model` package, which is common (isomorphic) code:

    import { getCommonConfiguration } from '../../../configuration'
    export default getCommonConfiguration()

If you need to change build options for all packages, simply add them to the respective default configuration file. For example, if you want to have a closer look at all back-end bundles, just add `minify: false` in `build` section in `vite.server.js` file.

If you need to customize build options for a specific package, pass these options to the factory function in the package's `vite.config.js` file. These options will be merged with default options into the final build configuration.
