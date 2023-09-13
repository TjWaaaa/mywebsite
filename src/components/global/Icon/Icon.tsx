import { getFontSize, getTextColor } from '@/services/tailwindHelpers'
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
const Icon: React.FC<IconProps> = ({ icon, isFilled = false, color = 'black', size = 'md' }) => (
	<i
		style={isFilled ? { fontVariationSettings: "'FILL' 1" } : {}}
		className={`${getTextColor(color)} ${getFontSize(size)} material-symbols-rounded duration-700 ease-in-out`}
	>
		{icon}
	</i>
)

export default Icon
