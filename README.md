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
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({
	url: 'https://foo.bar',
	query: {
		top: 'foo'
	},
	fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'
```
