import path from 'path'
import merge from './merge'
import clientConfiguration from './vite.package'
const pkg = require(path.resolve(__dirname, 'package.json'))

/**
 * Returns Vite build configuration for client packages,
 * optionally amended with the specified options
 * @param options Custom build options
 * @returns Vite build configuration
 */
export function getClientConfiguration (options = {}) {
  console.log(`Building client package ${pkg.name} v.${pkg.version} ...`)
  return getConfiguration(clientConfiguration, options, pkg.name)
}

/**
 * Returns Vite build configuration amended with the specified options
 * @param configuration Default build options
 * @param options Custom build options
 * @param name Optional name of a library, used when building a library instead of browser-executable package
 * @returns Vite build configuration
 */
function getConfiguration (configuration, options = {}, name) {
  const result = merge(
    // Default configuration
    configuration,
    // If name specified, we're building a library, so pass that to build/lib configuration
    name
      ? { build: { lib: { name } } }
      : {},
    // Custom options to override the default configuration
    options
  )

  // Handy when you need to peek into that final build configuration
  // when things go berserk ;-)
  // console.warn(JSON.stringify(result, null, 2))

  return result
}

