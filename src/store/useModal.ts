import { create } from 'zustand';

type ModalStore = {
	isOpen: boolean;
	content: string;
	title: string;
	primaryAction?: () => void;
	primaryActionText?: string;

	open: (
		content: string,
		title: string,
		primaryAction?: () => void,
		primaryActionText?: string
	) => void;
	close: () => void;
};

const useModal = create<ModalStore>(set => ({
	isOpen: false,
	content: '',
	title: '',

	open: (content, title, primaryAction, primaryActionText) =>
		set({
			isOpen: true,
			content,
			title,
			primaryAction,
			primaryActionText,
		}),
	close: () =>
		set({
			isOpen: false,
			content: '',
			title: '',
			primaryAction: undefined,
			primaryActionText: undefined,
		}),
}));

export default useModal;
