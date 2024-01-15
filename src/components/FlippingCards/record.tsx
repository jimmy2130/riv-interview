'use client';
import React from 'react';
import UnstyledButton from '@/components/UnstyledButton';
import styles from './FlippingCards.module.css';
import Image from 'next/image';

const FRONT = 0;
const BACK = -100;
const FRONT_Z_TRANSLATE = `translateZ(${FRONT}px)`;
const BACK_Z_TRANSLATE = `translateZ(${BACK}px)`;

function FlippingCards() {
	const [isLeftInFront, setIsLeftInFront] = React.useState(true);
	const [animated, setAnimated] = React.useState(false);
	function toggle() {
		setIsLeftInFront(!isLeftInFront);
		setAnimated(true);
	}
	const isRightInFront = !isLeftInFront;

	return (
		<div className={styles.wrapper}>
			<div className={styles.viewBox}>
				<div
					className={styles.leftImage}
					style={{
						background: 'red',
						'--translate-x': 'translateX(-200px)',
						'--rotate-y': isLeftInFront ? 'rotateY(0deg)' : 'rotateY(10deg)',
						'--translate-z-start': isLeftInFront
							? BACK_Z_TRANSLATE
							: FRONT_Z_TRANSLATE,
						'--translate-z-end': isLeftInFront
							? FRONT_Z_TRANSLATE
							: BACK_Z_TRANSLATE,
						'--animation': animated
							? `${styles.flip} 5000ms linear both`
							: undefined,
						'--translate-z': animated
							? undefined
							: isLeftInFront
							? FRONT_Z_TRANSLATE
							: BACK_Z_TRANSLATE,
					}}
					onAnimationEnd={() => setAnimated(false)}
				>
					<UnstyledButton onClick={toggle}>
						<Image
							src="/switch-card-1.webp"
							width={773 / 1.5}
							height={534 / 1.5}
							alt="flipping card 1"
						/>
					</UnstyledButton>
				</div>
				<div
					className={styles.rightImage}
					style={{
						background: 'gray',
						'--translate-x': 'translateX(200px)',
						'--rotate-y': isRightInFront ? 'rotateY(0deg)' : 'rotateY(-10deg)',
						'--translate-z-start': isRightInFront
							? BACK_Z_TRANSLATE
							: FRONT_Z_TRANSLATE,
						'--translate-z-end': isRightInFront
							? FRONT_Z_TRANSLATE
							: BACK_Z_TRANSLATE,
						'--animation': animated
							? `${styles.flip} 5000ms linear both`
							: undefined,
						'--translate-z': animated
							? undefined
							: isRightInFront
							? FRONT_Z_TRANSLATE
							: BACK_Z_TRANSLATE,
					}}
					onAnimationEnd={() => setAnimated(false)}
				>
					<UnstyledButton onClick={toggle}>
						<Image
							src="/switch-card-2.webp"
							width={871 / 1.5}
							height={380 / 1.5}
							alt="flipping card 2"
						/>
					</UnstyledButton>
				</div>
			</div>
		</div>
	);
}

export default FlippingCards;

/*
@keyframes flip {
	0% {
		transform: rotateY(0deg) translateX(0px) var(--translate-z-start);
	}
	50% {
		transform: var(--rotate-y) var(--translate-x) var(--translate-z-start);
	}
	100% {
		transform: rotateY(0deg) translateX(0px) var(--translate-z-end);
	}
}
*/
