# tools

<br>

## Install

```
$ npm i stringifyurl
```

## Usage

```js
const queryString = require('stringifyurl');

// .stringifyUrl(object)
queryString.stringifyUrl({url: 'https://xxx.com', query: {age: '18'}});
// 'https://xxx.com?age=18'

```
