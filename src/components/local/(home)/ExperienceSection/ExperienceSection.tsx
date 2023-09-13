import Headline from '@/components/global/Headline/Headline'

const ExperienceSection: React.FC = () => {
	return (
		<div className="w-full bg-pampas-200 py-20">
			<div className="container md:pr-20 lg:pr-24 xl:pr-28">
				<div className="mb-6">
					<Headline level={2} size="5xl">
						My Experience
					</Headline>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
					<div className="px-8 py-10 border-4 border-solid rounded-xl">
						<Headline level={3} size="2xl">
							UI & UX Design
						</Headline>
						<p className="mt-4">Passionate about creating beautiful and intuitive user interfaces and experiences</p>
					</div>
					<div className="px-8 py-10 border-4 border-solid rounded-xl">
						<Headline level={3} size="2xl">
							Webdevelopment Frontend & Backend
						</Headline>
						<p className="mt-4">
							Experienced in building responsive and performant web applications using React, NextJS and NestJS
						</p>
					</div>
					<div className="px-8 py-10 border-4 border-solid rounded-xl">
						<Headline level={3} size="2xl">
							Software Development
						</Headline>
						<p className="mt-4">
							Skilled in object oriented programming, design patterns, data structures and algorithms
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExperienceSection
