import { useRef } from 'react';

const useAudio = (audioPath: string, volume: number = 0.1) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause(); // Stop any currently playing audio
			audioRef.current = null; // Reset the reference
		}

		const audio = new Audio(audioPath);
		audio.volume = Math.max(0, Math.min(volume, 1)); // Ensure volume is between 0 and 1
		audioRef.current = audio;

		audio.play().catch((error) => {
			console.error('Failed to play audio:', error);
		});
	};

	return { playAudio };
};

export default useAudio;
