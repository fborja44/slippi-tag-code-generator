import Clear from '../../../assets/clear.svg?react';
import useControls from '../../../hooks/useControls';
import SidebarButton from './SidebarButton';

const ClearButton = () => {
	const { erase } = useControls();

	return (
		<SidebarButton onClick={erase}>
			<Clear />
		</SidebarButton>
	);
};

export default ClearButton;
