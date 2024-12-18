import { KeyboardSet } from '../types/types';
import useTagStore from '../store/tagStore';
import { choice } from '../utils/utils';
import CopyButton from './Button/CopyButton';
import TagDisplay from './TagDisplay/TagDisplay';
import tags from '../data/tags.json';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import AlphabetButton from './Menu/AlphabetButton/AlphabetButton';
import ClearButton from './Menu/ClearButton/ClearButton';
import MenuButton from './Menu/MenuButton/MenuButton';
import { MdBackspace } from 'react-icons/md';
import Footer from './Footer/Footer';

const App = () => {
	const { updateTag, backspace, setKeyboard } = useTagStore((state) => state);

	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<TagDisplay />
					<Keyboard />
					<CopyButton />
				</section>
				<section className='container-col items-end gap-4 self-end'>
					<MenuButton
						icon={<MdBackspace />}
						keyboardKey='Backspace'
						onClick={backspace}
					/>
					<div className='w-full flex flex-col gap-8 bg-menu-bg border-4 border-white rounded-3xl px-4 py-10'>
						<div className='flex flex-col gap-1 w-fit'>
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
			</main>
			<Footer />
		</>
	);
};

export default App;
