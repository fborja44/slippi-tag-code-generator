import { ButtonHTMLAttributes } from 'react';

const PopupButton = ({
	onClick,
	children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			onClick={onClick}
			className='bg-menu-gray text-menu-gray hover:bg-menu-yellow hover:text-menu-yellow rounded-2xl text-4xl leading-tight py-1 px-4'
		>
			<div className='bg-midnight-950 rounded-lg p w-full h-full px-2 py-1'>
				<span className='relative bottom-0.5'>{children}</span>
			</div>
		</button>
	);
};

export default PopupButton;
