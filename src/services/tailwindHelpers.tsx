import { Colors, FontWeights, Sizes } from '@/types/tailwindTypes'

export const getBackgroundColor = (color: Colors) => {
	switch (color) {
		case 'yellow':
			return 'bg-yellow-100'
		case 'blue':
			return 'bg-blue-100'
		case 'green':
			return 'bg-green-100'
		case 'red':
			return 'bg-red-100'
		case 'white':
			return 'bg-white'
		case 'black':
			return 'bg-black'
		case 'pampas':
			return 'bg-pampas-200'
	}
}

export const getTextColor = (color: Colors) => {
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
		case 'pampas':
			return 'text-pampas-800'
	}
}

export const getFontSize = (size: Sizes) => {
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

export const getFontWeight = (weight: FontWeights) => {
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
