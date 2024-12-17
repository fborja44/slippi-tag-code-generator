import { ButtonHTMLAttributes } from 'react';

interface AlphabetButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	character: string;
}

const AlphabetButton = ({ character }: AlphabetButton) => {
	return (
		<button className='relative bg-black text-menu-neutral border-4 border-menu-neutral rounded-2xl w-24 h-20 px-2 py-1.5 hover:bg-menu-yellow hover:text-black'>
			<span className='text-[80px] leading-none absolute -top-3.5 left-0 right-0 m-auto'>
				{character}
			</span>
		</button>
	);
};

export default AlphabetButton;
