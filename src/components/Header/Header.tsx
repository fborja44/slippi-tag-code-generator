import { GiGecko } from 'react-icons/gi';
import Button from '../Button/Button';
import HelpPopup from '../Popup/HelpPopup';

const Header = () => {
	return (
		<header className='container-row justify-between w-full h-[64px] text-midnight-400 px-4 sm:px-6 lg:px-8'>
			<div className='container-row gap-2.5'>
				<GiGecko className='w-9 h-9 lg:w-7 lg:h-7' />
				<h1 className='hidden md:block text-xl font-bold'>
					melee tag code generator
				</h1>
			</div>
			<nav className='container-row gap-4 lg:gap-8'>
				<a
					href='https://slippi.gg/'
					target='_blank'
					className='hidden sm:block'
				>
					<Button>Gecko Code By Fizzi</Button>
				</a>
				<HelpPopup />
			</nav>
		</header>
	);
};

export default Header;
