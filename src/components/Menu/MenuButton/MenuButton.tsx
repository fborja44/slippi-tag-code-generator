import { ButtonHTMLAttributes } from 'react';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode;
}

const MenuButton = ({ children, icon }: MenuButtonProps) => {
	return (
		<button className='container-row justify-center gap-3 rounded-xl uppercase bg-black w-full text-menu-stone-text font-serif text-5xl py-1 text-center border-4 border-menu-gray hover:bg-menu-yellow hover:text-black'>
			{children && <span>{children}</span>}
			{icon}
		</button>
	);
};

export default MenuButton;
