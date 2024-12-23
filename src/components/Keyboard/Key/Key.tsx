import useKeyPressed from '../../../hooks/useKeyPressed';
import useControls from '../../../hooks/useControls';
import useTagStore from '../../../store/tagStore';
import codeSet, { charSet } from '../../../data/codes';
import { MAX_LENGTH } from '../../../constants';

interface KeyProps {
	character: string;
}

const Key = ({ character }: KeyProps) => {
	const isPressed = useKeyPressed(character);
	const { code } = useTagStore();
	const { type } = useControls();

	if (character.length !== 1 || !charSet.has(character)) return null;

	const newCode = code + codeSet[character];
	const disabled = newCode.length > MAX_LENGTH;

	return (
		<button
			// onMouseEnter={move}
			onClick={() => type(character)}
			className={`w-[50px] h-[65px] text-[32px] leading-none rounded-lg md:w-[60px] md:h-[80px] md:text-[40px] lg:w-[70px] lg:h-[90px] lg:text-5xl lg:rounded-xl flex flex-col justify-end px-0.5 py-1.5 border-4 ${
				!isPressed
					? 'bg-menu-bg text-menu-gold-light'
					: 'bg-menu-yellow text-black'
			} ${
				disabled ? 'brightness-[60%]' : ''
			} border-menu-gold-dark  hover:bg-menu-gold hover:text-black  active:bg-menu-yellow`}
		>
			<span>{character}</span>
		</button>
	);
};

export default Key;
