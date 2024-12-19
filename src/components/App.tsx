import CopyButton from './Button/CopyButton';
import TagDisplay from './TagDisplay/TagDisplay';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import CodePopup from './Popup/CodePopup';

const App = () => {
	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<TagDisplay />
					<Keyboard />
					<div className='w-full container-row gap-3'>
						<CopyButton />
						<CodePopup />
					</div>
				</section>
				<Sidebar />
			</main>
			<Footer />
		</>
	);
};

export default App;
