import React from 'react';
import NextLink from 'next/link';
import styles from './SectionLink.module.css';
import VisuallyHidden from '../VisuallyHidden';
import { computeStyle } from './SectionLink.helpers';

type Props = {
	name: string;
	scrollMarginTop?: number;
};

function SectionLink({ name, scrollMarginTop }: Props) {
	return (
		<NextLink
			id={name}
			href={`#${name}`}
			className={styles.link}
			style={computeStyle(scrollMarginTop)}
		>
			<span className={styles.icon} />
			<VisuallyHidden>{name}</VisuallyHidden>
		</NextLink>
	);
}

export default SectionLink;
