import CodeDisplay from './CodeDisplay/CodeDisplay';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import AlphabetButton from './Menu/AlphabetButton/AlphabetButton';
import ClearButton from './Menu/ClearButton/ClearButton';
import MenuButton from './Menu/MenuButton/MenuButton';
import { IoCopy } from 'react-icons/io5';
import { MdBackspace } from 'react-icons/md';

const App = () => {
	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<CodeDisplay />
					<Keyboard />
					<MenuButton icon={<IoCopy className='h-10 w-10' />}>
						Copy Code
					</MenuButton>
				</section>
				<section className='container-col items-end gap-4 self-end'>
					<MenuButton icon={<MdBackspace />} keyboardKey='Backspace' />
					<div className='w-full flex flex-col gap-8 bg-menu-bg border-4 border-white rounded-3xl px-4 py-10'>
						<div className='flex flex-col gap-1 w-fit'>
							<AlphabetButton character='あ' />
							<AlphabetButton character='ア' />
							<div className='container-row gap-1'>
								<AlphabetButton character='A' />
								<AlphabetButton character='a' />
							</div>
						</div>
						<ClearButton />
						<button className='bg-black border-4 border-menu-stone text-menu-stone rounded-xl uppercase font-serif text-5xl hover:bg-menu-yellow hover:text-black active:bg-menu-gold'>
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
