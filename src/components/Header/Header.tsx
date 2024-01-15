'use client';
import React from 'react';
import styles from './Header.module.css';
import useScrollPosition from '@/hooks/use-scroll-position';
import usePrevious from '@/hooks/use-previous';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	threshold?: number;
}

function Header({ children, threshold = 0 }: Props) {
	const { y: scrollY } = useScrollPosition();
	const prevScrollY = usePrevious(scrollY);

	let hideHeader;

	if (scrollY <= threshold) {
		hideHeader = false;
	} else {
		if (prevScrollY === null) {
			hideHeader = true;
		} else {
			hideHeader = scrollY - prevScrollY > 0;
		}
	}

	return (
		<header
			className={styles.wrapper}
			style={{
				'--transform': hideHeader ? 'translateY(-100%)' : undefined,
				'--transition': hideHeader
					? 'transform 250ms ease-out'
					: 'transform 500ms ease-in',
				'--reduce-motion-opacity': hideHeader ? 0 : 1,
				'--reduce-motion-transition': hideHeader
					? 'opacity 250ms ease-out'
					: 'opacity 500ms ease-in',
			}}
		>
			{children}
		</header>
	);
}

export default Header;
