import { HiMiniMagnifyingGlassCircle } from 'react-icons/hi2';
import usePopup from '../../hooks/usePopup';
import useTagStore from '../../store/tagStore';
import { generateCode } from '../../utils/utils';
import MenuButton from '../Menu/MenuButton/MenuButton';
import Popup from './Popup';
import PopupButton from './PopupButton';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const CodePopup = () => {
	const { isOpen, open, close } = usePopup();
	const { tag } = useTagStore((state) => state);

	return (
		<>
			<MenuButton
				onClick={open}
				icon={<FaMagnifyingGlass className='w-9 h-9' />}
				className='px-6'
			/>
			<Popup
				isOpen={isOpen}
				onClose={close}
				title={'Gecko Code Preview'}
				icon={<HiMiniMagnifyingGlassCircle className='w-10 h-10' />}
				actions={<PopupButton onClick={close}>Close</PopupButton>}
			>
				<code className='block overflow-y-auto whitespace-pre-line py-4 px-5 h-80 text-sm scrollbar-hide'>
					{generateCode(tag)}
				</code>
			</Popup>
		</>
	);
};

export default CodePopup;
