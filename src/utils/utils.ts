import codeSet, { charSet } from '../data/codes';

/**
 * Picks a random item from an array.
 * @param arr The array to choose from.
 * @returns A random item from the array.
 */
export const choice = <T>(arr: T[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Adds a space to the middle of a string.
 * @param str The string to add a space to.
 * @returns A new string with a space in the middle.
 */
export const addMiddleSpace = (str: string) => {
	const mid = Math.floor(str.length / 2);
	return str.slice(0, mid) + ' ' + str.slice(mid);
};

/**
 * Generates the code string for a tag.
 * @param tag The tag to get the code for.
 * @returns The code string for the given tag based on the codeset.
 */
export const getTagCode = (tag: string, pad: boolean = true) => {
	let result = '';
	for (const char of tag) {
		result += codeSet[char];
	}
	if (pad) {
		result = addMiddleSpace(result.padEnd(16, '0'));
	}
	return result;
};

/**
 * Vanilla Behavior allows 4 characters of ANY type.
 * @param tag The tag to generate a gecko code for.
 * @returns The final code if valid. Otherwise, returns null.
 */
export const generateCode = (tag: string) => {
	// Invalid length
	if (tag.length > 4) return null;

	// Invalid character
	if (tag.split('').some((char) => !charSet.has(char))) return null;

	// Generate code
	const code = getTagCode(tag);

	return `$Optional: Force Nametag '${tag}' for Local Player [Fizzi]
*When playing online, nametag '${tag}' will show above 
*your character.
*Will not cause desyncs when playing online
C20355B4 00000008 #Force Nametag
3C608048 80639D30
5463443E 2C030208
40820028 806DB61C
88630000 7C03F800
40820018 38600000
3D808003 618C55CC
7D8903A6 4E800420
1C9F0E90 00000000
C22FD1EC 0000000E
48000010 4E800021
${code} #Code for '${tag}'
3C608048 80639D30
5463443E 2C030208
40820020 806DB61C
88630000 7C03D800
40820010 4BFFFFD1
7C6802A6 4800002C
7F63DB78 3D808003
618C556C 7D8903A6
4E800421 5463063E
3D808023 618C754C
7D8903A6 4E800421
60000000 00000000`;
};
