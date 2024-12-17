import Clear from '../../../assets/clear.svg?react';

const ClearButton = () => {
	return (
		<button className='bg-black container-center rounded-full border-4 text-menu-stone border-menu-stone w-20 h-20 hover:bg-menu-yellow hover:text-black'>
			<Clear />
		</button>
	);
};

export default ClearButton;
