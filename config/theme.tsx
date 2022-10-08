import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Theme {
		common: {
			borderRadius: {
				sm: string;
				md: string;
				lg: string;
			};
			colors: {
				dark: {
					main: string;
				};
				light: {
					main: string;
				};
			};
		};
	}
	interface ThemeOptions {
		common?: {
			borderRadius?: {
				sm?: string;
				lg?: string;
				full?: string;
			};
			colors?: {
				dark?: {
					main?: string;
				};
				light?: {
					main?: string;
				};
			};
		};
	}
}

const theme = createTheme({
	palette: {
		secondary: {
			main: grey["50"],
		},
	},
	common: {
		borderRadius: {
			sm: "6px",
			lg: "12px",
			full: "9999px",
		},
		colors: {
			dark: {
				main: grey["900"],
			},
			light: {
				main: "#fff",
			},
		},
	},
});

export default theme;
