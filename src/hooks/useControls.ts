import { charSet } from '../data/codes';
import useTagStore from '../store/tagStore';
import useAudio from './useAudio';

const useControls = () => {
	const { tag, updateTag, addCharacter, removeCharacter } = useTagStore(
		(state) => state
	);
	const { playAudio: playSelect } = useAudio('/audio/select.wav');
	const { playAudio: playCancel } = useAudio('/audio/cancel.wav');
	const { playAudio: playMove } = useAudio('/audio/move.wav', 0.05);

	const type = (character: string) => {
		if (character.length > 1) return;
		if (charSet.has(character) && tag.length < 4) {
			addCharacter(character);
			playSelect();
		}
	};

	const backspace = () => {
		playCancel();
		removeCharacter();
	};

	const erase = () => {
		playCancel();
		updateTag('');
	};

	const fill = (tag: string) => {
		if (tag.length <= 4 && tag.split('').every((char) => charSet.has(char))) {
			playSelect();
			updateTag(tag);
		}
	};

	const move = () => {
		playMove();
	};

	return { type, backspace, erase, fill, move };
};

export default useControls;
