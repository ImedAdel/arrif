# ArrIf
> An alternative implementation of the if-else statement using arrays

## Install

```sh
# npm
npm install arrif

# yarn
yarn add arrif
```

## Usage

```js
import arrif from 'arrif'

console.log(arrif("Si", "No", true))
//=> Si
```

## API
### arrif: (t, f, c) => any
#### t
Type: `any`
Returned if condition is true

#### f
Type: `any`
Returned if condition is false

#### c
Type: `string | number | boolean | null | undefined`
Condition
