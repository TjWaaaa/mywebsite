import { ButtonProps } from '@/components/global/Button/Button'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import { routes } from '@/services/routes/routes'
import { Metadata } from 'next'
import image01 from '@/assets/images/lightTomorrow/lightTomorrow02.png'
import image02 from '@/assets/images/lightTomorrow/lightTomorrow03.png'
import Footer from '@/components/global/Footer/Footer'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import Image from 'next/image'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import Icon from '@/components/global/Icon/Icon'
import Headline from '@/components/global/Headline/Headline'

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
				buttons={buttons}
			/>
			<ProjectDescription
				section1Title="Project Idea"
				section2Title="Don't waste energy"
				section1Content={
					<Image className="rounded-2xl flex-1 object-cover object-center aspect-video" src={image02} alt="" />
				}
				section2Content={
					<div className="h-full pt-4 md:pt-0 lg:justify-center flex flex-col xl:pr-28 gap-2">
						<p className="text-base leading-tight">
							{`The aim of this project was to develop an intelligent lighting control system for open-plan offices. The system should be able to recognise whether a workstation is occupied or not and whether the sunlight is sufficient to illuminate the workstation adequately. The system should then use this sensor data to decide whether the light should be switched on or off.`}
						</p>
						<div className="pt-4 lg:pt-4 xl:pt-6 2xl:pt-10 hidden lg:flex gap-10 justify-center">
							<Icon icon="lightbulb" size="5xl" />
							<Icon icon="sensor_occupied" size="5xl" />
							<Icon icon="network_manage" size="5xl" />
						</div>
					</div>
				}
			/>
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default LightTomorrow
