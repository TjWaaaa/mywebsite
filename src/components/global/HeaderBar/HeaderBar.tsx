'use client'
import { HomeSections } from '@/types/reactTypes'
import Headline from '@/components/global/Headline/Headline'
import { routes } from '@/services/routes/routes'
import { Colors } from '@/types/tailwindTypes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '../Button/Button'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import icon from '@/assets/icons/icon.png'
import FadeInContainer from '../FadeInContainer/FadeInContainer'

type HeaderBarProps = {
	/** Header Title of the current page */
	title?: string
	/** Background color */
	backgroundColor?: Colors
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, backgroundColor = 'main' }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [isShrunk, setIsShrunk] = useState<boolean>()
	const router = useRouter()

	useEffect(() => {
		const handleScroll = () => {
			const pageYOffset = window.scrollY

			if (!isShrunk && pageYOffset >= 50) {
				setIsShrunk(true)
			} else if (isShrunk && pageYOffset < 2) {
				setIsShrunk(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isShrunk])

	const getBackgroundColor = (color: Colors) => {
		switch (color) {
			case 'yellow':
				return 'bg-yellow-100'
			case 'blue':
				return 'bg-blue-200'
			case 'green':
				return 'bg-green-200'
			case 'red':
				return 'bg-red-200'
			case 'white':
				return 'bg-white'
			case 'black':
				return 'bg-black'
			case 'main':
				return 'bg-main-100'
		}
	}

	return (
		<div className="sticky top-0 z-50">
			<div className="relative">
				<FadeInContainer type="fadeIn">
					<div
						className={`relative z-40 w-full min-h-fit drop-shadow-sm duration-100 h-16 ${
							isShrunk ? 'sm:h-20' : 'sm:h-32'
						} ${getBackgroundColor(backgroundColor)}`}
					>
						<div className="container h-full flex justify-between items-center">
							<div className="flex gap-8 justify-center items-center">
								<button
									onClick={() => router.replace(routes.home(HomeSections.heroSection))}
									className="flex justify-center items-center"
								>
									<div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent-400 rounded-full" />
									<div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent-200 rounded-full -ml-5 sm:-ml-6" />
									<div className="w-10 sm:w-12 h-10 sm:h-12 bg-transparent border-2 -ml-5 sm:-ml-6 border-dashed border-accent-400 rounded-full animate-spin-slow" />
								</button>
								{title && (
									<div className="pt-1.5 text-main-800 flex sm:hidden md:flex gap-2 items-center">
										<Headline size="2xl">{title}</Headline>
									</div>
								)}
							</div>
							<div className="hidden sm:flex items-center gap-12 lg:gap-24 pt-2">
								<Link
									href={routes.home(HomeSections.heroSection)}
									className="text-lg font-semibold text-accent-400 hover:text-accent-600 duration-150 ease-in-out"
								>
									Home
								</Link>
								<Link
									href={routes.home(HomeSections.experience)}
									className="text-lg font-semibold text-accent-400 hover:text-accent-600 duration-150 ease-in-out"
								>
									Experience
								</Link>
								<Link
									href={routes.home(HomeSections.projects)}
									className="text-lg font-semibold text-accent-400 hover:text-accent-600 duration-150 ease-in-out"
								>
									Projects
								</Link>
							</div>
							<div className="block sm:hidden">
								<Button
									color="transparent"
									textColor="main"
									icon="menu"
									size="md"
									onClick={() => setMenuOpen(!menuOpen)}
								/>
							</div>
						</div>
					</div>
					<div
						className={`absolute z-30 w-full flex flex-col bg-main-100 drop-shadow-sm duration-300 ${
							!menuOpen ? '-top-20' : 'top-16'
						}`}
					>
						<Link
							href={routes.home(HomeSections.heroSection)}
							onClick={() => setMenuOpen(false)}
							className="container w-full h-12 pt-1 flex items-center text-xl font-semibold text-main-800 hover:text-main-950 border-t border-white"
						>
							Home
						</Link>
						<Link
							href={routes.home(HomeSections.experience)}
							onClick={() => setMenuOpen(false)}
							className="container w-full h-12 pt-1 flex items-center text-xl font-semibold text-main-800 hover:text-main-950 border-t border-white"
						>
							Experience
						</Link>
						<Link
							href={routes.home(HomeSections.projects)}
							onClick={() => setMenuOpen(false)}
							className="container w-full h-12 pt-1 flex items-center text-xl font-semibold text-main-800 hover:text-main-950 border-t border-white"
						>
							Projects
						</Link>
					</div>
				</FadeInContainer>
			</div>
		</div>
	)
}

export default HeaderBar
