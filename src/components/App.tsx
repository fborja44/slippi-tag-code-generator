import { LuDices } from 'react-icons/lu';
import Button from './Button/Button';
import CodeDisplay from './CodeDisplay/CodeDisplay';
import Header from './Header/Header';
import useTagStore, { TagState } from '../store/tagStore';
import { generateCode, choice } from '../utils/utils';
import presetTags from '../data/tags.json';
import CopyButton from './Button/CopyButton';

const App = () => {
	const { tag, updateTag } = useTagStore((state: TagState) => state);

	return (
		<>
			<Header />
			<main className='container-col gap-8 h-full max-w-[500px] py-10 mx-auto'>
				<CodeDisplay />
				<Button
					className='w-full'
					icon={<LuDices className='w-5 h-5' />}
					border
					iconPos='right'
					onClick={() => updateTag(choice(presetTags))}
				>
					Randomize
				</Button>
				<code className='relative w-full h-full whitespace-pre-line bg-midnight-900 text-midnight-400 text-sm rounded-xl p-4'>
					<CopyButton />
					<span>{generateCode(tag)}</span>
				</code>
			</main>
		</>
	);
};

export default App;
