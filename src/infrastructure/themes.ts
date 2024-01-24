import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		custom: CustomPaletteOptions;
	}

	interface PaletteOptions {
		custom?: CustomPaletteOptions;
	}
}

interface CustomPaletteOptions {
	main: string;
	light: string;
	dark: string;
	contrastText: string;
}

export const Dark = createTheme({
	palette: {
		mode: 'dark',
		custom: {
			main: '#ff4400',
			light: '#ff784e',
			dark: '#b22a00',
			contrastText: '#000',
		},
	},
});

export const Light = createTheme({
	palette: {
		mode: 'light',
		custom: {
			main: '#ff4400',
			light: '#ff784e',
			dark: '#b22a00',
			contrastText: '#000',
		},
	},
});
