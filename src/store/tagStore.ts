import { create } from 'zustand';

interface TagState {
	tag: string;
	updateTag: (newTag: string) => void;
}

const useTagStore = create<TagState>()((set) => ({
	tag: 'NEO!',
	updateTag: (newTag) => set(() => ({ tag: newTag })),
}));

export default useTagStore;
