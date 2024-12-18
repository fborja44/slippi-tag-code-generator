import { create } from 'zustand';
import { charSet } from '../data/codes';

export interface TagState {
	tag: string;
	updateTag: (newTag: string) => void;
	addCharacter: (character: string) => void;
	backspace: () => void;
}

const useTagStore = create<TagState>()((set) => ({
	tag: 'NEO!',
	updateTag: (newTag) => set(() => ({ tag: newTag })),
	addCharacter: (character) =>
		set(({ tag }) => {
			const newTag = tag + character;
			if (charSet.has(character) && newTag.length <= 4) {
				return { tag: newTag };
			}
			return {};
		}),
	backspace: () =>
		set(({ tag }) => {
			if (tag.length > 0) {
				return { tag: tag.slice(0, -1) };
			}
			return {};
		}),
}));

export default useTagStore;
