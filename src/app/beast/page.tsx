import image01 from '@/assets/images/beast/beast01.png'
import image02 from '@/assets/images/beast/pitchDeckblatt.jpg'
import Footer from '@/components/global/Footer/Footer'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'B.E.A.S.T • Project',
	description: 'UX Project in collaboration with Mercedes Benz AMG',
}

const techStack: string[] = ['Sounds', 'Lights', 'Arduino']

const tasks: string[] = ['Sound Selection', 'Light Animations', 'User Tests', 'Proximity Detection']

const occasion: string[] = [
	'Interdisciplinary Project',
	'Mercedes Benz AMG',
	'Hochschule der Medien',
	'Winter Term 2022',
]

const Beast = () => {
	return (
		<div>
			<HeaderBar title="B.E.A.S.T" />
			<HeroSection imageSrc={image01} headline="B.E.A.S.T" description="Charging electric cars as an experience" />
			<ProjectDescription
				section1Title="Recap Video"
				section2Title="Pitch"
				section1Content={
					<iframe
						className="w-full aspect-video rounded-2xl"
						src="https://www.youtube.com/embed/1Q19osJ8UH0?si=30efWmb3FGDe1GNh"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
				}
				section2Content={
					<Image className="rounded-2xl flex-1 object-cover object-top aspect-video" src={image02} alt="" />
				}
			/>
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default Beast
