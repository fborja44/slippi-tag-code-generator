/**
 * Need to use a separate variable for this since React Copy To Cliboard only recognizes normal buttons, not custom components.
 * @param isPressed Whether the button is being pressed.
 * @returns The class styles for a menu button.
 */
export const createMenuButtonClass = (isPressed: boolean) =>
	`container-row justify-center gap-3 rounded-xl uppercase ${
		!isPressed ? 'bg-black text-menu-stone-text' : 'bg-menu-yellow text-black'
	} font-serif text-5xl h-16 py-1 text-center border-4 border-menu-gray hover:bg-menu-yellow hover:text-black active:bg-menu-gold disabled:brightness-50`;
