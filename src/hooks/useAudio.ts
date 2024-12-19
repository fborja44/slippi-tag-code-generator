import { useRef } from 'react';
import useTagStore from '../store/tagStore';

const useAudio = (audioPath: string, volume: number = 0.05) => {
	let { muted } = useTagStore((state) => state);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const playAudio = (sourceMuted: boolean | undefined = undefined) => {
		if (audioRef.current) {
			audioRef.current.pause(); // Stop any currently playing audio
			audioRef.current = null; // Reset the reference
		}

		if (sourceMuted !== undefined) muted = sourceMuted; // Allow mute overwrite (for when mute button is activated)

		const audio = new Audio(audioPath);
		audio.volume = !muted ? Math.max(0, Math.min(volume, 1)) : 0; // Ensure volume is between 0 and 1; Set to 0 if muted
		audioRef.current = audio;

		audio.play().catch((error) => {
			console.error('Failed to play audio:', error);
		});
	};

	return { playAudio };
};

export default useAudio;
