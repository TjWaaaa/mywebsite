'use client'
import HeroSection from '@/components/local/(home)/HeroSection/HeroSection'
import PlaygroundSection from '@/components/local/(home)/PlaygroundSection/PlaygroundSection'
import ProjectSection from '@/components/local/(home)/ProjectSection/ProjectSection'
import Footer from '@/components/global/Footer/Footer'
import Sidebar from '@/components/navigation/Sidebar/Sidebar'
import { useEffect, useRef, useState } from 'react'
import ExperienceSection from '@/components/local/(home)/ExperienceSection/ExperienceSection'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'

export enum HomeSections {
	heroSection = 'heroSection',
	experience = 'experience',
	projects = 'projects',
	playground = 'playground',
	footer = 'footer',
}

export default function Home() {
	const [activeSection, setActiveSection] = useState<HomeSections>(HomeSections.heroSection)
	const [scrollY, setScrollY] = useState<number>(0)
	const sections = useRef<any>([])

	const handleScroll = () => {
		const pageYOffset = window.scrollY
		setScrollY(pageYOffset)

		let newActiveSection = HomeSections.heroSection

		sections.current.forEach((section: any) => {
			const sectionOffsetTop = section.offsetTop
			const sectionHeight = section.offsetHeight

			if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
				newActiveSection = section.id
			}
		})

		setActiveSection(newActiveSection)
	}

	useEffect(() => {
		sections.current = document.querySelectorAll('[data-section]')
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<main className="scroll-smooth">
			<HeaderBar />
			<section data-section id={HomeSections.heroSection}>
				<HeroSection scrollY={scrollY} />
			</section>
			<section data-section id={HomeSections.experience}>
				<ExperienceSection />
			</section>
			<section data-section id={HomeSections.projects}>
				<ProjectSection />
			</section>
			{/* <section data-section id={HomeSections.playground}>
				<PlaygroundSection />
			</section> */}
			<section data-section id={HomeSections.footer}>
				<Footer />
			</section>
			<Sidebar activeSection={activeSection} isVisible={scrollY >= (window.innerHeight / 5) * 3} />
		</main>
	)
}
