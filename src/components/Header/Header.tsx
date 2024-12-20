import { GiGecko } from 'react-icons/gi';
import Button from '../Button/Button';
import { VscGithub } from 'react-icons/vsc';
import HelpPopup from '../Popup/HelpPopup';

const Header = () => {
	return (
		<header className='container-row justify-between w-full h-[64px] text-midnight-400 px-4 sm:px-6 md:px-8'>
			<div className='container-row gap-2.5'>
				<GiGecko className='w-9 h-9 lg:w-7 lg:h-7' />
				<h1 className='hidden md:block text-xl font-bold'>
					melee tag code generator
				</h1>
			</div>
			<nav className='container-row gap-4 lg:gap-8'>
				<span>
					<HelpPopup />
				</span>
				<a
					href='https://slippi.gg/'
					target='_blank'
					className='hidden sm:block'
				>
					<Button>Gecko Code By Fizzi</Button>
				</a>
				<a
					href='https://github.com/fborja44/slippi-tag-code-generator'
					target='_blank'
				>
					<Button border icon={<VscGithub className='h-5 w-5' />}>
						GitHub
					</Button>
				</a>
			</nav>
		</header>
	);
};

export default Header;
