import { ButtonProps } from '@/components/global/Button/Button'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import { routes } from '@/services/routes/routes'
import { Metadata } from 'next'
import image01 from '@/assets/images/lightTomorrow/lightTomorrow02.png'
import image02 from '@/assets/images/lightTomorrow/lightTomorrow03.png'
import Footer from '@/components/global/Footer/Footer'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import Headline from '@/components/global/Headline/Headline'
import Image from 'next/image'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'

export const metadata: Metadata = {
	title: 'Light Tomorrow • Project',
	description: 'A project for the course "Cloud Systems and Internet of Things"',
}

const buttons: ButtonProps[] = [{ size: 'md', text: 'Gitlab', href: routes.extSiebtesLebenGithub }]

const techStack: string[] = [
	'Terraform',
	'GitLab Terraform State',
	'AWS IoT Core',
	'AWS IoT Events',
	'IoT Devices',
	'MQTT',
	'TypeScript',
]

const tasks: string[] = ['Terraform', 'AWS IoT Rules', 'AWS IoT Events Detector Model']

const occasion: string[] = ['HdM', 'Cloud Services and Internet of Things', 'Summer Term 2023']

const LightTomorrow = () => {
	return (
		<div>
			<HeaderBar title="Light Tomorrow" />
			<HeroSection
				imageSrc={image01}
				headline="Light Tomorrow"
				description="An intelligent lighting control system for open-plan offices"
				description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
				buttons={buttons}
			/>
			<ProjectDescription
				section1Title="Project Idea"
				section2Title="Pitch"
				section1Content={
					<Image className="rounded-2xl flex-1 object-cover object-center aspect-video" src={image02} alt="" />
				}
				section2Content
			/>
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default LightTomorrow
