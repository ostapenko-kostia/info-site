import { cn } from '@/lib/utils'

export function Button({
	children,
	variant = 'default',
	size = 'default',
	className,
}: {
	children: React.ReactNode
	variant?: 'default' | 'primary' | 'white' | 'ghost'
	size?: 'default' | 'slim'
	className?: string
}) {
	return (
		<button
			className={cn(
				'rounded-3xl border border-[#D9D9D9] py-3 px-6 transition-transform duration-300 font-semibold text-sm hover:scale-105',
				className,
				{
					'text-white bg-gradient-to-r from-[#9F33D2] to-[#3B82F6] border-none':
						variant === 'primary',
					'text-black bg-white': variant === 'white',
					'border-none': variant === 'ghost',
					'py-3': size === 'default',
					'py-2': size === 'slim'
				}
			)}
		>
			{children}
		</button>
	)
}
