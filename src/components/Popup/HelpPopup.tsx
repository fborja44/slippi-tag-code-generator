import {
	HiQuestionMarkCircle,
	HiOutlineQuestionMarkCircle,
} from 'react-icons/hi';
import usePopup from '../../hooks/usePopup';
import Button from '../Button/Button';
import Popup from './Popup';
import PopupButton from './PopupButton';

const HelpPopup = () => {
	const { isOpen, open, close } = usePopup();

	return (
		<>
			<Button
				onClick={open}
				border
				icon={<HiOutlineQuestionMarkCircle className='w-6 h-6' />}
			>
				How To Use
			</Button>
			<Popup
				isOpen={isOpen}
				onClose={close}
				title={'How To Use'}
				icon={<HiQuestionMarkCircle className='w-10 h-10' />}
				actions={<PopupButton onClick={close}>Got It!</PopupButton>}
			>
				<ol className='flex flex-col gap-2 list-decimal ml-6 px-5 py-4'>
					<li>
						Enter your desired tag in the field below. You can use either your
						keyboard, or press the keys on the screen.
					</li>
					<li>Copy the code to your clipboard (by pressing the button)</li>
					<li>
						Open the <Highlight>Slippi Launcher</Highlight> and go to Settings
					</li>
					<li>
						Navigate to the <Highlight>Netplay</Highlight> page under{' '}
						<Highlight>Dolphin Settings</Highlight>
					</li>
					<li>
						Click on <Highlight>Manage Gecko Codes</Highlight>
					</li>
					<li>
						Open the <Highlight>Add</Highlight> tab and paste your code and
						click the <Highlight>Add Button</Highlight>
					</li>
					<li>
						<Highlight>You're ready to go!</Highlight>
					</li>
				</ol>
			</Popup>
		</>
	);
};

export default HelpPopup;

interface HighlightProps {
	children?: React.ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
	return <span className='text-menu-gold'>{children}</span>;
};
