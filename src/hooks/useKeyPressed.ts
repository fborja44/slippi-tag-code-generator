import { useEffect, useState } from 'react';
import useTagStore from '../store/tagStore';
import { KeyboardSet } from '../types/types';

const useKeyPressed = (key: string) => {
	const [isPressed, setIsPressed] = useState(false);
	const { addCharacter, backspace, keyboard, setKeyboard } = useTagStore(
		(state) => state
	);

	useEffect(() => {
		// Key Down Handler
		const handleKeyDown = (e: KeyboardEvent) => {
			e.preventDefault();
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
