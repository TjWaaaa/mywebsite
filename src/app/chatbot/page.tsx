import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import image from '@/assets/images/chatbot/chatbot02.png'
import { Metadata } from 'next'
import { ButtonProps } from '@/components/global/Button/Button'
import { routes } from '@/services/routes/routes'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import Footer from '@/components/global/Footer/Footer'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import Headline from '@/components/global/Headline/Headline'

export const metadata: Metadata = {
	title: 'ACAB Chatbot • Project',
	description: 'Web Chatbot for the course "Mobile Web Applications"',
}

const buttons: ButtonProps[] = [{ size: 'md', text: 'Github', href: routes.extChatbotGithub }]

const techStack: string[] = ['React', 'Redux', 'SocketIO', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL']

const tasks: string[] = ['Fullstack', 'WebSocket Connection', 'Auth']

const occasion: string[] = ['HdM', 'Mobile Web Applications', 'Winter Term 2022']

const Chatbot = () => {
	return (
		<div>
			<HeaderBar title="ACAB Chatbot" />
			<HeroSection
				imageSrc={image}
				headline="All Chats Are Bots"
				description="This is not just a Chatbot"
				buttons={buttons}
			/>
			<ProjectDescription
				section1Title=" "
				section1Content={
					<div className="h-full pt-4 md:pt-0 lg:justify-center flex flex-col xl:pr-28 gap-2">
						<Headline level={2} size="2xl">
							{`Web Chatbot`}
						</Headline>
						<p className="text-base leading-tight">
							{`The task of this project was to create a complete web application with a front and back end, a rest and websocket connection, a database and an authentication system.
We decided to create a Whatsapp-like frontend and link it to several chatbots with different personalities so that they respond differently to the user's messages.`}
						</p>
					</div>
				}
				section2Title=" "
				section2Content
			/>
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default Chatbot
