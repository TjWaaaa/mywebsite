import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: [
		{
			pattern: /bg-(.*)-(400|500|600|700)/,
			variants: ['hover', 'focus'],
		},
		{
			pattern: /text-(red|pampas)-(500|600|700|800)/,
			variants: ['hover', 'focus'],
		},
		{
			pattern: /text-(.*)-(500|600)/,
			variants: ['hover', 'focus'],
		},
		{
			pattern: /border-(.*)-(500)/,
			variants: ['hover', 'focus'],
		},
	],
	theme: {
		screens: {
			xs: '432px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				'2xl': '5rem',
			},
		},
		extend: {
			colors: {
				pampas: {
					50: '#f8f7f4',
					100: '#ebe8e0',
					200: '#ddd8cb',
					300: '#c7beaa',
					400: '#b09f87',
					500: '#a08b6f',
					600: '#937a63',
					700: '#7b6553',
					800: '#655447',
					900: '#52443c',
					950: '#2b231f',
				},
				bitter: {
					50: '#f4f5f4',
					100: '#e8e8e3',
					200: '#d0d1c9',
					300: '#adb1a4',
					400: '#898e7d',
					500: '#676e5b',
					600: '#505546',
					700: '#3f4438',
					800: '#33372e',
					900: '#2b2e26',
					950: '#171915',
				},
				'heavy-metal': {
					50: '#f4f5f0',
					100: '#e4e9de',
					200: '#ccd6c0',
					300: '#acbb9b',
					400: '#8fa279',
					500: '#72865c',
					600: '#586947',
					700: '#455239',
					800: '#3a4331',
					900: '#2e3528',
					950: '#191e15',
				},

				yellow: {
					DEFAULT: '#FFBF00',
					50: '#FFEDB8',
					100: '#FFE8A3',
					200: '#FFDE7A',
					300: '#FFD352',
					400: '#FFC929',
					500: '#FFBF00',
					600: '#FAB005',
					700: '#F2A305',
					800: '#574100',
					900: '#1F1700',
					950: '#030200',
				},
				red: {
					DEFAULT: '#EA5329',
					50: '#FAD9D0',
					100: '#F9CABE',
					200: '#F5AD98',
					300: '#F18F73',
					400: '#EE714E',
					500: '#EA5329',
					600: '#C73B14',
					700: '#942C0F',
					800: '#611D0A',
					900: '#2E0E05',
					950: '#150602',
				},
				dark: {
					DEFAULT: '#1E1E1E',
					50: '#7A7A7A',
					100: '#707070',
					200: '#5B5B5B',
					300: '#474747',
					400: '#323232',
					500: '#1E1E1E',
					600: '#020202',
					700: '#000000',
				},
			},
			animation: {
				'spin-slow': 'spin 120s linear infinite',
			},
			fontFamily: {
				serif: ['Arbutus Slab', ...fontFamily.serif],
				sans: ['Objectivity', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}
export default config
