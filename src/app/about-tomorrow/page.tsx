import { ButtonProps } from '@/components/global/Button/Button'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import { routes } from '@/services/routes/routes'
import { Metadata } from 'next'
import image02 from '@/assets/images/aboutTomorrow/aboutTomorrow02.png'
import image03 from '@/assets/images/aboutTomorrow/prototype.png'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import Footer from '@/components/global/Footer/Footer'
import Image from 'next/image'
import Headline from '@/components/global/Headline/Headline'
import Link from 'next/link'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'

export const metadata: Metadata = {
	title: 'About Tomorrow • Project',
	description: 'Protect the environment, buy durable products',
}

const buttons: ButtonProps[] = [
	{ size: 'md', text: 'Website', href: routes.extAboutTomorrowWebsite },
	{ size: 'md', text: 'XD Prototype', href: routes.extAboutTomorrowPrototype },
]

const techStack: string[] = ['Adobe XD']

const tasks: string[] = [
	'Ideation',
	'Personas',
	'User Journeys',
	'User Testing',
	'Evaluation Strategy',
	'Prototyping',
	'UX Design',
]

const occasion: string[] = ['HdM', 'User Experience Design', 'Winter Term 2022']

const AboutTomorrow = () => {
	return (
		<div>
			<HeaderBar title="About Tomorrow" />
			<HeroSection
				imageSrc={image02}
				headline="About Tomorrow"
				description="Protect the environment, buy durable products"
				buttons={buttons}
			/>
			<ProjectDescription
				section1Title="Pitch Video"
				section2Title="High Fidelity Prototype"
				section1Content={
					<iframe
						className="w-full aspect-video rounded-2xl"
						src="https://www.youtube.com/embed/AB-wAAqAFAE?si=QlD9ixKN2y7cVwLS"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				}
				section2Content={
					<Link href={routes.extAboutTomorrowPrototype}>
						<Image
							className="rounded-2xl flex-1 object-cover object-center aspect-video hover:scale-[100.5%] duration-150"
							src={image03}
							alt=""
						/>
					</Link>
				}
			/>
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default AboutTomorrow
