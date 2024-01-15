export function computeStyle(scrollMarginTop?: number) {
	const defaultVhStyle = 'calc((100vh - var(--height)) / 2)';
	const defaultDvhStyle = 'calc((100dvh - var(--height)) / 2)';
	return {
		'--scroll-margin-top-vh':
			scrollMarginTop === undefined ? defaultVhStyle : `${scrollMarginTop}px`,
		'--scroll-margin-top-dvh':
			scrollMarginTop === undefined ? defaultDvhStyle : `${scrollMarginTop}px`,
		'--scroll-margin-bottom-vh':
			scrollMarginTop === undefined
				? defaultVhStyle
				: `calc(100vh - var(--height) - ${scrollMarginTop}px)`,
		'--scroll-margin-bottom-dvh':
			scrollMarginTop === undefined
				? defaultDvhStyle
				: `calc(100dvh - var(--height) - ${scrollMarginTop}px)`,
	};
}
