import React from 'react';

function useIsOnscreen(
	elementRef: React.RefObject<HTMLElement>,
	threshold: number = 0,
) {
	const [isOnscreen, setIsOnscreen] = React.useState(false);

	if (threshold < 0 || threshold > 1) {
		throw new Error(`threshold needs to be between 0 and 1: ${threshold}`);
	}

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries;
				setIsOnscreen(entry.isIntersecting);
			},
			{ threshold },
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [elementRef, threshold]);

	return isOnscreen;
}

export default useIsOnscreen;
