import { MaterialSymbol } from 'material-symbols'
import Icon from '../Icon/Icon'
import Link from 'next/link'
import { Colors, Sizes } from '@/types/tailwindTypes'
import { getTextColor } from '@/services/tailwindHelpers'

export type ButtonProps = {
	size: 'sm' | 'md' | 'lg'
	icon?: MaterialSymbol
	iconPos?: 'left' | 'right'
	text?: string
	href?: string
	onClick?: () => void
	color?: Colors
	textColor?: Colors
	hasPadding?: boolean
}

const styleSm = ''
const styleLg = ''

const Button: React.FC<ButtonProps> = ({
	size,
	icon,
	iconPos = 'left',
	text,
	href,
	onClick,
	color = 'pampas',
	textColor = 'black',
	hasPadding = true,
}) => {
	const getStyle = (size: Sizes) => {
		switch (size) {
			case 'sm':
				return ''
			case 'md':
				return `w-fit text-lg gap-2 rounded-lg ${hasPadding && 'px-6 pt-2 pb-2'}`
			case 'lg':
				return ''
		}
	}

	const getBackgroundColor = (color: Colors) => {
		switch (color) {
			case 'transparent':
				return 'bg-transparent !px-0'
			case 'pampas':
			default:
				return 'bg-pampas-200'
		}
	}

	if (href) {
		return (
			<Link
				href={href}
				className={`flex justify-center items-center bg-pampas-200 font-semibold ${getStyle(size)} ${getBackgroundColor(
					color,
				)} ${getTextColor(textColor)}`}
			>
				{icon && iconPos === 'left' && <Icon icon={icon} size="2xl" />}
				<p className={hasPadding ? `pt-1` : ''}>{text}</p>
				{icon && iconPos === 'right' && <Icon icon={icon} size="2xl" />}
			</Link>
		)
	} else {
		return (
			<button
				onClick={onClick}
				className={`flex justify-center items-center bg-pampas-200 font-semibold ${getStyle(size)} ${getBackgroundColor(
					color,
				)} ${getTextColor(textColor)}`}
			>
				{icon && iconPos === 'left' && <Icon icon={icon} />}
				{text}
				{icon && iconPos === 'right' && <Icon icon={icon} />}
			</button>
		)
	}
}

export default Button
