'use client';
import React from 'react';
import useIsOnscreen from '@/hooks/use-is-onscreen';
import useWindowSize from '@/hooks/use-window-size';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';

function VideoSection({ video }: { video: { src: string; type: string } }) {
	const videoRef = React.useRef<HTMLVideoElement>(null);
	const { width: windowWidth } = useWindowSize();
	const isOnscreen = useIsOnscreen(videoRef, 0);
	const shouldPlay = useIsOnscreen(videoRef, 0.3);
	const prefersReducedMotion = usePrefersReducedMotion();

	React.useEffect(() => {
		if (!videoRef.current) {
			return;
		}
		if (windowWidth < 768) {
			return;
		}
		if (prefersReducedMotion) {
			return;
		}
		if (shouldPlay) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}

		if (!isOnscreen) {
			videoRef.current.currentTime = 0;
		}
	}, [windowWidth, prefersReducedMotion, shouldPlay, isOnscreen]);

	return (
		<section>
			<video width="100%" muted controls ref={videoRef}>
				<source src={video.src} type={video.type} />
			</video>
		</section>
	);
}

export default VideoSection;
