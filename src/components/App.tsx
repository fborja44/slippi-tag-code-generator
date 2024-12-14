import { LuDices } from 'react-icons/lu';
import { generateCode } from '../utils/string';
import Button from './Button/Button';
import CodeDisplay from './CodeDisplay/CodeDisplay';
import Header from './Header/Header';

const App = () => {
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
				>
					Randomize
				</Button>
				<code className='w-full h-full whitespace-pre-line bg-midnight-900 text-midnight-400 text-sm rounded-xl p-4'>
					{generateCode()}
				</code>
			</main>
		</>
	);
};

export default App;
