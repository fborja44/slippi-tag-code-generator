import useKeyPressed from '../../../hooks/useKeyPressed';

interface KeyProps {
	character: string;
}

const Key = ({ character }: KeyProps) => {
	const isPressed = useKeyPressed(character);

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
