import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
	return (
		<footer className='h-[64px] container-center w-full pb-6 text-midnight-600'>
			<small className='container-row gap-2'>
				<span>
					Message <span className='text-midnight-400'>@betabetabeta</span> on
					Discord for any issues!
				</span>{' '}
				<span className='text-midnight-400'>-</span>
				<a
					href='https://github.com/fborja44/slippi-tag-code-generator'
					target='_blank'
					className='group container-row gap-1 text-midnight-400 hover:text-midnight-300'
				>
					<span>GitHub</span>
					<VscGithub className='w-4 h-4 text-midnight-600 group-hover:text-midnight-500' />
				</a>
			</small>
		</footer>
	);
};

export default Footer;
