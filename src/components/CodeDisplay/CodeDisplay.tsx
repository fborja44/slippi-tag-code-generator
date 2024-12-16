import Indicator from '../../assets/Indicator.svg?react';
import { charSet } from '../../data/codes';
import useTagStore from '../../store/tagStore';

const CodeDisplay = () => {
	const { tag, updateTag } = useTagStore((state) => state);

	return (
		<div className='container-col gap-4'>
			<div className='container-center bg-midnight-900 rounded-lg h-20 w-52 pb-2'>
				<input
					type='text'
					className='bg-transparent text-midnight-50 placeholder:text-midnight-700/80 w-full h-full text-center text-6xl font-bold tracking-wider outline-none'
					maxLength={4}
					placeholder='TAG!'
					value={tag}
					onChange={(event) => {
						const value = event.target.value;
						if (value.split('').every((char: string) => charSet.has(char))) {
							updateTag(event.target.value);
						}
					}}
				/>
			</div>
			<Indicator className='h-10 w-auto text-melee-red' />
		</div>
	);
};

export default CodeDisplay;
