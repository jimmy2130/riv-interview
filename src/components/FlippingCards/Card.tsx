import React from 'react';
import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import Image from 'next/image';
import styles from './Card.module.css';
import { type card } from './types';
import { FRONT_POSITION, BACK_POSITION } from './constants';

type Props = {
	card: card;
	position: 'left' | 'right';
	handleAnimationEnd: () => void;
	toggle: () => void;
	cardCoverScale: number;
	isCardInFront: boolean;
	animated: boolean;
};

function Card({
	card,
	position,
	handleAnimationEnd,
	toggle,
	cardCoverScale,
	isCardInFront,
	animated,
}: Props) {
	const { alt, src, width, height } = card;
	if (cardCoverScale < 1) {
		throw new Error(
			`cardCoverScale must be an integer between 1 - 100: ${cardCoverScale}`,
		);
	}
	return (
		<div
			className={styles.wrapper}
			style={{
				'--top': position === 'left' ? 0 : undefined,
				'--left': position === 'left' ? 0 : undefined,
				'--bottom': position === 'right' ? 0 : undefined,
				'--right': position === 'right' ? 0 : undefined,

				'--z-index': isCardInFront ? 1 : 0,
				'--cover-scale': `${cardCoverScale}%`,
				'--cover-translate': `calc((100% - var(--cover-scale)) / 2 * ${
					position === 'left' ? '-1' : '1'
				})`,
				'--animation': animated
					? isCardInFront
						? `${styles[`${position}-card-uncovered`]} 500ms ease both`
						: `${styles[`${position}-card-covered`]}  500ms ease both`
					: undefined,
				'--transform': isCardInFront ? FRONT_POSITION : BACK_POSITION,
			}}
			onAnimationEnd={handleAnimationEnd}
		>
			<UnstyledButton
				onClick={toggle}
				className={styles.button}
				style={{ '--width': width, '--height': height }}
			>
				<Image src={src} alt={alt} fill={true} sizes="80cqi" />
				<VisuallyHidden>
					Toggle to flip the cards back and forth.
				</VisuallyHidden>
			</UnstyledButton>
		</div>
	);
}

export default Card;
