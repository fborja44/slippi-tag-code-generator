import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { generateCode } from '../../utils/utils';
import useTagStore, { TagState } from '../../store/tagStore';
import { IoCopy } from 'react-icons/io5';
import { createMenuButtonClass } from '../Menu/MenuButton/style';
import useAudio from '../../hooks/useAudio';

const CopyButton = () => {
	const { tag } = useTagStore((state: TagState) => state);
	const [copied, setCopied] = useState(false);
	const { playAudio } = useAudio('/audio/select.wav');

	useEffect(() => {
		let interval = 0;
		if (copied) {
			interval = setInterval(() => {
				setCopied(false);
			}, 3500);
		}
		return () => clearInterval(interval);
	}, [copied]);

	const code = generateCode(tag);
	return (
		<CopyToClipboard onCopy={() => setCopied(true)} text={code ?? ''}>
			<button
				className={`${createMenuButtonClass(false)} flex-grow`}
				disabled={!code}
				onClick={playAudio}
			>
				<span>{copied ? 'Copied!' : 'Copy Code'}</span>
				<IoCopy className='h-10 w-10' />
			</button>
		</CopyToClipboard>
	);
};

export default CopyButton;
