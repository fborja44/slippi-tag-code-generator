import CodeDisplay from './CodeDisplay/CodeDisplay';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import AlphabetButton from './Menu/AlphabetButton/AlphabetButton';
import ClearButton from './Menu/ClearButton/ClearButton';
import MenuButton from './Menu/MenuButton/MenuButton';

const App = () => {
	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<CodeDisplay />
					<Keyboard />
					<MenuButton>Copy Code</MenuButton>
				</section>
				<section className='container-col items-end gap-4 self-end'>
					<MenuButton>Preview</MenuButton>
					<div className='w-full flex flex-col gap-8 bg-menu-bg border-4 border-white rounded-3xl px-4 py-10'>
						<div className='container-col gap-1 w-fit'>
							<AlphabetButton character='あ' />
							<AlphabetButton character='ア' />
							<AlphabetButton character='A' />
						</div>
						<ClearButton />
						<button className='bg-black border-4 border-menu-stone text-menu-stone rounded-xl uppercase font-serif text-5xl hover:bg-menu-yellow hover:text-black'>
							Random
						</button>
					</div>
				</section>
			</main>
			<footer className='h-[64px] container-center w-full pb-6 text-midnight-400'>
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
