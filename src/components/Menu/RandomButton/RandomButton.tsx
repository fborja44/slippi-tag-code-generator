import useControls from '../../../hooks/useControls';
import { choice } from '../../../utils/utils';
import tags from '../../../data/tags.json';

const RandomButton = () => {
	const { fill } = useControls();
	return (
		<button
			onClick={() => fill(choice(tags.filter((elem) => elem.length <= 4)))}
			className='bg-black border-4 border-menu-stone text-menu-stone rounded-xl h-fit uppercase font-serif text-4xl lg:text-5xl hover:bg-menu-yellow hover:text-black active:bg-menu-gold'
		>
			Random
		</button>
	);
};

export default RandomButton;
