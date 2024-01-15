import React from 'react';

function usePrevious<T>(value: T) {
	const [current, setCurrent] = React.useState(value);
	const [previous, setPrevious] = React.useState<T | null>(null);

	if (value !== current) {
		setPrevious(current);
		setCurrent(value);
	}

	return previous;
}

export default usePrevious;
