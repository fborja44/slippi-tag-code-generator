import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

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
	return (
		<Dialog
			open={isOpen}
			as='section'
			className='relative z-10 focus:outline-none'
			onClose={onClose}
		>
			<div className='fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-md duration-300'>
				<div className='flex min-h-full items-center justify-center p-4'>
					<DialogPanel
						// transition
						className='flex flex-col gap-4 max-w-2xl rounded-3xl bg-midnight-950 border-4 border-b-[10px] border-midnight-600 px-7 py-5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
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
						<div className='w-fit bg-black/50 rounded-2xl'>{children}</div>
						{actions && (
							<div className='container-row justify-center mt-1 w-full'>
								{actions}
							</div>
						)}
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Popup;
