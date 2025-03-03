/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				textPrimary: "#EBE6E1",
				bgPrimary: "#0B0C0F",
			},
			fontSize: {
				titleOne: "70px",
				titleTwo: "80px",
			},
		},
	},
	plugins: [],
};
