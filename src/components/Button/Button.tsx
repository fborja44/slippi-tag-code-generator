import { ButtonHTMLAttributes } from 'react';
import useAudio from '../../hooks/useAudio';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	border?: boolean;
	icon?: React.ReactNode;
	iconPos?: 'left' | 'right';
}

const Button = ({
	className,
	onClick,
	children,
	icon,
	border = false,
	iconPos = 'left',
}: ButtonProps) => {
	const { playAudio } = useAudio('/audio/select.wav');

	return (
		<button
			className={`container-center gap-1.5 rounded-lg text-[16px] font-medium hover:text-midnight-300 transition-colors text-nowrap ${
				border
					? 'border border-midnight-400 hover:border-midnight-300 px-3 py-1.5'
					: ''
			} ${className}`}
			onClick={(ev) => {
				if (onClick) {
					playAudio();
					onClick(ev);
				}
			}}
		>
			{iconPos === 'left' && icon}
			<span>{children}</span>
			{iconPos === 'right' && icon}
		</button>
	);
};

export default Button;
