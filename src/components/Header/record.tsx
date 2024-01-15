'use client';
import React from 'react';
import styles from './Header.module.css';
import useScrollPosition from '@/hooks/use-scroll-position';

const THRESHOLD = 300;

function Header() {
	const { y: scrollY } = useScrollPosition();
	const [prevScrollY, setPrevScrollY] = React.useState(scrollY);
	const [hideHeader, setHideHeader] = React.useState(false);

	console.log({ scrollY, prevScrollY });

	if (scrollY <= THRESHOLD && scrollY !== prevScrollY) {
		setHideHeader(false);
		setPrevScrollY(scrollY);
	} else {
		if (scrollY - prevScrollY > 100) {
			setHideHeader(true);
			setPrevScrollY(scrollY);
		} else if (prevScrollY - scrollY > 100) {
			setHideHeader(false);
			setPrevScrollY(scrollY);
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
				'--direction': hideHeader ? 'normal' : 'reverse',
			}}
		>
			<h1 className={styles.title}>Film Maker</h1>
		</header>
	);
}

export default Header;
