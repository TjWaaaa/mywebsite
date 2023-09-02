'use client'
import { HomeSections } from '@/types/reactTypes'
import Button, { ButtonProps } from '@/components/global/Button/Button'
import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import Headline from '@/components/global/Headline/Headline'
import { routes } from '@/services/routes/routes'
import { getTextColor } from '@/services/tailwindHelpers'
import { Colors } from '@/types/tailwindTypes'
import Image, { StaticImageData } from 'next/image'

type HeroSectionProps = {
	/** Hero Image Src */
	imageSrc: StaticImageData
	/** Hero Headline */
	headline: string
	/** Hero second headline */
	description: string
	/** Hero Buttons */
	buttons?: ButtonProps[]
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc, headline, description, buttons }) => {
	return (
		<div className="md:h-[calc(100vh_-_128px)] flex flex-col">
			<div className="container pt-2 flex flex-1 flex-col">
				<Button
					href={routes.home(HomeSections.projects)}
					size="md"
					icon="arrow_left_alt"
					text="Back"
					color="transparent"
				/>
				<div className="flex flex-col md:flex-row flex-1">
					<div className="h-48 md:h-full w-full md:w-1/2 md:pr-4 pt-2 pb-8 flex flex-col gap-4">
						<Image className="h-full rounded-xl md:rounded-2xl flex-1 object-cover object-top" src={imageSrc} alt="" />
					</div>
					<div className="md:w-1/2 h-full md:pl-4 pt-2 pb-16 md:pb-0 flex flex-col justify-center gap-4">
						<div className={`${getTextColor('black')}`}>
							<div className="mb-4">
								<Headline size="6xl">{headline}</Headline>
							</div>
							<div className="mb-4">
								<p className="text-base leading-tight">{description}</p>
							</div>
						</div>
						<div className="w-full list-disc list-inside">
							{buttons?.map((button, index) => (
								<div key={index} className="mr-3 mb-3 inline-flex">
									<Button {...button} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
