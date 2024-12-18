import {
	AlphaKeyboard,
	HiraganaKeyboard,
	KatakanaKeyboard,
} from '../data/keyboards';
import useTagStore from '../store/tagStore';
import { choice } from '../utils/utils';
import CopyButton from './Button/CopyButton';
import CodeDisplay from './CodeDisplay/CodeDisplay';
import { presetTags } from './constants/tags';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import AlphabetButton from './Menu/AlphabetButton/AlphabetButton';
import ClearButton from './Menu/ClearButton/ClearButton';
import MenuButton from './Menu/MenuButton/MenuButton';
import { MdBackspace } from 'react-icons/md';

const App = () => {
	const { updateTag, backspace, setKeyboard } = useTagStore((state) => state);

	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<CodeDisplay />
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
								character='あ'
								onClick={() => setKeyboard(HiraganaKeyboard)}
							/>
							<AlphabetButton
								character='ア'
								onClick={() => setKeyboard(KatakanaKeyboard)}
							/>
							<div className='container-row gap-1'>
								<AlphabetButton
									character='A'
									onClick={() => setKeyboard(AlphaKeyboard)}
								/>
								<AlphabetButton
									character='a'
									onClick={() =>
										setKeyboard(AlphaKeyboard.map((char) => char.toLowerCase()))
									}
								/>
							</div>
						</div>
						<ClearButton />
						<button
							onClick={() => updateTag(choice(presetTags))}
							className='bg-black border-4 border-menu-stone text-menu-stone rounded-xl uppercase font-serif text-5xl hover:bg-menu-yellow hover:text-black active:bg-menu-gold'
						>
							Random
						</button>
					</div>
				</section>
			</main>
			<footer className='h-[64px] container-center w-full pb-6 text-midnight-400 uppercase'>
				<small>
					Created by{' '}
					<a
						href='https://github.com/fborja44'
						target='_blank'
						className='text-midnight-300 hover:text-midnight-200 transition-colors'
					>
						beta
					</a>
				</small>
			</footer>
		</>
	);
};

export default App;
