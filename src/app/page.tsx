'use client'
import HeroSection from '@/components/local/(home)/HeroSection/HeroSection'
import ProjectSection from '@/components/local/(home)/ProjectSection/ProjectSection'
import Footer from '@/components/global/Footer/Footer'
import Sidebar from '@/components/navigation/Sidebar/Sidebar'
import { useEffect, useRef, useState } from 'react'
import ExperienceSection from '@/components/local/(home)/ExperienceSection/ExperienceSection'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import { HomeSections } from '@/types/reactTypes'

const headerHeight = 80

export default function Home() {
	const [activeSection, setActiveSection] = useState<HomeSections>(HomeSections.heroSection)
	const [windowHeight, setWindowHeight] = useState<number>(5000)
	const [scrollY, setScrollY] = useState<number>(0)
	const sections = useRef<any>([])

	useEffect(() => {
		setWindowHeight(window.innerHeight)

		const handleScroll = () => {
			const pageYOffset = window.scrollY
			setScrollY(pageYOffset)

			let newActiveSection = HomeSections.heroSection

			sections.current.forEach((section: any) => {
				const sectionOffsetTop = section.offsetTop
				const sectionHeight = section.offsetHeight

				if (
					pageYOffset >= sectionOffsetTop - headerHeight &&
					pageYOffset < sectionOffsetTop + sectionHeight - headerHeight
				) {
					newActiveSection = section.id
				}
			})

			setActiveSection(newActiveSection)
		}

		sections.current = document.querySelectorAll('[data-section]')
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrollY])

	return (
		<main className="scroll-smooth">
			<HeaderBar />
			<section data-section id={HomeSections.heroSection} className="scroll-mt-16 sm:scroll-mt-32">
				<HeroSection scrollY={scrollY} />
			</section>
			<section data-section id={HomeSections.experience} className="scroll-mt-16 sm:scroll-mt-20">
				<ExperienceSection />
			</section>
			<section data-section id={HomeSections.projects} className="scroll-mt-16 sm:scroll-mt-20">
				<ProjectSection />
			</section>
			{/* <section data-section id={HomeSections.playground}>
				<PlaygroundSection />
			</section> */}
			<section data-section id={HomeSections.footer}>
				<Footer />
			</section>
			<Sidebar activeSection={activeSection} isVisible={scrollY >= (windowHeight / 5) * 3} />
		</main>
	)
}
