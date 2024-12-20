import { KeyboardSet } from '../../types/types';
import useTagStore from '../../store/tagStore';
import AlphabetButton from '../Menu/Buttons/AlphabetButton';
import ClearButton from '../Menu/SidebarButton/ClearButton';
import AudioButton from '../Menu/SidebarButton/AudioButton';
import BackspaceButton from '../Menu/Buttons/BackspaceButton';
import RandomButton from '../Menu/RandomButton/RandomButton';

const Sidebar = () => {
	const { setKeyboard } = useTagStore((state) => state);
	return (
		<section className='container-col items-end gap-4 self-end w-full md:w-fit'>
			<div className='hidden md:block w-full'>
				<BackspaceButton />
			</div>
			<div className='w-full flex flex-col sm:flex-row justify-between md:flex-col gap-4 md:gap-8 bg-menu-bg border-4 border-white rounded-3xl px-4 py-4 md:py-10'>
				<div className='flex flex-row md:flex-col self-center gap-1 w-fit'>
					<ButtonGroup>
						<AlphabetButton
							keyboardSet={KeyboardSet.hiragana}
							character='あ'
							onClick={() => setKeyboard(KeyboardSet.hiragana)}
						/>
						<AlphabetButton
							keyboardSet={KeyboardSet.katakana}
							character='ア'
							onClick={() => setKeyboard(KeyboardSet.katakana)}
						/>
					</ButtonGroup>
					<ButtonGroup>
						<AlphabetButton
							keyboardSet={KeyboardSet.englishUpper}
							character='A'
							onClick={() => setKeyboard(KeyboardSet.englishUpper)}
						/>
						<AlphabetButton
							keyboardSet={KeyboardSet.englishLower}
							character='a'
							onClick={() => setKeyboard(KeyboardSet.englishLower)}
						/>
					</ButtonGroup>
					<AlphabetButton
						keyboardSet={KeyboardSet.symbol}
						character='@'
						onClick={() => setKeyboard(KeyboardSet.symbol)}
					/>
				</div>
				<div className='flex flex-col justify-between gap-2 md:gap-8'>
					<div className='container-row gap-2 justify-between px-12 sm:px-0.5 lg:px-2'>
						<ClearButton />
						<AudioButton />
					</div>
					<RandomButton />
				</div>
			</div>
		</section>
	);
};

export default Sidebar;

interface ButtonGroupProps {
	children?: React.ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
	return <div className='flex flex-col md:flex-row gap-1'>{children}</div>;
};
