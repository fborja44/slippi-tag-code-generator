/**
 * Picks a random item from an array.
 * @param arr The array to choose from.
 * @returns A random item from the array.
 */
export const choice = <T>(arr: T[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

export const generateCode = (tag: string) => {
	return `$Optional: Force Nametag "" for Local Player [Fizzi]
*When playing online, nametag ____ will show above 
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
00000000 00000000 #${tag}
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
