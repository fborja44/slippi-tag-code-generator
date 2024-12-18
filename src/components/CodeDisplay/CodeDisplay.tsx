import { charSet } from '../../data/codes';
import useTagStore from '../../store/tagStore';

const CodeDisplay = () => {
	const { tag, updateTag } = useTagStore((state) => state);

	return (
		<div className='container-col gap-4'>
			<div className='container-center bg-menu-blue border-4 border-menu-blue-dark rounded-2xl h-20 w-[448px] pb-2'>
				<input
					type='text'
					className='bg-transparent text-black placeholder:text-black/30 w-full h-full text-center text-6xl font-bold tracking-[0.5em] outline-none'
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
		</div>
	);
};

export default CodeDisplay;
