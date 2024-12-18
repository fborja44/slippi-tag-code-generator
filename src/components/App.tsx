import CopyButton from './Button/CopyButton';
import TagDisplay from './TagDisplay/TagDisplay';
import Header from './Header/Header';
import Keyboard from './Keyboard/Keyboard';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
	return (
		<>
			<Header />
			<main className='container-row justify-center gap-3 h-full py-10 mx-auto'>
				<section className='container-col gap-3'>
					<TagDisplay />
					<Keyboard />
					<CopyButton />
				</section>
				<Sidebar />
			</main>
			<Footer />
		</>
	);
};

export default App;
