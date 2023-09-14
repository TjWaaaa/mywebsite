import Headline from '@/components/global/Headline/Headline'
import { getBackgroundColor } from '@/services/tailwindHelpers'
import { Colors } from '@/types/tailwindTypes'

type PillListProps = {
	items: string[]
}

const PillList: React.FC<PillListProps> = ({ items }) => {
	return (
		<ul className="w-full mt-3 list-disc list-inside">
			{items.map((item, index) => (
				<li
					key={index}
					className="mr-3 mb-3 inline-flex text-base px-6 pt-3 pb-2 border border-solid border-pampas-600 rounded-lg"
				>
					{item}
				</li>
			))}
		</ul>
	)
}

type ProjectDetailsProps = {
	year: string
	tasks: string[]
	techStack: string[]
	occasion: string[]
	color: Colors
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ techStack, occasion, year, tasks, color = 'pampas' }) => {
	return (
		<div className={`w-full py-12 md:py-20 ${getBackgroundColor(color)}`}>
			<div className="container flex flex-col">
				<div className="mb-8">
					<Headline level={2} size="5xl">
						Details
					</Headline>
				</div>
				<div className="grid gap-y-8 grid-cols-1 xl:grid-cols-3">
					<div>
						<Headline level={3} size="2xl">
							{"What we've worked with"}
						</Headline>
						<PillList items={techStack} />
					</div>
					<div>
						<Headline level={3} size="2xl">
							My Tasks
						</Headline>
						<PillList items={tasks} />
					</div>
					<div>
						<Headline level={3} size="2xl">
							Occasion
						</Headline>
						<PillList items={occasion} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
