interface KeyProps {
	character: string;
}

const Key = ({ character }: KeyProps) => {
	if (character.length !== 1) return null;

	return (
		<button className='w-[70px] h-[90px] rounded-xl text-5xl flex flex-col justify-end px-1 py-1.5 border-4 bg-menu-bg border-menu-gold-dark text-menu-gold-light hover:bg-menu-gold hover:text-black'>
			{character}
		</button>
	);
};

export default Key;
