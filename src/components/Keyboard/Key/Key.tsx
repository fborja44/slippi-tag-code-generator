import { charSet } from '../../../data/codes';
import useKeyPressed from '../../../hooks/useKeyPressed';
import useTagStore from '../../../store/tagStore';

interface KeyProps {
	character: string;
}

const Key = ({ character }: KeyProps) => {
	const isPressed = useKeyPressed(character);
	const { tag, updateTag } = useTagStore((state) => state);

	if (character.length !== 1) return null;

	/**
	 * Adds the character to the entered tag if it exists in the character set
	 */
	const handleClick = () => {
		if (charSet.has(character) && tag.length < 4) {
			updateTag(tag + character);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`w-[70px] h-[90px] rounded-xl text-5xl flex flex-col justify-end px-0.5 py-1.5 border-4 ${
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
