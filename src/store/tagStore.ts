import { create } from 'zustand';
import { charSet } from '../data/codes';
import { AlphaKeyboard } from '../data/keyboards';

export interface TagState {
	tag: string;
	keyboard: string[];
	updateTag: (newTag: string) => void;
	addCharacter: (character: string) => void;
	backspace: () => void;
	setKeyboard: (keyboard: string[]) => void;
}

const useTagStore = create<TagState>()((set) => ({
	tag: '',
	keyboard: AlphaKeyboard,
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
	setKeyboard: (keyboard) => set(() => ({ keyboard })),
}));

export default useTagStore;
