import CopyButton from './Menu/Buttons/CopyButton';
import TagDisplay from './TagDisplay/TagDisplay';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import CodePopup from './Popup/CodePopup';
import BackspaceButton from './Menu/Buttons/BackspaceButton';

const App = () => {
	return (
		<>
			<Header />
			<main className='flex flex-col items-center md:flex-row justify-center gap-3 h-full py-6 md:py-10 px-4 mx-auto w-fit'>
				<section className='container-col gap-3 w-fit'>
					<TagDisplay />
					<Keyboard />
					<div className='w-full container-row gap-3'>
						<CopyButton />
						<div className='hidden sm:block'>
							<CodePopup />
						</div>
						<div className='block md:hidden'>
							<BackspaceButton />
						</div>
					</div>
				</section>
				<Sidebar />
			</main>
			<Footer />
		</>
	);
};

export default App;
