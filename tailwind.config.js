/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			serif: ['DM Serif Display', 'sans-serif'],
		},
		extend: {
			colors: {
				melee: {
					red: '#F15959',
					blue: '#6565FE',
					yellow: '#FEBE3F',
					green: '#4CE44C',
					neutral: '#7F7F7F',
				},
				midnight: {
					50: '#f3f4fa',
					100: '#eaeaf5',
					200: '#d8d8ed',
					300: '#c0c0e1',
					400: '#aaa6d3',
					500: '#978fc5',
					600: '#8677b4',
					700: '#73659d',
					800: '#484068',
					900: '#2b2738',
					950: '#14111c',
				},
				menu: {
					yellow: '#FECA00',
					gold: '#FF9000',
					'gold-light': '#A6813D',
					'gold-dark': '#705727',
					blue: '#BFC8FF',
					'blue-dark': '#A4ADE4',
					neutral: '#777777',
					'neutral-light': '#CACACA',
					stone: '#776A5E',
					'stone-text': '#BEB1A4',
					gray: '#939299',
					bg: 'rgba(0,0,0, 0.35)',
				},
			},
			fontFamily: {
				melee: ['A-OTF Folk Pro B', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
