/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts,md}"],
	theme: {
		extend: {
			screens: {
				sm: { min: "640px", max: "767px" },
				md: { min: "768px", max: "1023px" },
				lg: { min: "1024px", max: "1279px" },
				xl: { min: "1280px", max: "1535px" }
			},
			colors: {
				gris: "#1E2022",
				negrito: "#1A1A1B",
				negrito2: "#151515",
				celestucho: "#d6e0f0",
				celestucho2: "#c9d6df",
				grisstacy: "#8d93ab",
				blancucho: "#F1F3F8",
				cv: "#f0f5f9",
				dorado: "#FFE194",
				verde: "#C9F4AA",
				rojo: "#F48484",
				azulito: "#AEE2FF"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
