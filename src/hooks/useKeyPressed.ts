import { useEffect, useState } from 'react';

const useKeyPressed = (key: string) => {
	if (key.length === 1) key = key.toLowerCase();
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		// Key Down Handler
		const handleKeyDown = (e: KeyboardEvent) => {
			e.preventDefault();
			if (e.key === key || e.code === key) {
				setIsPressed(true);
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
