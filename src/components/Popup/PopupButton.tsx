import { ButtonHTMLAttributes } from 'react';
import useAudio from '../../hooks/useAudio';

const PopupButton = ({
	onClick,
	children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { playAudio: playSelect } = useAudio('/audio/select.wav');
	const { playAudio: playError } = useAudio('/audio/error.wav');

	return (
		<button
			onClick={(e) => {
				if (onClick) {
					onClick(e);
					playSelect();
				} else {
					playError();
				}
			}}
			className='bg-menu-gray text-menu-gray hover:bg-menu-yellow hover:text-menu-yellow rounded-2xl text-4xl leading-tight py-1 px-4'
		>
			<div className='bg-midnight-950 rounded-lg p w-full h-full px-2 py-1'>
				<span className='relative bottom-0.5'>{children}</span>
			</div>
		</button>
	);
};

export default PopupButton;
