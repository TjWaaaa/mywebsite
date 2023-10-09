import { getFontSize, getFontWeight } from '../../../services/tailwindHelpers'
import { FontWeights, HTagLevels, Sizes } from '@/types/tailwindTypes'

type HeadlineProps = {
	/** Content of Headline */
	children: React.ReactNode
	/** Specifies if its an h1, h2, h3,... */
	level?: HTagLevels
	/** Customize size. Is also set with level. */
	size?: Sizes
	/** Text font */
	fontStyle?: 'font-sans' | 'font-serif'
	/** Font weight */
	fontWeight?: FontWeights
	/** Text align */
	textAlign?: 'text-left' | 'text-center' | 'text-right'
	/** Custom Styles */
	className?: string
}

const Headline: React.FC<HeadlineProps> = ({
	children,
	level = 1,
	size = '2xl',
	fontStyle = 'font-sans',
	fontWeight = 'semibold',
	textAlign,
	className = '',
}) => {
	const CustomTag = `h${level}` as keyof JSX.IntrinsicElements

	const getFontWeight = (weight: FontWeights) => {
		switch (weight) {
			case 'thin':
				return 'font-thin'
			case 'extralight':
				return 'font-extralight'
			case 'light':
				return 'font-light'
			case 'normal':
				return 'font-normal'
			case 'medium':
				return 'font-medium'
			case 'semibold':
				return 'font-semibold'
			case 'bold':
				return 'font-bold'
			case 'extrabold':
				return 'font-extrabold'
			case 'black':
				return 'font-black'
		}
	}

	const getFontSize = (size: Sizes) => {
		switch (size) {
			case 'xs':
				return 'text-xs'
			case 'sm':
				return 'text-sm'
			case 'md':
				return 'text-base'
			case 'lg':
				return 'text-lg'
			case 'xl':
				return 'text-xl'
			case '2xl':
				return 'text-xl md:text-2xl'
			case '3xl':
				return 'text-3xl'
			case '4xl':
				return 'text-3xl sm:text-4xl'
			case '5xl':
				return 'text-3xl sm:text-5xl'
			case '6xl':
				return 'text-4xl xs:text-5xl xl:text-6xl'
			case '7xl':
				return 'text-4xl sm:text-6xl xl:text-7xl'
			case '8xl':
				return 'text-5xl xs:text-6xl sm:text-7xl xl:text-8xl'
		}
	}

	return (
		<CustomTag
			className={`tracking-tight leading-none ${textAlign} ${fontStyle} ${getFontSize(size)} ${getFontWeight(
				fontWeight,
			)} ${className}`}
		>
			{children}
		</CustomTag>
	)
}

export default Headline
