import { create } from 'zustand';

export const THEME_OPTIONS = ['light', 'dark'] as const;
export type ThemeOption = (typeof THEME_OPTIONS)[number];

type Theme = {
	theme: ThemeOption;
	setTheme: (theme: ThemeOption) => void;
};

const useTheme = create<Theme>(set => ({
	theme: 'dark',
	setTheme: theme => set({ theme }),
}));

export default useTheme;
