import { create } from 'zustand';
import { charSet } from '../data/codes';
import { KeyboardSet } from '../types/types';
import { getTagCode } from '../utils/utils';
import { MAX_LENGTH } from '../constants';

export interface TagState {
	tag: string;
	code: string;
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
	code: '',
	keyboard: KeyboardSet.englishLower,
	keysPressed: new Set(),
	updateTag: (newTag) =>
		set(() => {
			if (!newTag.split('').every((char) => charSet.has(char))) return {};
			const newCode = getTagCode(newTag, false);
			if (newCode.length > MAX_LENGTH) return {};

			return { tag: newTag, code: newCode };
		}),
	addCharacter: (character) =>
		set(({ tag }) => {
			// Filter invalid characters
			if (!charSet.has(character)) return {};

			// Check if new character will fit
			const newTag = tag + character;
			const newCode = getTagCode(newTag, false);

			if (newCode.length > MAX_LENGTH) return {};

			return { tag: newTag, code: getTagCode(newTag, false) };
		}),
	removeCharacter: () =>
		set(({ tag }) => {
			if (tag.length > 0) {
				const newTag = tag.slice(0, -1);
				return {
					tag: newTag,
					code: getTagCode(newTag, false),
				};
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
