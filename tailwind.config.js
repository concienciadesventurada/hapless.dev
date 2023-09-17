/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts,md}"],
	theme: {
		extend: {
			colors: {
				gris: "#1E2022",
				negrito: "#1A1A1B",
				mate: "#151515",
				dorado: "#FFE194",
				verde: "#C9F4AA",
				rojo: "#F48484",
				azulito: "#AEE2FF"
			},
			animation: {
				typing: "typing 0.8s steps(10), blink 0.74s infinite"
			},
			keyframes: {
				typing: {
					from: {
						width: "0"
					},
					to: {
						width: "10ch"
					}
				},
				blink: {
					from: {
						"border-right-width": "16px",
						"border-right-color": "transparent"
					},
					to: {
						"border-right-width": "16px",
						"border-right-color": "white"
					}
				}
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
