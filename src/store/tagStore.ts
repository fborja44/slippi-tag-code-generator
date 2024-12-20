import { create } from 'zustand';
import { charSet } from '../data/codes';
import { KeyboardSet } from '../types/types';

export interface TagState {
	tag: string;
	keyboard: KeyboardSet;
	keysPressed: Set<string>;
	updateTag: (newTag: string) => void;
	addCharacter: (character: string) => void;
	removeCharacter: () => void;
	setKeyboard: (keyboard: KeyboardSet) => void;
	addKeyPressed: (key: string) => void;
	removeKeyPressed: (key: string) => void;
	muted: boolean;
	setMuted: (muted: boolean) => void;
	keyboardEnabled: boolean;
	setKeyboardEnabled: (enable: boolean) => void;
}

const useTagStore = create<TagState>()((set) => ({
	tag: '',
	keyboard: KeyboardSet.englishLower,
	keysPressed: new Set(),
	updateTag: (newTag) => set(() => ({ tag: newTag })),
	addCharacter: (character) =>
		set(({ tag }) => {
			// Filter invalid characters
			if (!charSet.has(character)) return {};

			if (tag.length < 4) {
				// Append character
				return { tag: tag + character };
			} else if (tag.length === 4) {
				// Replace last character
				return { tag: tag.slice(0, 3) + character };
			}
			return {};
		}),
	removeCharacter: () =>
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
	muted: false,
	setMuted: (muted) => set(() => ({ muted })),
	keyboardEnabled: false,
	setKeyboardEnabled: (enabled) => set(() => ({ keyboardEnabled: enabled })),
}));

export default useTagStore;
