import Clear from '../../../assets/clear.svg?react';
import useTagStore from '../../../store/tagStore';

const ClearButton = () => {
	const { updateTag } = useTagStore((state) => state);

	return (
		<button
			onClick={() => updateTag('')}
			className='bg-black container-center rounded-full border-4 text-menu-stone border-menu-stone w-20 h-20 hover:bg-menu-yellow hover:text-black active:bg-menu-gold'
		>
			<Clear />
		</button>
	);
};

export default ClearButton;
