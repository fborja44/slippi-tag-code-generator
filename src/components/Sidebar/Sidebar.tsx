import { KeyboardSet } from '../../types/types';
import useTagStore from '../../store/tagStore';
import { choice } from '../../utils/utils';
import tags from '../../data/tags.json';
import AlphabetButton from '../Menu/AlphabetButton/AlphabetButton';
import ClearButton from '../Menu/ClearButton/ClearButton';
import MenuButton from '../Menu/MenuButton/MenuButton';
import { MdBackspace } from 'react-icons/md';

const Sidebar = () => {
	const { updateTag, backspace, setKeyboard } = useTagStore((state) => state);

	return (
		<section className='container-col items-end gap-4 self-end'>
			<MenuButton
				icon={<MdBackspace />}
				keyboardKey='Backspace'
				onClick={backspace}
				className='w-full'
			/>
			<div className='w-full flex flex-col gap-8 bg-menu-bg border-4 border-white rounded-3xl px-4 py-10'>
				<div className='flex flex-col gap-1 w-fit'>
					<div className='container-row gap-1'>
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
					</div>
					<div className='container-row gap-1'>
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
					</div>
					<AlphabetButton
						keyboardSet={KeyboardSet.symbol}
						character='@'
						onClick={() => setKeyboard(KeyboardSet.symbol)}
					/>
				</div>
				<ClearButton />
				<button
					onClick={() =>
						updateTag(choice(tags.filter((elem) => elem.length <= 4)))
					}
					className='bg-black border-4 border-menu-stone text-menu-stone rounded-xl uppercase font-serif text-5xl hover:bg-menu-yellow hover:text-black active:bg-menu-gold'
				>
					Random
				</button>
			</div>
		</section>
	);
};

export default Sidebar;
