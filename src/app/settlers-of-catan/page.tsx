import { ButtonProps } from '@/components/global/Button/Button'
import Footer from '@/components/global/Footer/Footer'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import { routes } from '@/services/routes/routes'
import { Metadata } from 'next'
import image from '@/assets/images/beast/beast01.png'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'

export const metadata: Metadata = {
	title: 'About Tomorrow • Project',
	description: 'Schone die Umwelt, kaufe langlebige Produkte',
}

const buttons: ButtonProps[] = [{ size: 'md', text: 'Gitlab', href: routes.extSettlersGitlab }]

const techStack: string[] = []

const tasks: string[] = []

const occasion: string[] = []

const Settlers = () => {
	return (
		<div>
			<HeroSection
				imageSrc={image}
				headline="Settlers of Catan"
				description="Charging electric cars as an experience"
			/>
			<ProjectDetails color="main" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default Settlers
