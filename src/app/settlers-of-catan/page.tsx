import { ButtonProps } from '@/components/global/Button/Button'
import Footer from '@/components/global/Footer/Footer'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import { routes } from '@/services/routes/routes'
import { Metadata } from 'next'
import image from '@/assets/images/settlers/settlers01.png'
import image02 from '@/assets/images/settlers/in_game.jpg'
import image03 from '@/assets/images/settlers/settlers03.png'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Settlers of Catan • Project',
	description: 'Digital board game for solo players or online with friends',
}

const buttons: ButtonProps[] = [{ size: 'md', text: 'Gitlab', href: routes.extSettlersGitlab }]

const techStack: string[] = ['Unity', 'Blender', 'C#', 'Gitlab']

const tasks: string[] = ['Game Logic', 'UI Programming']

const occasion: string[] = ['Hochschule der Medien', 'Summer Term 2021']

const Settlers = () => {
	return (
		<div>
			<HeaderBar title="Settlers of Catan" />
			<HeroSection
				imageSrc={image}
				headline="Settlers of Catan"
				description="Digital board game for single players or online multiplayer with friends"
				buttons={buttons}
			/>
			<ProjectDescription
				section1Title="Ingame Screenshot"
				section2Title="Invite Friends"
				section1Content={
					<Image className="rounded-2xl flex-1 object-cover object-top aspect-video" src={image02} alt="" />
				}
				section2Content={
					<Image className="rounded-2xl flex-1 object-cover object-top aspect-video" src={image03} alt="" />
				}
			/>
			<ProjectDetails color="white" year="Summer Term 2021" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default Settlers
