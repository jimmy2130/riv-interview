import React from 'react';

function useWindowSize() {
	const [windowDimensions, setWindowDimensions] = React.useState({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowDimensions;
}

export default useWindowSize;
