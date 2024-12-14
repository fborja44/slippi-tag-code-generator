import Indicator from '../../assets/Indicator.svg?react';

const CodeDisplay = () => {
	return (
		<div className='container-col gap-4'>
			<input
				type='text'
				className='container-center bg-midnight-900 text-midnight-400 placeholder:text-midnight-700/80 rounded-lg w-44 h-20 text-center text-6xl font-bold tracking-wider outline-none'
				maxLength={4}
				placeholder='TAG!'
			/>
			<Indicator className='h-10 w-auto text-melee-red' />
		</div>
	);
};

export default CodeDisplay;
