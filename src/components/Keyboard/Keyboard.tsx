import Key from './Key/Key';
import { Alpha } from '../../data/keyboards';

const Keyboard = () => {
	return (
		<div className='grid grid-cols-10 w-fit gap-2.5 flex-wrap'>
			{Alpha.map((character, i) => (
				<Key character={character} key={`key-${character}-${i}`} />
			))}
		</div>
	);
};

export default Keyboard;
