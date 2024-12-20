# 🦎 Melee Tag Gecko Code Generator

This is a utility tool to generate gecko codes for use with [Slippi](https://slippi.gg/) and Super Smash Bros. Melee which forces a tag in-game for online matches.

Designed after the in-game keyboard for tag entry.

## Usage

1. Enter the desired code using the keyboard interface, or your own keyboard
2. Press the copy button to copy the code to your clipboard
3. Open the Slippi Launcher and go to Settings
4. Navigate to the Netplay page under Dolphin Settings
5. Click on Manage Gecko Codes
6. Open the Add tab and paste your code and click the Add Button
7. You're ready to go!

The code generated is as follows:

```
$Optional: Force Nametag for Local Player [Fizzi]
*When playing online, nametag ____ will show above your character. ---------------------
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
XXXXXXXX XXXXXX00  #CHARACTER CODES GO HERE
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
60000000 00000000
```

## TODO

- [x] Melee Keyboard
- [ ] Support up to 7 Characters

## Credits

🐸 Thanks to [Fizzi](https://x.com/fizzi36) for the original Gecko Code

💻 Thanks to A_Big_Teletubby on Reddit for the [Character Code Spreadsheet](https://drive.google.com/file/d/1LGljYcGwInlH1XBJmEtR5_fEZrMZ3osU/view)

🔊 Sounds from Super Smash Bros. Melee for the Nintendo GameCube
