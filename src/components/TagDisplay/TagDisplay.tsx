import useTagStore from '../../store/tagStore';
import Cursor from '../../assets/cursor.svg?react';

const TagDisplay = () => {
	const { tag } = useTagStore((state) => state);

	const tagArray = tag
		.split('')
		.concat(Array.from({ length: 4 + -tag.length }, () => ''));

	return (
		<div className='container-col gap-4'>
			<div className='container-row justify-between w-[300px] h-[68px] px-[40px] sm:w-[400px] sm:px-[75px] text-5xl md:h-20 md:w-[448px] md:text-6xl text-black bg-menu-blue border-4 border-menu-blue-dark rounded-2xl'>
				{/* <input
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
				/> */}
				{tagArray.map((char, i) => (
					<TagCharacter
						character={char}
						key={`tag-${char}-${i}`}
						cursor={i === tag.length || (char.length > 0 && i === 3)}
					/>
				))}
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
		<div className='relative w-16 md:w-20 h-full text-center'>
			<span>{character}</span>
			{cursor && (
				<Cursor className='absolute h-4 md:h-5 left-1/2 -translate-x-1/2 -bottom-0.5' />
			)}
		</div>
	);
};
