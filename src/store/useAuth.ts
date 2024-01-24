import { create } from 'zustand';

type Auth = {
	role: 'none' | 'user' | 'admin';
	setRole: (role: 'none' | 'user' | 'admin') => void;
};

const useAuth = create<Auth>(set => ({
	role: 'none',
	setRole: role => set({ role }),
}));

export default useAuth;
