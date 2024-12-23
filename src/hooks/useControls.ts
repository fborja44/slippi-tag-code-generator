import codeSet, { charSet } from '../data/codes';
import useTagStore from '../store/tagStore';
import useAudio from './useAudio';

const useControls = () => {
	const { code, updateTag, addCharacter, removeCharacter } = useTagStore(
		(state) => state
	);
	const { playAudio: playSelect } = useAudio('/audio/select.wav');
	const { playAudio: playCancel } = useAudio('/audio/cancel.wav');
	const { playAudio: playMove } = useAudio('/audio/move.wav', 0.05);
	const { playAudio: playError } = useAudio('/audio/error.wav');

	const type = (character: string) => {
		if (!charSet.has(character)) {
			return playError();
		}

		if (code.length + codeSet[character].length > 16) {
			return playError();
		}

		addCharacter(character);
		playSelect();
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
		if (tag.split('').every((char) => charSet.has(char))) {
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
