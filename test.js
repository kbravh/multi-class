const test = require('baretest')('Multi-class inheritance')
const assert = require('assert')
const multiclass = require('./index')

class HasAge {
  constructor({age}){
    this.age = age
  }

  getAge(){return this.age}
}

class HasName {
  constructor({name}){
    this.name = name
  }

  getName(){return this.name}
}

class Person extends multiclass(HasAge, HasName) {
  getNameAndAge(){return `${this.name} is ${this.age} years old.`}
}

let person = {}

test.before(() => {
  person = new Person({
    name: "Leeloo",
    age: 22
  })
})

test('Test multi-class inheritance', () => {
  assert.strictEqual(person.getName(), "Leeloo")
  assert.strictEqual(person.getAge(), 22)
  assert.strictEqual(person.getNameAndAge(), "Leeloo is 22 years old.")
})

test.run()