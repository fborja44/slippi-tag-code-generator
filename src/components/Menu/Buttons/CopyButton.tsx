import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { generateCode } from '../../../utils/utils';
import useTagStore, { TagState } from '../../../store/tagStore';
import { IoCopy } from 'react-icons/io5';
import { createMenuButtonClass } from '../MenuButton/style';
import useAudio from '../../../hooks/useAudio';

const CopyButton = () => {
	const { tag, code } = useTagStore((state: TagState) => state);
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

	return (
		<CopyToClipboard
			onCopy={() => setCopied(true)}
			text={generateCode(tag) ?? ''}
		>
			<button
				className={`${createMenuButtonClass(false)} flex-grow`}
				disabled={code.length > 16}
				onClick={() => playAudio()}
			>
				<span>
					{copied ? (
						'Copied!'
					) : (
						<>
							Copy <span className='hidden sm:inline'>Code</span>
						</>
					)}
				</span>
				<IoCopy className='h-8 w-8 md:h-10 md:w-10' />
			</button>
		</CopyToClipboard>
	);
};

export default CopyButton;
