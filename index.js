/**
 * Takes in one or more classes and returns a single class with
 * all properties of the various parents to be extended.
 * @param  {...any} classes - All the classes you wish to extend
 */
function multiclass(...classes) {
	/**
   * Class frame to hold all parent properties.
   */
	class Class {
		constructor(...options) {
			// Loop over all incoming classes
			for (let baseClass of classes) {
				// check if this class already extends another class
				let parent = Reflect.getPrototypeOf(baseClass);
				// Push the parent onto the classes array if it's a class and if it isn't yet there
				if (parent.prototype && !classes.includes(parent)) {
					classes.push(parent);
				}
				// Grab a list of the properties attached to the class; methods, variables, &c.
				const properties = Reflect.ownKeys(baseClass.prototype);
				// loop through our properties
				for (let property of properties) {
					// If it's a constructor, we'll pass it our incoming arguments
					if (property === "constructor") {
						Object.assign(
							Class.prototype,
							new baseClass.prototype.constructor(...options),
						);
						// look for static methods or variables on the class
						let staticProperties = Reflect.ownKeys(
							baseClass.prototype.constructor,
						).filter((property) =>
							!["length", "prototype", "name"].includes(property)
						);
						// attach these static properties to the class frame
						for (let staticProperty of staticProperties) {
							Class[staticProperty] = baseClass[staticProperty];
						}
					} else {
						// otherwise, we'll just attach it to our Class frame
						let propertyDescriptor = Reflect.getOwnPropertyDescriptor(
							baseClass.prototype,
							property,
						);
						Reflect.defineProperty(
							Class.prototype,
							property,
							propertyDescriptor,
						);
					}
				}
			}
		}
	}

	return Class;
}

module.exports = multiclass;
