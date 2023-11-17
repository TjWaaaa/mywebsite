import FadeInContainer from '@/components/global/FadeInContainer/FadeInContainer'
import Headline from '@/components/global/Headline/Headline'
import Icon from '@/components/global/Icon/Icon'
import { MaterialSymbol } from 'material-symbols'

export type ExperienceCardProps = {
	title: string
	icon: MaterialSymbol
	desctiption: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, icon, desctiption }) => {
	return (
		<FadeInContainer>
			<div className="h-full px-8 py-6 lg:py-8 border-4 border-solid rounded-2xl border-main-300">
				<div className="w-full mb-4 flex gap-4 items-center">
					<Icon icon={icon} size="4xl" />
					<Headline level={3} size="2xl">
						{title}
					</Headline>
				</div>
				<div className="flex h-fill gap-4 mx-4">
					<div className="h-fill flex flex-col items-center">
						<div className="flex-1 w-0.5 bg-main-300 rounded" />
					</div>
					<p className="leading-tight">{desctiption}</p>
				</div>
			</div>
		</FadeInContainer>
	)
}

export default ExperienceCard
