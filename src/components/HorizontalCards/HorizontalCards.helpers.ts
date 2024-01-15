import { type Card } from './types';
import { clamp } from '@/utils';

export function getLength(cards: Card[], height: number, gap: number) {
	const firstImageWidth = (height * cards[0].width) / cards[0].height;
	const lastImageWidth =
		(height * cards[cards.length - 1].width) / cards[cards.length - 1].height;

	const totalLength =
		cards.reduce((acc, cur) => acc + (height * cur.width) / cur.height, 0) +
		gap * (cards.length - 1);
	const scrollLength = Math.round(
		totalLength - firstImageWidth / 2 - lastImageWidth / 2,
	);
	return { scrollLength, firstImageWidth, lastImageWidth, totalLength };
}

export function calculateCardsHeightAndGap(
	windowWidth: number,
	{
		viewportWidthRange,
		heightRange,
		gapRange,
	}: {
		viewportWidthRange: [number, number];
		heightRange: [number, number];
		gapRange: [number, number];
	},
) {
	const [minViewportWidth, maxViewportWidth] = viewportWidthRange;
	const [minHeight, maxHeight] = heightRange;
	const [minGap, maxGap] = gapRange;
	const ratio = clamp(
		(windowWidth - minViewportWidth) / (maxViewportWidth - minViewportWidth),
		0,
		1,
	);

	const height = minHeight + (maxHeight - minHeight) * ratio;
	const gap = minGap + (maxGap - minGap) * ratio;

	return { height, gap };
}

export function calculateCardsOffset(
	cards: Card[],
	gap: number,
	height: number,
) {
	const offset = [0];
	const realImageWidth = cards.map(
		({ width: imageWidth, height: imageHeight }) =>
			(height * imageWidth) / imageHeight,
	);
	for (let i = 0; i < cards.length - 1; i++) {
		const acc = offset[offset.length - 1];
		const distanceBetweenCards =
			acc + realImageWidth[i] / 2 + realImageWidth[i + 1] / 2 + gap;
		offset.push(distanceBetweenCards);
	}
	return offset;
}

export function getCardsOffsetBasedOnScrollDistance(
	offset: number[],
	scrollDistance: number,
) {
	for (let i = 1; i < offset.length; i++) {
		if (scrollDistance < offset[i]) {
			return offset[i - 1];
		}
	}
	return offset[offset.length - 1];
}
