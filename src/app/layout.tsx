import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Film Maker',
	description:
		'A creative agency, film production, branded & original content creators',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh-TW">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
