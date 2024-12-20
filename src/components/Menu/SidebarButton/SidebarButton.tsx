import { ButtonHTMLAttributes } from 'react';
import useAudio from '../../../hooks/useAudio';

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	keyboardKey?: string;
	className?: string;
	audioPath?: string;
}

const SidebarButton = ({
	children,
	onClick,
	audioPath,
}: SidebarButtonProps) => {
	const { playAudio } = useAudio(audioPath ?? '');
	const { playAudio: playError } = useAudio('/audio/error.wav');

	return (
		<button
			onClick={(e) => {
				if (onClick) {
					onClick(e);
					if (audioPath) {
						playAudio();
					}
				} else {
					playError();
				}
			}}
			className={`bg-black container-center rounded-full border-4 text-menu-stone border-menu-stone w-16 h-16 lg:w-20 lg:h-20 hover:bg-menu-yellow hover:text-black active:bg-menu-gold`}
		>
			{children}
		</button>
	);
};

export default SidebarButton;
