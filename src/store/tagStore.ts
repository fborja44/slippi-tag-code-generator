import { create } from 'zustand';
import { charSet } from '../data/codes';
import { KeyboardSet } from '../types/types';

export interface TagState {
	tag: string;
	keyboard: KeyboardSet;
	keysPressed: Set<string>;
	updateTag: (newTag: string) => void;
	addCharacter: (character: string) => void;
	backspace: () => void;
	setKeyboard: (keyboard: KeyboardSet) => void;
	addKeyPressed: (key: string) => void;
	removeKeyPressed: (key: string) => void;
}

const useTagStore = create<TagState>()((set) => ({
	tag: '',
	keyboard: KeyboardSet.englishLower,
	keysPressed: new Set(),
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
	addKeyPressed: (key) =>
		set(({ keysPressed }) => ({
			keysPressed: new Set(keysPressed).add(key),
		})),
	removeKeyPressed: (key) =>
		set(({ keysPressed }) => {
			const newKeysPressed = new Set(keysPressed);
			newKeysPressed.delete(key);
			return { keysPressed: newKeysPressed };
		}),
}));

export default useTagStore;
