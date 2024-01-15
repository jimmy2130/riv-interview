import React from 'react';
import styles from './UnstyledButton.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function UnstyledButton({ className, children, ...delegated }: Props) {
	return (
		<button className={`${styles.unstyledButton} ${className}`} {...delegated}>
			{children}
		</button>
	);
}

export default UnstyledButton;
