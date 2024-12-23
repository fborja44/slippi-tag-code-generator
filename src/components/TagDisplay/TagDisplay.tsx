import useTagStore from '../../store/tagStore';
import Cursor from '../../assets/cursor.svg?react';
import { MAX_LENGTH } from '../../constants';
import { HiExclamationCircle } from 'react-icons/hi2';

const TagDisplay = () => {
	const { tag, code } = useTagStore();

	const tagArray = tag
		.split('')
		.concat(Array.from({ length: MAX_LENGTH / 2 + -tag.length }, () => ''));

	return (
		<div className='relative'>
			{tag.length > 4 && (
				<div className='container-row gap-0.5 absolute -top-5 text-xs text-menu-gold'>
					<HiExclamationCircle className='h-4 w-4' />
					<span>Tag may go beyond in-game display</span>
				</div>
			)}
			<div className='container-row justify-between w-[320px] h-[68px] px-[14px] sm:w-[400px] sm:px-[34px] text-5xl md:h-20 md:w-[490px] md:text-6xl text-black bg-menu-blue border-4 border-menu-blue-dark rounded-2xl'>
				{tagArray.map((char, i) => (
					<TagCharacter
						character={char}
						key={`tag-${char}-${i}`}
						cursor={
							i === tag.length || (char.length > 0 && i === MAX_LENGTH / 2 - 1)
						}
					/>
				))}
			</div>
			<div
				className={`absolute -top-5 right-0 sm:top-auto sm:left-[102%] sm:bottom-0 text-xs sm:text-base lg:text-lg ${
					code.length === MAX_LENGTH
						? 'text-melee-red'
						: code.length >= MAX_LENGTH - 2
						? 'text-menu-yellow'
						: 'text-midnight-400'
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
