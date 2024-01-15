import Header from '@/components/Header';
import Spacer from '@/components/Spacer';
import SectionLink from '@/components/SectionLink';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import FlippingCards from '@/components/FlippingCards';
import QuoteSection from '@/components/QuoteSection';
import VideoSection from '@/components/VideoSection';
import HorizontalCards from '@/components/HorizontalCards';
import styles from './page.module.css';
import { FLIPPING_CARDS, VIDEO, HORIZONTAL_CARDS } from '@/constants';

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Header threshold={300}>
				<h1 className={styles.title}>Film Maker</h1>
			</Header>
			<main>
				<Spacer axis="vertical" size={700} />
				<section className={styles.flippingCardsSection}>
					<div className={styles.sectionLinkWrapper}>
						<SectionLink name="flipping-card" />
					</div>
					<MaxWidthWrapper maxWidth={700}>
						<FlippingCards cards={FLIPPING_CARDS} />
					</MaxWidthWrapper>
				</section>
				<QuoteSection sectionName="motto-1">
					<blockquote className={styles.quote}>
						We love to visualize stories
						<br />
						because we love people and they inspire us.
					</blockquote>
				</QuoteSection>
				<VideoSection video={VIDEO} />
				<QuoteSection sectionName="motto-2">
					<blockquote className={styles.quote}>
						We are a creative agency, film production,
						<br />
						branded & original content creators.
					</blockquote>
				</QuoteSection>

				<HorizontalCards cards={HORIZONTAL_CARDS} />
				<Spacer axis="vertical" size={1200} />
			</main>
		</div>
	);
}
