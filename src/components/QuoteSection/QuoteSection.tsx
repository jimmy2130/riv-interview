import React from 'react';
import SectionLink from '@/components/SectionLink';
import styles from './QuoteSection.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	sectionName: string;
}

function QuoteSection({ children, sectionName }: Props) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.sectionLinkWrapper}>
				<SectionLink name={sectionName} />
			</div>
			{children}
		</section>
	);
}

export default QuoteSection;
