import Clear from '../../../assets/clear.svg?react';
import useControls from '../../../hooks/useControls';
import SidebarButton from './SidebarButton';

const ClearButton = () => {
	const { erase } = useControls();

	return (
		<SidebarButton onClick={erase}>
			<Clear className='w-12 h-12 lg:w-16 lg:h-16' />
		</SidebarButton>
	);
};

export default ClearButton;
