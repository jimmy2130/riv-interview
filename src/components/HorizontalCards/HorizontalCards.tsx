'use client';
import React from 'react';
import Image from 'next/image';
import styles from './HorizontalCards.module.css';
import useWindowSize from '@/hooks/use-window-size';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';
import useStickyScrollDistance from './use-sticky-scroll-distance';
import {
	calculateCardsHeightAndGap,
	getLength,
	calculateCardsOffset,
	getCardsOffsetBasedOnScrollDistance,
} from './HorizontalCards.helpers';
import { type Card } from './types';
import SectionLink from '@/components/SectionLink';

const HEIGHT: [number, number] = [300, 600];
const GAP: [number, number] = [32, 64];
const VIEWPORT_WIDTH: [number, number] = [500, 1000];

function HorizontalCards({ cards }: { cards: Card[] }) {
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	const stickyRef = React.useRef<HTMLDivElement>(null);
	const scrollDistance = useStickyScrollDistance(stickyRef);

	const { height, gap } = calculateCardsHeightAndGap(windowWidth, {
		viewportWidthRange: VIEWPORT_WIDTH,
		heightRange: HEIGHT,
		gapRange: GAP,
	});

	const { scrollLength, firstImageWidth } = getLength(cards, height, gap);
	const topDistance = (windowHeight - height) / 2;

	const prefersReducedMotion = usePrefersReducedMotion();

	const offset = calculateCardsOffset(cards, gap, height);

	const imageOffsetDistance =
		windowWidth / 2 -
		firstImageWidth / 2 -
		(prefersReducedMotion
			? getCardsOffsetBasedOnScrollDistance(offset, scrollDistance)
			: Math.min(scrollDistance, scrollLength));

	return (
		<section
			className={styles.wrapper}
			style={{
				'--scroll-length': `${scrollLength + windowHeight - topDistance}px`,
				'--image-height': `${height}px`,
			}}
		>
			{offset.map((distance, index) => (
				<div
					key={index}
					className={styles.sectionLinkWrapper}
					style={{ '--link-top': `${distance + height + 40}px` }}
				>
					<SectionLink
						name={`horizontal-card-${index + 1}`}
						scrollMarginTop={topDistance + height + 40}
					/>
				</div>
			))}

			<div
				className={styles.stickyContainer}
				style={{ '--top': `${topDistance}px` }}
				ref={stickyRef}
			>
				<ul
					className={styles.imageContainer}
					style={{
						'--scroll-distance': `translateX(${imageOffsetDistance}px)`,
						'--gap': `${gap}px`,
					}}
				>
					{cards.map(
						({ id, src, alt, width: imageWidth, height: imageHeight }) => (
							<li key={id} className={styles.imageWrapper}>
								<Image
									src={src}
									alt={alt}
									width={(height * imageWidth) / imageHeight}
									height={height}
									style={{ maxWidth: 'revert' }}
								/>
							</li>
						),
					)}
				</ul>
			</div>
		</section>
	);
}

export default HorizontalCards;
