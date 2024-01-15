import React from 'react';
import styles from './MaxWidthWrapper.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	maxWidth: number;
}

function MaxWidthWrapper({ maxWidth, children }: Props) {
	return (
		<div className={styles.wrapper} style={{ '--max-width': `${maxWidth}px` }}>
			{children}
		</div>
	);
}

export default MaxWidthWrapper;
