import { ButtonHTMLAttributes } from 'react';
import useKeyPressed from '../../../hooks/useKeyPressed';
import { createMenuButtonClass } from './style';
import useAudio from '../../../hooks/useAudio';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode;
	keyboardKey?: string;
	className?: string;
	audioPath?: string;
}

const MenuButton = ({
	children,
	icon,
	disabled,
	keyboardKey = '',
	onClick,
	className,
	audioPath,
}: MenuButtonProps) => {
	const isPressed = useKeyPressed(keyboardKey);
	const { playAudio } = useAudio(audioPath ?? '');
	const { playAudio: playError } = useAudio('/audio/error.wav');

	return (
		<button
			disabled={disabled}
			className={`${className} ${createMenuButtonClass(isPressed)}`}
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
		>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
};

export default MenuButton;
