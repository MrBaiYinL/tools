const isNullOrUndefined = value => value === null || value === undefined;

function stringify(object){
	if (!object) {
		return '';
	}

	const shouldFilter = key => (
		isNullOrUndefined(object[key]) || object[key] === ''
	);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return null;
		}

		if (Array.isArray(value)) {
			if (value.length === 0) {
				return '[]';
			}

			return value
				.reduce(key, [])
				.join('&');
		}

		return key + '=' + value
	}).filter(x => x.length > 0).join('&');
};

exports.stringifyUrl = (object) => {
	const query = Object.assign(object.query);
	let queryString = stringify(query);

	if (queryString) {
		queryString = `?${queryString}`;
	}
	
	return `${object.url}${queryString}`;
};
