import React from 'react';

function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		function handleScroll() {
			setScrollPosition({
				x: window.scrollX,
				y: window.scrollY,
			});
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}

export default useScrollPosition;
