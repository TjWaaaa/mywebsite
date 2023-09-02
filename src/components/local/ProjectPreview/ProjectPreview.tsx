import Headline from '@/components/global/Headline/Headline'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectPreviewProps = {
	/** Title of the project */
	title: string
	/** Year of the project */
	year: number
	/** Image source */
	imageSrc: StaticImageData
	/** Link to project page */
	href?: string
	/** Grid col span */
	colSpan?: number
	/** Image object position */
	imagePos?: 'object-top' | 'object-center' | 'object-bottom' | 'object-left' | 'object-right' | `object-${string}}`
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
	title = '',
	year,
	imageSrc,
	href = '',
	colSpan = 1,
	imagePos = 'object-top',
}) => {
	const getColSpan = () => {
		switch (colSpan) {
			case 1:
				return 'col-span-1'
			case 2:
				return 'col-span-1 xl:col-span-2'
			case 3:
				return 'col-span-1 xl:col-span-3'
		}
	}

	return (
		<Link className={`group ${getColSpan()}`} href={href}>
			<div className="h-40 sm:h-60 md:h-80 w-full bg-pampas-400 border-4 border-solid group-hover:border-pampas-500 rounded-2xl overflow-hidden duration-150">
				<Image
					className={`w-full h-full object-cover group-hover:scale-[100.5%] duration-150 ${imagePos}`}
					src={imageSrc}
					alt=""
				/>
			</div>
			<div className="flex justify-between mt-4">
				<Headline level={4} size="2xl">
					{title}
				</Headline>
				<Headline level={4} size="2xl">
					{year}
				</Headline>
			</div>
		</Link>
	)
}

export default ProjectPreview
