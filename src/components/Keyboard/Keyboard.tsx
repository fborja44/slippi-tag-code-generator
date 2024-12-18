import Key from './Key/Key';
import useTagStore from '../../store/tagStore';

const Keyboard = () => {
	const { keyboard } = useTagStore((state) => state);

	return (
		<div className='grid grid-cols-10 w-fit gap-2.5 flex-wrap'>
			{keyboard.map((character, i) => (
				<Key character={character} key={`key-${character}-${i}`} />
			))}
		</div>
	);
};

export default Keyboard;
