import Footer from '@/components/global/Footer/Footer'
import { ButtonProps } from '@/components/global/Button/Button'
import { routes } from '@/services/routes/routes'
import HeroSection from '@/components/local/(projects)/HeroSection/HeroSection'
import { Metadata } from 'next'
import image from '@/assets/images/siebtesLeben/siebtesLeben01.jpg'
import ProjectDetails from '@/components/local/(projects)/ProjectDetails/ProjectDetails'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SlProjectDescription from './SlProjectDescription'

export const metadata: Metadata = {
	title: 'Siebtes Leben • Project',
	description: 'The certainty that your wishes will be respected',
}

const buttons: ButtonProps[] = [
	{ size: 'md', text: 'Website', href: routes.extSiebtesLebenWebsite },
	{ size: 'md', text: 'Article', href: routes.extSiebtesLebenArticle },
	{ size: 'md', text: 'Github', href: routes.extSiebtesLebenGithub },
]

const techStack = [
	'Next.js',
	'TypeScript',
	'Tailwind CSS',
	'Storybook',
	'Formik & Yup',
	'Axios',
	'Nest.js',
	'MongoDB',
	'Swagger',
	'Cypress',
	'Stripe',
]

const occasion = ['HdM', 'Application Project', 'Summer Term 2023']

const tasks = ['Frontend', 'UI & UX Design']

const SiebtesLeben = () => {
	return (
		<div>
			<HeaderBar title="Siebtes Leben" />
			<HeroSection
				headline="Siebtes Leben"
				description="Notaries are expensive, the legal regulations surrounding the preparation of wills are complicated. Even in 2023, there is no good way to draw up one's own will cheaply, simply and without a notary. Anyone who tries to write their will on their own will quickly run into problems."
				imageSrc={image}
				buttons={buttons}
			/>
			<SlProjectDescription />
			<ProjectDetails color="white" year="Summer Term 2023" techStack={techStack} tasks={tasks} occasion={occasion} />
			<Footer />
		</div>
	)
}

export default SiebtesLeben
