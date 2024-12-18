import { ButtonHTMLAttributes } from 'react';
import { KeyboardSet } from '../../../types/types';
import useTagStore from '../../../store/tagStore';

interface AlphabetButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	character: string;
	keyboardSet: KeyboardSet;
}

const AlphabetButton = ({
	character,
	onClick,
	keyboardSet,
}: AlphabetButton) => {
	const { keyboard } = useTagStore((state) => state);

	const selected = keyboard === keyboardSet;

	return (
		<button
			onClick={onClick}
			className={`relative ${
				selected
					? 'bg-menu-neutral-light text-black'
					: 'bg-black text-menu-neutral'
			} border-4 border-menu-neutral rounded-2xl w-24 h-20 px-2 py-1.5 hover:bg-menu-yellow hover:text-black active:bg-menu-gold`}
		>
			<span className='text-[80px] leading-none absolute -top-3.5 left-0 right-0 m-auto'>
				{character}
			</span>
		</button>
	);
};

export default AlphabetButton;
