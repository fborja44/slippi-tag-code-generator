import { GiGecko } from 'react-icons/gi';
import Button from '../Button/Button';
import { VscGithub } from 'react-icons/vsc';

const Header = () => {
	return (
		<header className='container-row justify-between w-full h-[64px] text-midnight-400'>
			<div className='container-row gap-2.5'>
				<GiGecko className='w-7 h-7' />
				<h1 className='text-xl font-bold'>melee tag code generator</h1>
			</div>
			<nav className='container-row gap-2'>
				<Button>How To Use</Button>
				<a href='https://slippi.gg/' target='_blank'>
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
