# tools

<br>

## Install

```
$ npm i stringifyurl
```

## Usage

```js
const queryString = require('stringifyurl');

### .stringifyUrl(object, options)

```js
queryString.stringifyUrl({url: 'https://baidu.com', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

```
