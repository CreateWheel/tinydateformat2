# tinydateformat2

Date formatting tool in less than 1kb

## Install

```bash
npm install tinydateformat2 --save
```

Browsers

```html
<script src="https://cdn.jsdelivr.net/npm/tinydateformat2/dist/tinydateformat.js"></script>
```

## Usage

CommonJS

```js
const tinydateformat2 = require('tinydateformat2')
```

ES Modules

```js
import tinydateformat2 from 'tinydateformat2'
```

```js
// default: 'HH:mm:ss' and Date.now()
tinydateformat2()
// => 14:26:04

tinydateformat2('DD/MM/YYYY')
// => 25/03/2023

tinydateformat2('YY/M/DD', '2023-1-10')
// => 23/1/10

tinydateformat2('YY/MM/DD', '2023-1-10')
// => 23/01/10
```

| Format | Output           | Description                       |
| ------ | ---------------- | --------------------------------- |
| YY     | 23               | Two-digit year                    |
| YYYY   | 2023             | Four-digit year                   |
| M      | 1-12             | The month, beginning at 1         |
| MM     | 01-12            | The month, 2-digits               |
| MMM    | Jan-Dec          | The abbreviated month name        |
| MMMM   | January-December | The full month name               |
| D      | 1-31             | The day of the month              |
| DD     | 01-31            | The day of the month, 2-digits    |
| d      | 1-7              | The day of the week               |
| H      | 0-23             | The hour                          |
| HH     | 00-23            | The hour, 2-digits                |
| h      | 1-12             | The hour, 12-hour clock           |
| hh     | 01-12            | The hour, 12-hour clock, 2-digits |
| m      | 0-59             | The minute                        |
| mm     | 00-59            | The minute, 2-digits              |
| s      | 0-59             | The second                        |
| ss     | 00-59            | The second, 2-digits              |
