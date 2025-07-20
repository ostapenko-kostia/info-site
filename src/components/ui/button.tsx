import { cn } from '@/lib/utils'

export function Button({
	children,
	variant = 'default',
	className,
}: {
	children: React.ReactNode
	variant?: 'default' | 'primary'
	className?: string
}) {
	return (
		<button
			className={cn(
				'rounded-3xl border border-[#D9D9D9] py-3 px-6 hover:bg-[#D9D9D9] transition-colors duration-300 font-semibold',
				className,
				{
					'text-white bg-gradient-to-r from-[#9F33D2] to-[#3B82F6] border-none hover:from-[#3B82F6]/70 hover:to-[#9F33D2]/70':
						variant === 'primary',
				}
			)}
		>
			{children}
		</button>
	)
}
