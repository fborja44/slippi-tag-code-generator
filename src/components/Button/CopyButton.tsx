import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdContentCopy } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { generateCode } from '../../utils/utils';
import useTagStore, { TagState } from '../../store/tagStore';

const CopyButton = () => {
	const { tag } = useTagStore((state: TagState) => state);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		let interval = 0;
		if (copied) {
			interval = setInterval(() => {
				setCopied(false);
			}, 5000);
		}
		return () => clearInterval(interval);
	}, [copied]);

	return (
		<CopyToClipboard onCopy={() => setCopied(true)} text={generateCode(tag)}>
			<button className='absolute right-2 top-2 bg-midnight-700 hover:bg-midnight-600 p-2 rounded-lg transition-colors'>
				{!copied ? (
					<MdContentCopy className='h-6 w-6 text-midnight-300' />
				) : (
					<FaCheck className='h-6 w-6 text-midnight-300' />
				)}
			</button>
		</CopyToClipboard>
	);
};

export default CopyButton;
