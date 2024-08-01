/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#6ee7b7',
				text: 'rgba(228, 228, 231, 0.8)',
				'text-impact': 'rgba(228, 228, 231, 1)',
				bg: 'rgb(39, 39, 42)'
			},
			fontFamily: {
				body: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			}
		}
	},
	plugins: []
};
