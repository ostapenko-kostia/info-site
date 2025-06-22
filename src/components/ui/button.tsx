import clsx from 'clsx'

export function Button({
	children,
	variant = 'default',
}: {
	children: React.ReactNode
	variant?: 'default' | 'primary'
}) {
	return (
		<button
			className={clsx(
				'rounded-3xl border border-[#D9D9D9] py-4 px-8 hover:bg-[#D9D9D9] transition-colors duration-300 font-semibold',
				{
					'text-white bg-gradient-to-r from-[#9F33D2] to-[#3B82F6] border-none':
						variant === 'primary',
				}
			)}
		>
			{children}
		</button>
	)
}
