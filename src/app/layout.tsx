import 'material-symbols/rounded.css'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

export const metadata: Metadata = {
	title: 'Timo Waldherr • Software Engineering and UX Design',
	description: 'Software Engineer from Stuttgart, Germany. Studying Mobile Medien B.Sc. at HdM (Hochschule der Medien',
	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
		},
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth tracking-tighter leading-none">
			<body>{children}</body>
		</html>
	)
}
