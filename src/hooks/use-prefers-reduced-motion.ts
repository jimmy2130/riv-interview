import React from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);

	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);

		setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

		function handleChange(event: MediaQueryListEvent) {
			setPrefersReducedMotion(!event.matches);
		}
		mediaQueryList.addEventListener('change', handleChange);
		return () => {
			mediaQueryList.removeEventListener('change', handleChange);
		};
	}, []);
	return prefersReducedMotion;
}

export default usePrefersReducedMotion;
