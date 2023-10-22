import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import image from '@/assets/images/chatbot/chatbot02.png'
import { Metadata } from 'next'
import { ButtonProps } from '@/components/global/Button/Button'
import { routes } from '@/services/routes/routes'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import Footer from '@/components/global/Footer/Footer'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'

export const metadata: Metadata = {
	title: 'Siebtes Leben • Project',
	description: 'Die Gewissheit, dass Ihre Wünsche respektiert werden',
}

const buttons: ButtonProps[] = [{ size: 'md', text: 'Gitlab', href: routes.extChatbotGitlab }]

const techStack: string[] = ['React', 'Redux', 'SocketIO', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL']

const tasks: string[] = ['Fullstack', 'WebSocket Connection', 'Auth']

const occasion: string[] = ['HdM', 'Mobile Web Applications', 'Winter Term 2022']

const Chatbot = () => {
	return (
		<div>
			<HeaderBar title="CBACB Chatbot" />
			<HeroSection imageSrc={image} headline="CBACB" description="This is not just a Chatbot" buttons={buttons} />
			<ProjectDetails color="main" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default Chatbot
