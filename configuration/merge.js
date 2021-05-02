export default merge

/**
 * Recursively merges the specified object instances
 * @param instances Instances to merge, from left to right
 */
function merge (...instances) {
  let i = instances.length - 1
  while (i > 0) {
    instances[i - 1] = mergeWith(instances[i - 1], instances[i])
    i--
  }
  return instances[0]
}

/**
 * Merge an instance with another one
 * @param target Object to merge the custom values into
 * @param source Object with custom values
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeWith (target, source) {
  const isObject = obj => obj && typeof obj === 'object'

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      const targetValue = target[key]
      const sourceValue = source[key]

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue)
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = merge(Object.assign({}, targetValue), sourceValue)
      } else {
        target[key] = sourceValue
      }
    })
  }

  return target
}
