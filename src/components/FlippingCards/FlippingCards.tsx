'use client';
import React from 'react';
import styles from './FlippingCards.module.css';
import Card from './Card';
import { type card } from './types';
import { LEFT_CARD_COVER_SCALE, RIGHT_CARD_COVER_SCALE } from './constants';

type Props = { cards: card[]; aspectRatio?: number };

function FlippingCards({ cards, aspectRatio = 1.7 }: Props) {
	const [isLeftCardInFront, setIsLeftCardInFront] = React.useState(true);
	const [animated, setAnimated] = React.useState(false);
	const isRightCardInFront = !isLeftCardInFront;

	function toggle() {
		setIsLeftCardInFront(!isLeftCardInFront);
		setAnimated(true);
	}

	function handleAnimationEnd() {
		setAnimated(false);
	}

	return (
		<div className={styles.wrapper} style={{ '--aspect-ratio': aspectRatio }}>
			<Card
				card={cards[0]}
				position="left"
				handleAnimationEnd={handleAnimationEnd}
				toggle={toggle}
				cardCoverScale={LEFT_CARD_COVER_SCALE}
				isCardInFront={isLeftCardInFront}
				animated={animated}
			/>
			<Card
				card={cards[1]}
				position="right"
				handleAnimationEnd={handleAnimationEnd}
				toggle={toggle}
				cardCoverScale={RIGHT_CARD_COVER_SCALE}
				isCardInFront={isRightCardInFront}
				animated={animated}
			/>
		</div>
	);
}

export default FlippingCards;
