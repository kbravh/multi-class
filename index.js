/**
 * Takes in one or more classes and returns a single class with
 * all properties of the various parents to be extended.
 * @param  {...any} classes - All the classes you wish to extend
 */
const multiClass = (...classes) => {
  /**
   * Class frame to hold all parent properties.
   */
  class Class {
    constructor(...options){
      // Loop over all incoming classes
      for (let baseClass of classes){
        // Grab a list of the properties attached to them; methods, variables, &c.
        const properties = Reflect.ownKeys(baseClass.prototype)

        for (let property of properties){
          // If it's a constructor, we'll pass it our incoming arguments
          if(property === 'constructor'){
            Object.assign(Class.prototype, new baseClass.prototype.constructor(...options))
          } else { // otherwise, we'll just attach it to our Class frame
            Class.prototype[property] = baseClass.prototype[property]
          }
        }
      }
    }
  }

  return Class
}

module.exports = multiClass