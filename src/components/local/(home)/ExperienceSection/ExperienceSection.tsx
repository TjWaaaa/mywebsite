import Headline from '@/components/global/Headline/Headline'
import ExperienceCard from '../../ExperienceCard/ExperienceCard'

const ExperienceSection: React.FC = () => {
	return (
		<div className="w-full bg-pampas-200 py-20">
			<div className="container md:pr-20 lg:pr-24 xl:pr-28">
				<div className="mb-6">
					<Headline level={2} size="5xl">
						My Experience
					</Headline>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
					<ExperienceCard
						title="Web Dev"
						icon="code"
						desctiption="Experienced in building responsive and performant web applications"
					/>
					<ExperienceCard
						title="Software Dev"
						icon="data_object"
						desctiption="Skilled in object oriented programming, design patterns, data structures and algorithms"
					/>
					<ExperienceCard
						title="UI & UX Design"
						icon="brush"
						desctiption="Passionate about creating beautiful and intuitive user interfaces and experiences"
					/>
					<ExperienceCard
						title="User Testing"
						icon="person"
						desctiption="Skilled in conducting user tests and interviews to improve the user experience of a product"
					/>
				</div>
			</div>
		</div>
	)
}

export default ExperienceSection
