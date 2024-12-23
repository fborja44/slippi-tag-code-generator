import { FaVolumeHigh } from 'react-icons/fa6';
import SidebarButton from './SidebarButton';
import useTagStore from '../../../store/tagStore';
import { FaVolumeMute } from 'react-icons/fa';
import useAudio from '../../../hooks/useAudio';

const AudioButton = () => {
	const { muted, setMuted } = useTagStore();
	const { playAudio } = useAudio('/audio/select.wav');

	return (
		<SidebarButton
			onClick={() => {
				setMuted(!muted);
				playAudio(!muted);
			}}
		>
			{muted ? (
				<FaVolumeMute className='w-11 h-11 lg:w-14 lg:h-14' />
			) : (
				<FaVolumeHigh className='w-11 h-11 lg:w-14 lg:h-14' />
			)}
		</SidebarButton>
	);
};

export default AudioButton;
