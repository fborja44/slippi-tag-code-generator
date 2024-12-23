import useTagStore from '../../store/tagStore';
import Cursor from '../../assets/cursor.svg?react';
import { MAX_LENGTH } from '../../constants';

const TagDisplay = () => {
	const { tag, code } = useTagStore();

	const tagArray = tag
		.split('')
		.concat(Array.from({ length: MAX_LENGTH / 2 + -tag.length }, () => ''));

	return (
		<div className='relative'>
			<div className='container-col gap-4'>
				<div className='container-row justify-between w-[320px] h-[68px] px-[14px] sm:w-[400px] sm:px-[34px] text-5xl md:h-20 md:w-[490px] md:text-6xl text-black bg-menu-blue border-4 border-menu-blue-dark rounded-2xl'>
					{/* <input
					type='text'
					className='bg-transparent text-black placeholder:text-black/30 w-full h-full text-center text-6xl font-bold tracking-[0.5em] outline-none'
					maxLength={4}s
					placeholder='TAG!'
					value={tag}
					onChange={(event) => {
						const value = event.target.value;
						if (value.split('').every((char: string) => charSet.has(char))) {
							updateTag(event.target.value);
						}
					}}
				/> */}
					{tagArray.map((char, i) => (
						<TagCharacter
							character={char}
							key={`tag-${char}-${i}`}
							cursor={
								i === tag.length ||
								(char.length > 0 && i === MAX_LENGTH / 2 - 1)
							}
						/>
					))}
				</div>
			</div>
			<div
				className={`absolute -top-5 right-0 sm:top-auto sm:left-[102%] sm:bottom-0 text-xs sm:text-base lg:text-lg text-midnight-400 ${
					code.length === MAX_LENGTH
						? 'text-melee-red'
						: code.length >= MAX_LENGTH - 2
						? 'text-menu-yellow'
						: ''
				}`}
			>
				<span>
					{code.length}/{MAX_LENGTH}
				</span>
			</div>
		</div>
	);
};

export default TagDisplay;

interface TagCharacterProps {
	character: string;
	cursor: boolean;
}

const TagCharacter = ({ character, cursor }: TagCharacterProps) => {
	return (
		<div className='relative w-12 max-w-12 md:w-14 md:max-w-14 h-full text-center'>
			<span className='absolute left-1/2 -translate-x-1/2'>{character}</span>
			{cursor && (
				<Cursor className='absolute h-3 md:h-4 left-1/2 -translate-x-1/2 -bottom-0.5' />
			)}
		</div>
	);
};
