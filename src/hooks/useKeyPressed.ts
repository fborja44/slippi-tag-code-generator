import { useEffect, useState } from 'react';
import useTagStore from '../store/tagStore';

const useKeyPressed = (key: string) => {
	if (key.length === 1) key = key.toLowerCase();

	const [isPressed, setIsPressed] = useState(false);
	const { addCharacter, backspace } = useTagStore((state) => state);

	useEffect(() => {
		// Key Down Handler
		const handleKeyDown = (e: KeyboardEvent) => {
			e.preventDefault();
			if (e.key === key || e.code === key) {
				setIsPressed(true);

				if (key.length === 1) {
					addCharacter(e.key);
				} else if (e.key === 'Backspace') {
					backspace();
				}
			}
		};

		// Key Up Handler
		const handleKeyUp = (e: KeyboardEvent) => {
			e.preventDefault();
			if (e.key === key || e.code === key) {
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
	}, [key]);

	return isPressed;
};

export default useKeyPressed;
