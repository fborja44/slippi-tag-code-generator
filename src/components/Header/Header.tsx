import { GiGecko } from 'react-icons/gi';
import Button from '../Button/Button';
import { VscGithub } from 'react-icons/vsc';

const Header = () => {
	return (
		<header className='container-row justify-between w-full h-16'>
			<div className='container-row gap-2.5'>
				<GiGecko className='w-7 h-7 text-midnight-400' />
				<h1 className='text-xl font-bold'>melee tag code generator</h1>
			</div>
			<nav className='container-row gap-2'>
				<Button>How To Use</Button>
				<Button>Gecko Code By Fizzi</Button>
				<Button border icon={<VscGithub className='h-5 w-5' />}>
					GitHub
				</Button>
			</nav>
		</header>
	);
};

export default Header;
