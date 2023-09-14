import Headline from '@/components/global/Headline/Headline'
import { ReactNode } from 'react'

type ProjectDescriptionProps = {
	section1Title?: string
	section2Title?: string
	section1Content: ReactNode
	section2Content: ReactNode
	section1ClassName?: string
	section2ClassName?: string
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
	section1Title,
	section2Title,
	section1Content,
	section2Content,
	section1ClassName,
	section2ClassName,
}) => {
	return (
		<div className="w-full py-12 md:py-20 bg-pampas-200">
			<div className="container">
				<div className="mb-8">
					<Headline level={2} size="5xl">
						Description
					</Headline>
				</div>
				<div className="grid grid-flow-row gap-x-8 gap-y-4 md:gap-y-3 grid-cols-1 md:grid-cols-2">
					{section1Title && (
						<div className="">
							<Headline level={2} size="2xl">
								{section1Title}
							</Headline>
						</div>
					)}
					{section2Title && (
						<div className="order-2 md:order-2 pt-4 md:pt-0">
							<Headline level={2} size="2xl">
								{section2Title}
							</Headline>
						</div>
					)}
					<div className={section1ClassName ? section1ClassName : 'order-1 md:order-3 w-full'}>{section1Content}</div>
					<div className={section2ClassName ? section2ClassName : 'order-3 w-full'}>{section2Content}</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDescription
