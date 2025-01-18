import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { useEffect } from 'react';
import useTagStore from '../../store/tagStore';
import useAudio from '../../hooks/useAudio';

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	actions: React.ReactNode;
}

const Popup = ({
	isOpen,
	onClose,
	title,
	children,
	actions,
	icon,
}: PopupProps) => {
	const { setKeyboardEnabled } = useTagStore();
	const { playAudio } = useAudio('/audio/cancel.wav');

	useEffect(() => {
		setKeyboardEnabled(!isOpen);
	}, [isOpen, setKeyboardEnabled]);

	return (
		<Dialog
			open={isOpen}
			as='section'
			className='relative z-10 focus:outline-none'
			onClose={() => {
				onClose();
				playAudio();
			}}
		>
			<div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
				<DialogBackdrop
					transition
					className='fixed inset-0 bg-black/50 backdrop-blur-md duration-[50ms] ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
				/>
				<DialogPanel
					transition
					className='flex flex-col gap-4 max-w-2xl rounded-3xl bg-midnight-950 border-4 border-b-[10px] border-midnight-600 px-7 py-5 backdrop-blur-2xl duration-[50ms] ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
				>
					{(title || icon) && (
						<DialogTitle
							as='h2'
							className='container-row gap-2 text-3xl text-menu-yellow'
						>
							{icon && <span className='relative top-0.5'>{icon}</span>}
							{title && <span>{title}</span>}
						</DialogTitle>
					)}
					<div className='w-full bg-black/50 rounded-2xl'>{children}</div>
					{actions && (
						<div className='container-row justify-center mt-1 w-full'>
							{actions}
						</div>
					)}
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default Popup;
