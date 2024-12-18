import { ButtonHTMLAttributes } from 'react';
import useKeyPressed from '../../../hooks/useKeyPressed';
import { createMenuButtonClass } from './style';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode;
	keyboardKey?: string;
}

const MenuButton = ({
	children,
	icon,
	disabled,
	keyboardKey = '',
	onClick,
}: MenuButtonProps) => {
	const isPressed = useKeyPressed(keyboardKey);

	return (
		<button
			disabled={disabled}
			className={createMenuButtonClass(isPressed)}
			onClick={onClick}
		>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
};

export default MenuButton;
