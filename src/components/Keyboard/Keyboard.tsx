import Key from './Key/Key';
import useTagStore from '../../store/tagStore';
import { KeyboardSet } from '../../types/types';
import {
	EnglishLowerKeyboard,
	EnglishUpperKeyboard,
	HiraganaKeyboard,
	KatakanaKeyboard,
} from '../../data/keyboards';
import useKeyPressed from '../../hooks/useKeyPressed';

const Keyboard = () => {
	const { keyboard } = useTagStore((state) => state);

	const shiftIsPressed = useKeyPressed('Shift'); // Handle Shift key

	let keyboardSet = null;
	switch (keyboard) {
		case KeyboardSet.englishUpper:
			keyboardSet = shiftIsPressed
				? EnglishLowerKeyboard
				: EnglishUpperKeyboard;
			break;
		case KeyboardSet.englishLower:
			keyboardSet = shiftIsPressed
				? EnglishUpperKeyboard
				: EnglishLowerKeyboard;
			break;
		case KeyboardSet.hiragana:
			keyboardSet = HiraganaKeyboard;
			break;
		case KeyboardSet.katakana:
			keyboardSet = KatakanaKeyboard;
			break;
		default:
			keyboardSet = EnglishUpperKeyboard;
			break;
	}

	return (
		<div className='grid grid-cols-10 w-fit gap-2.5 flex-wrap'>
			{Array.from(keyboardSet).map((character, i) => (
				<Key character={character} key={`key-${character}-${i}`} />
			))}
		</div>
	);
};

export default Keyboard;
