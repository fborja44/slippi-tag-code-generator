import Clear from '../../../assets/clear.svg?react';
import useControls from '../../../hooks/useControls';

const ClearButton = () => {
	const { erase } = useControls();

	return (
		<button
			onClick={erase}
			className='bg-black container-center rounded-full border-4 text-menu-stone border-menu-stone w-20 h-20 hover:bg-menu-yellow hover:text-black active:bg-menu-gold'
		>
			<Clear />
		</button>
	);
};

export default ClearButton;
