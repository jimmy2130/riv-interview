import React from 'react';
import styles from './Spacer.module.css';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	axis?: 'horizontal' | 'vertical';
	size: number;
}

function Spacer({ axis, size, children }: Props) {
	return (
		<span
			className={styles.wrapper}
			style={{
				'--width': axis === 'vertical' ? '1px' : `${size}px`,
				'--height': axis === 'horizontal' ? '1px' : `${size}px`,
			}}
		>
			{children}
		</span>
	);
}

export default Spacer;
