const test = require("baretest")("Multi-class inheritance");
const assert = require("assert");
const multiclass = require("./index");

class HasAge {
	constructor({age}) {
		this._age = age;
	}

	set age(age) {
		this._age = age;
	}

	get age() {
		return this._age;
	}
}

class HasName {
	constructor({name}) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class Person extends multiclass(HasAge, HasName) {
	getNameAndAge() {
		return `${this.name} is ${this.age} years old.`;
	}
}

class Element {
	constructor({element}) {
		this.element = element;
	}
	static elements = ["earth", "fire", "water", "air"];
	static isElement(element) {
		return this.elements.includes(element);
	}

	static listElements() {
		return this.elements.join(", ");
	}
}

class FifthElement extends multiclass(Person, Element) {
	static listElements() {
		return `${super.listElements()}, leeloo`;
	}
}

let leeloo = {};

test.before(() => {
	leeloo = new FifthElement({
		name: "Leeloo",
		age: 22,
		element: "fifth",
	});
});

test(
	"Test multi-class inheritance",
	() => {
		assert.strictEqual(leeloo.getName(), "Leeloo");
		assert.strictEqual(leeloo.age, 22);
		assert.strictEqual(leeloo.getNameAndAge(), "Leeloo is 22 years old.");
		assert.strictEqual(leeloo.element, "fifth");
		// getters and setters
		leeloo.age = 23;
		assert.strictEqual(leeloo.age, 23);
		// static inheritance
		assert.ok(FifthElement.isElement("air"));
		assert.throws(() => leeloo.isElement("air"));
		assert.deepStrictEqual(
			FifthElement.elements,
			["earth", "fire", "water", "air"],
		);
		assert.strictEqual(
			FifthElement.listElements(),
			"earth, fire, water, air, leeloo",
		);
	},
);

test.run();
