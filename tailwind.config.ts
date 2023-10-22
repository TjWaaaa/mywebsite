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
			pattern: /text-(red|main)-(500|600|700|800)/,
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
				main: {
					50: '#f4f5fa',
					100: '#e6e9f3',
					200: '#d4d8e9',
					300: '#b6beda',
					400: '#929cc8',
					500: '#7880b9',
					600: '#666aaa',
					700: '#5a5a9b',
					800: '#4d4c7d',
					900: '#414167',
					950: '#2b2b40',
				},
				accent: {
					50: '#fdf7ed',
					100: '#fbedda',
					200: '#f6d8b1',
					300: '#f1bd7e',
					400: '#eba360',
					500: '#e37e2b',
					600: '#d46321',
					700: '#af4b1d',
					800: '#8e3f1f',
					900: '#72351d',
					950: '#3f1a0d',
				},

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

				tacao: {
					'50': '#fdf7ef',
					'100': '#f9ebdb',
					'200': '#f3d4b5',
					'300': '#e9b07a',
					'400': '#e29155',
					'500': '#db7434',
					'600': '#cd5d29',
					'700': '#aa4824',
					'800': '#883b24',
					'900': '#6e3220',
					'950': '#3b170f',
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

				jacarta: {
					'50': '#f3f3fb',
					'100': '#e3e4f6',
					'200': '#ced0ef',
					'300': '#acb1e4',
					'400': '#848ad6',
					'500': '#6767ca',
					'600': '#5a53bd',
					'700': '#5549ac',
					'800': '#4b408d',
					'900': '#363062',
					'950': '#2a2546',
				},
				'wild-sand': {
					'50': '#f5f5f5',
					'100': '#efefef',
					'200': '#dcdcdc',
					'300': '#bdbdbd',
					'400': '#989898',
					'500': '#7c7c7c',
					'600': '#656565',
					'700': '#525252',
					'800': '#464646',
					'900': '#3d3d3d',
					'950': '#292929',
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
