import { ButtonHTMLAttributes } from 'react';
import useKeyPressed from '../../../hooks/useKeyPressed';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode;
	keyboardKey?: string;
}

const MenuButton = ({ children, icon, keyboardKey = '' }: MenuButtonProps) => {
	const isPressed = useKeyPressed(keyboardKey);

	return (
		<button
			className={`container-row justify-center gap-3 rounded-xl uppercase w-full ${
				!isPressed
					? 'bg-black text-menu-stone-text'
					: 'bg-menu-yellow text-black'
			} font-serif text-5xl py-1 text-center border-4 border-menu-gray hover:bg-menu-yellow hover:text-black active:bg-menu-gold`}
		>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
};

export default MenuButton;
