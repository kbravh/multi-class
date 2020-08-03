<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kbravh/multi-class">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MULTI-CLASS</h3>

  <p align="center">
    Easy multiple inheritance and composition in JavaScript.
    <br />
    <br />
    <a href="https://github.com/kbravh/multi-class/issues">Report a Bug</a>
    ·
    <a href="https://github.com/kbravh/multi-class/issues">Request a Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

Multi-inheritance/composition is a very useful feature of Object Oriented Programming, but JavaScript's `Class` syntactic sugar does not allow for extending multiple parent classes. This library provides an easy way to solve that, without the need for mixin chains or functions.


<!-- GETTING STARTED -->
## Getting Started

This library has zero dependencies. To get up and running in your project, just go ahead and install.

### Installation
 
Install the library with

``` bash
npm install multi-class
```
or
``` bash
yarn add multi-class
```


<!-- USAGE EXAMPLES -->
## Usage
Import the library, then create a couple of parent classes. A common pattern uses "Has" or "With".

``` JS
const multiclass = require('multi-class')

class HasName {
  constructor({name}){
    this.name = name
  }
}

class HasAge {
  constructor({age}){
    this.age = age
  }
}
```

Then, create your subclass and extend the parent classes using the `multi-class` function.

``` JS
class Person extends multiclass(HasName, HasAge){
  // The constructor is called implicitly

  getNameAndAge(){
    return `${this.name} is ${this.age} years old.`
  }
}
```

Finally, create an instance of your new class and see the magic!

``` JS
let person = new Person({
  age: 22,
  name: "Leeloo"
})

person.getNameAndAge() // Leeloo is 22 years old.
```

**Nota bene:** If your parent classes have different parameters for their respective constructors, an easy way to handle this is by passing in all arguments in a JSON object and destructuring them in the constructors, as is done above.

### Options

Don't like the name `multiclass`? Just change the name on import and inherit to your heart's content.

``` JS
const 🤖 = require('multi-class')

class Person extends 🤖(HasName, HasAge){...}
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kbravh/multi-class/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<!-- CONTACT -->
## Contact

Karey Higuera - [@kbravh](https://twitter.com/kbravh) - karey.higuera@gmail.com

Project Link: [https://github.com/kbravh/multi-class](https://github.com/kbravh/multi-class)


<!-- MARKDOWN LINKS -->
[issues-shield]: https://img.shields.io/github/issues/kbravh/multi-class.svg?style=flat-square
[issues-url]: https://github.com/kbravh/multi-class/issues
[license-shield]: https://img.shields.io/github/license/kbravh/multi-class.svg?style=flat-square
[license-url]: https://github.com/kbravh/multi-class/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kbravh