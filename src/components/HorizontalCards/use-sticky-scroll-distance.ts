import React from 'react';

function useStickyScrollDistance(stickyRef: React.RefObject<HTMLElement>) {
	const [scrollDistance, setScrollDistance] = React.useState(0);

	React.useEffect(() => {
		function handleScroll() {
			if (!stickyRef.current) {
				return;
			}
			setScrollDistance(stickyRef.current.offsetTop);
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [stickyRef]);

	return scrollDistance;
}

export default useStickyScrollDistance;
