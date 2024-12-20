import { MdBackspace } from 'react-icons/md';
import useControls from '../../../hooks/useControls';
import MenuButton from '../MenuButton/MenuButton';

const BackspaceButton = () => {
	const { backspace } = useControls();

	return (
		<MenuButton
			icon={<MdBackspace />}
			keyboardKey='Backspace'
			onClick={backspace}
			className='w-full px-6 md:px-0'
		/>
	);
};

export default BackspaceButton;
