import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'

export function HeaderNav({ className }: { className?: string }) {
	return (
		<nav className={className}>
			<ul className='flex items-center gap-10 font-semibold text-sm text-white'>
				<li>
					<button className='flex items-center gap-4'>
						Продукт
						<ChevronDownIcon className='w-5 h-5' />
					</button>
				</li>
				<li>
					<button className='flex items-center gap-4'>
						Рішення
						<ChevronDownIcon className='w-5 h-5' />
					</button>
				</li>
				<li>
					<Link href='#'>Ціни</Link>
				</li>
			</ul>
		</nav>
	)
}
