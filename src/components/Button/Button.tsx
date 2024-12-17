import { ButtonHTMLAttributes } from 'react';

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
	return (
		<button
			className={`container-center gap-1.5 px-3 py-1.5 rounded-lg text-[16px] font-medium hover:text-midnight-300 transition-colors ${
				border ? 'border border-midnight-400 hover:border-midnight-300' : ''
			} ${className}`}
			onClick={onClick}
		>
			{iconPos === 'left' && icon}
			<span>{children}</span>
			{iconPos === 'right' && icon}
		</button>
	);
};

export default Button;
