import { useEffect, useState } from 'react';
import useTagStore from '../store/tagStore';
import { KeyboardSet } from '../types/types';
import {
	EnglishLowerKeyboard,
	HiraganaKeyboard,
	KatakanaKeyboard,
	SymbolKeyboard,
} from '../data/keyboards';

const useKeyPressed = (key: string) => {
	const [isPressed, setIsPressed] = useState(false);
	const { addCharacter, backspace, keyboard, setKeyboard } = useTagStore(
		(state) => state
	);

	useEffect(() => {
		// Key Down Handler
		const handleKeyDown = (e: KeyboardEvent) => {
			e.preventDefault();

			// Change Keyboards automatically
			if (keyboard !== KeyboardSet.symbol) {
				if (
					!EnglishLowerKeyboard.includes(e.key.toLocaleLowerCase()) && // Prioritize English keyboard
					SymbolKeyboard.includes(e.key.toLocaleLowerCase())
				) {
					setKeyboard(KeyboardSet.symbol);
					addCharacter(e.key);
				}
			}
			if (
				keyboard !== KeyboardSet.englishLower &&
				keyboard !== KeyboardSet.englishUpper
			) {
				if (EnglishLowerKeyboard.includes(e.key.toLocaleLowerCase())) {
					setKeyboard(KeyboardSet.englishLower);
					addCharacter(e.key);
				}
			}
			if (keyboard !== KeyboardSet.hiragana) {
				if (HiraganaKeyboard.includes(e.key.toLocaleLowerCase())) {
					setKeyboard(KeyboardSet.hiragana);
					addCharacter(e.key);
				}
			}
			if (keyboard !== KeyboardSet.katakana) {
				if (KatakanaKeyboard.includes(e.key.toLocaleLowerCase())) {
					setKeyboard(KeyboardSet.katakana);
					addCharacter(e.key);
				}
			}

			// Detect valid keypresses
			if (
				e.key === key ||
				e.key.toLowerCase() === key ||
				e.key.toUpperCase() === key ||
				(e.shiftKey && key === 'Shift')
			) {
				setIsPressed(true);
				// addKeyPressed(e.key);
				if (key.length === 1) {
					const character =
						keyboard === KeyboardSet.englishUpper
							? e.shiftKey
								? e.key.toLowerCase()
								: e.key.toUpperCase()
							: e.key; // Default Behavior
					addCharacter(character);
				} else if (e.key === 'Backspace') {
					backspace();
				}
			}
		};

		// Key Up Handler
		const handleKeyUp = (e: KeyboardEvent) => {
			e.preventDefault();
			if (
				e.key === key ||
				e.key.toLowerCase() === key ||
				e.key.toUpperCase() === key ||
				(!e.shiftKey && key === 'Shift')
			) {
				setIsPressed(false);
			}
		};

		if (key !== ' ') {
			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [addCharacter, backspace, key, keyboard, setKeyboard]);

	return isPressed;
};

export default useKeyPressed;
