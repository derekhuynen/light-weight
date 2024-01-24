import { create } from 'zustand';

type SnackbarStore = {
	isOpen: boolean;
	message: string;
	severity: 'success' | 'info' | 'warning' | 'error';

	open: (
		message: string,
		severity: 'success' | 'info' | 'warning' | 'error'
	) => void;
	close: () => void;
};

const useSnackbar = create<SnackbarStore>(set => ({
	isOpen: false,
	message: '',
	severity: 'success',

	open: (message, severity) => set({ isOpen: true, message, severity }),
	close: () => set({ isOpen: false, message: '', severity: 'success' }),
}));

export default useSnackbar;
