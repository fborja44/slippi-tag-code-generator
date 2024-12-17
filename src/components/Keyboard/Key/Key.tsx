import { useEffect, useState } from 'react';

interface KeyProps {
	character: string;
}

const Key = ({ character }: KeyProps) => {
	const [isPressed, setIsPressed] = useState(false);

	useEffect(() => {
		// Key Down Handler
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === character.toLowerCase()) {
				setIsPressed(true);
			}
		};

		// Key Up Handler
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === character.toLowerCase()) {
				setIsPressed(false);
			}
		};

		if (character !== ' ') {
			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [character]);

	if (character.length !== 1) return null;

	return (
		<button
			className={`w-[70px] h-[90px] rounded-xl text-5xl flex flex-col justify-end px-1 py-1.5 border-4 ${
				!isPressed
					? 'bg-menu-bg text-menu-gold-light'
					: 'bg-menu-yellow text-black'
			} border-menu-gold-dark  hover:bg-menu-gold hover:text-black  active:bg-menu-yellow`}
		>
			{character}
		</button>
	);
};

export default Key;
