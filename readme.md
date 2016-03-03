# postcss-class-repeat [![Build Status](https://secure.travis-ci.org/johnotander/postcss-class-repeat.png?branch=master)](https://travis-ci.org/johnotander/postcss-class-repeat) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Repeat class selectors to increase specificity, useful for using utility classes with legacy codebases with high specificity

## Installation

```bash
npm install --save postcss-class-repeat
```

## Usage

```javascript
var postcss = require('postcss')
var classRepeat = require('postcss-class-repeat')

postcss([ classRepeat() ]).process(myCss).css
```

#### Input

```css
.foo.bar,
.baz:before {
  color: tomato;
}

.hello > .world {
  background-color: tomato;
}

@media screen and (min-width: 123em) {
  .yay { color: red; }
}
```

#### Output

```css
.foo.foo.bar.bar,
.baz:before.baz:before {
  color: tomato;
}

.hello.hello > .world.world {
  background-color: tomato;
}

@media screen and (min-width: 123em) {
  .yay.yay { color: red; }
}
```

##### Options

- `repeat`: Number, amount of times to repeat the class selectors. Default: `2`

###### Using custom options

```javascript
var postcss = require('postcss')
var classRepeat = require('postcss-class-repeat')

postcss([ classRepeat({ repeat: 4 }) ]).process(myCss).css
```

```css
.foo.foo.foo.foo.bar.bar.bar.bar,
.baz:before.baz:before.baz:before.baz:before {
  color: tomato;
}

.hello.hello.hello.hello > .world.world.world.world {
  background-color: tomato;
}

@media screen and (min-width: 123em) {
  .yay.yay.yay.yay { color: red; }
}
```

## Related

* <https://github.com/johnotander/class-repeat>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
