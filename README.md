# animation-player-tween [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/enheit/animation-player-tween/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/animation-player-tween.svg?style=flat)](https://www.npmjs.com/package/animation-player-tween) [![Build Status](https://travis-ci.org/enheit/animation-player-tween.svg)](https://travis-ci.org/enheit/animation-player-tween) [![Codecov Coverage](https://img.shields.io/codecov/c/github/enheit/animation-player-tween/master.svg?style=flat-square)](https://codecov.io/gh/enheit/animation-player-tween/)

The animation tween helper for [animation-player](https://github.com/enheit/animation-player)

## Table of Contents

1. [Installation](#instalation)
2. [Usage](#usage)
3. [Documentation](#documentation)
4. [License](#license)

## Instalation

```
npm install --save animation-player-tween
```

## Usage

```javascript
import { AnimationPlayerTween } from 'animation-player-tween';

const alpha = { x: 0, y: 0 };
const omega = { x: 100, y: 200 };

const tween = new AnimationPlayerTween(alpha).to(omega);

tween.update(0.1);
console.log(alpha); // { x: 10, y: 20 }

tween.update(0.5);
console.log(alpha); // { x: 50, y: 100 }

tween.update(1); 
console.log(alpha); // { x: 100, y: 200 }

```

## Documentation

### `update(progress: number)`

Allows to change the values of the properties of an object in certain time point

```javascript
import { AnimationPlayerTween } from 'animation-player-tween';

const alpha = { x: 0 };
const omega = { x: 100 };

const tween = new AnimationPlayerTween(alpha)
  .to(omega);

tween.update(0.1);
console.log(alpha) // { x: 10 }

tween.update(0.2);
console.log(alpha) // { x: 20 }

tween.update(0.3);
console.log(alpha) // { x: 30 }

// ...

tween.update(1);
console.log(alpha) // { x: 100 }
```

### `to(omega: any)`

> Currently, it only supports objects with one level deep

Specify the object with properties that should be obtained at the end

```javascript
import { AnimationPlayerTween } from 'animation-player-tween';

const alpha = { x: 0 };
const omega = { x: 100 };

const tween = new AnimationPlayerTween(alpha)
  .to(omega);

tween.update(1);
console.log(alpha) // { x: 100 } === omega
```

### `easing((k: number) => number)`

Default value: `Easing.Linear.None`

Full list of Easing functions can be found [here](https://github.com/enheit/animation-player-tween/blob/master/src/utils/easing.ts)

```javascript
import { AnimationPlayerTween, Easing } from 'animation-player-tween';

const alpha = { x: 0 };
const omega = { x: 100 };

const tween = new AnimationPlayerTween(alpha)
  .to(omega)
  .easing(Easing.Cubic.In); // <-- Set easing function

tween.update(0.1);
console.log(alpha); // { x: 0.10000000000000002 }

tween.update(0.5); 
console.log(alpha); // { x: 12.5 }

tween.update(1);
console.log(alpha); // { x: 100 }
```

#### 

### `interpolation((startValue: number, endValue: number, normalizedValue: number) => number)`

Default value: `Interpolation.Linear`.

Full list of Interpolation functions can be found [here](https://github.com/enheit/animation-player-tween/blob/master/src/utils/interpolation.ts)

## License
animation-player-tween is [MIT licensed](https://github.com/enheit/animation-player-tween/blob/master/LICENSE)