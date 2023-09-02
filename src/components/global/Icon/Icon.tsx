import { getTextColor } from '@/services/tailwindHelpers'
import { Colors } from '@/types/tailwindTypes'
import { MaterialSymbol } from 'material-symbols'

type IconProps = {
	/** The icon to show. */
	icon: MaterialSymbol
	/** Fill icons. */
	isFilled?: boolean
	/** Icon color */
	color?: Colors
	/** Icon size */
	size?:
		| '!text-xs'
		| '!text-sm'
		| '!text-md'
		| '!text-lg'
		| '!text-xl'
		| '!text-2xl'
		| '!text-3xl'
		| '!text-4xl'
		| '!text-5xl'
		| '!text-6xl'
}

/**
 * The `Icon` component is used to display a material icon.
 */
const Icon: React.FC<IconProps> = ({ icon, isFilled = false, color = 'black', size = '!text-md' }) => (
	<i
		style={isFilled ? { fontVariationSettings: "'FILL' 1" } : {}}
		className={`material-symbols-rounded ${getTextColor(color)} ${size} duration-700 ease-in-out`}
	>
		{icon}
	</i>
)

export default Icon
