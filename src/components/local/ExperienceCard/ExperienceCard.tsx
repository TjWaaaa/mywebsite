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
		<div className="px-8 py-8 border-4 border-solid rounded-xl">
			<div className="w-full mb-4 flex gap-4 items-center">
				<Icon icon={icon} size="!text-4xl" />
				<Headline level={3} size="2xl">
					{title}
				</Headline>
			</div>
			<div className="flex h-fill gap-4 mx-4">
				<div className="h-fill flex flex-col items-center">
					<div className="flex-1 w-0.5 bg-pampas-300 rounded" />
				</div>
				<p className="leading-tight">{desctiption}</p>
			</div>
		</div>
	)
}

export default ExperienceCard
