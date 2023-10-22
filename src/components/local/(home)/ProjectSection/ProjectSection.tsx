import ProjectPreview from '../../ProjectPreview/ProjectPreview'
import { routes } from '@/services/routes/routes'
import siebtesLebenImage from '@/assets/images/siebtesLeben/siebtesLeben01.jpg'
import beastImage from '@/assets/images/beast/beast01.png'
import chatbotImage from '@/assets/images/chatbot/chatbot01.png'
import settlersImage from '@/assets/images/settlers/settlers01.png'
import aboutTomorrowImage from '@/assets/images/aboutTomorrow/aboutTomorrow01.png'
import lightTomorrowImage from '@/assets/images/lightTomorrow/lightTomorrow01.png'
import Headline from '@/components/global/Headline/Headline'

const ProjectSection: React.FC = () => {
	return (
		<div className="w-full py-12 md:py-20">
			<div className="container md:pr-20 lg:pr-24 xl:pr-28">
				<div className="mb-6">
					<Headline level={2} size="5xl">
						My Projects
					</Headline>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					<ProjectPreview
						title="Siebtes Leben"
						year={2023}
						imageSrc={siebtesLebenImage}
						href={routes.siebtesLeben}
						colSpan={2}
					/>
					<ProjectPreview title="B.E.A.S.T" year={2022} imageSrc={beastImage} href={routes.beast} />
					<ProjectPreview title="Siedler von Catan" year={2021} imageSrc={settlersImage} href={routes.settlers} />
					<ProjectPreview
						title="About Tomorrow"
						year={2022}
						imageSrc={aboutTomorrowImage}
						href={routes.aboutTomorrow}
						colSpan={2}
					/>
					<ProjectPreview
						title="Light Tomorrow"
						year={2023}
						imageSrc={lightTomorrowImage}
						colSpan={2}
						imagePos="object-left"
						href={routes.lightTomorrow}
					/>
					<ProjectPreview
						title="Chatbot"
						year={2022}
						imageSrc={chatbotImage}
						imagePos="object-left"
						href={routes.chatbot}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProjectSection
