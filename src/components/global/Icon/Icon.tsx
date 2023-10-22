import { Colors, Sizes } from '@/types/tailwindTypes'
import { MaterialSymbol } from 'material-symbols'

type IconProps = {
	/** The icon to show. */
	icon: MaterialSymbol
	/** Fill icons. */
	isFilled?: boolean
	/** Icon color */
	color?: Colors
	/** Icon size */
	size?: Sizes
}

/**
 * The `Icon` component is used to display a material icon.
 */
const Icon: React.FC<IconProps> = ({ icon, isFilled = false, color = 'black', size = 'md' }) => {
	const getFontSize = (size: Sizes) => {
		switch (size) {
			case 'xs':
				return '!text-xs'
			case 'sm':
				return '!text-sm'
			case 'md':
				return '!text-base'
			case 'lg':
				return '!text-lg'
			case 'xl':
				return '!text-xl'
			case '2xl':
				return '!text-2xl'
			case '3xl':
				return '!text-3xl'
			case '4xl':
				return '!text-4xl'
			case '5xl':
				return '!text-5xl'
			case '6xl':
				return '!text-6xl'
			case '7xl':
				return '!text-7xl'
			case '8xl':
				return '!text-6xl sm:text-7xl lg:text-8xl'
		}
	}

	const getTextColor = (color: Colors) => {
		switch (color) {
			case 'yellow':
				return 'text-yellow-500'
			case 'blue':
				return 'text-blue-500'
			case 'green':
				return 'text-green-500'
			case 'red':
				return 'text-red-500'
			case 'white':
				return 'text-white'
			case 'black':
				return 'text-black'
			case 'main':
				return 'text-main-800'
			case 'accent':
				return 'text-accent-400 hover:text-accent-600'
			case 'transparent':
				return 'text-transparent'
		}
	}

	return (
		<i
			style={isFilled ? { fontVariationSettings: "'FILL' 1" } : {}}
			className={`${getTextColor(color)} ${getFontSize(size)} material-symbols-rounded duration-700 ease-in-out`}
		>
			{icon}
		</i>
	)
}

export default Icon
