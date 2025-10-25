module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				apotek: ["Apotek", "ui-sans-serif", "system-ui", "sans-serif"],
				"apotek-condensed": [
					'"Apotek Condensed"',
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
