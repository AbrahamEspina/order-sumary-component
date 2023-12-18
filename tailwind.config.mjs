/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				paleBlue: 'hsl(225, 100%, 94%)',
				brightBlue: 'hsl(245, 75%, 52%)',
				veryPaleBlue: 'hsl(225, 100%, 98%)',
				desaturatedBlue: 'hsl(224, 23%, 55%)',
				darkBlue: 'hsl(223, 47%, 23%)',
			},
		},
	},
	plugins: [],
}
