import { ChevronDownIcon } from 'lucide-react'

export function HeaderNav() {
	return (
		<nav>
			<ul className='flex items-center gap-12 font-semibold'>
				<li className='flex items-center gap-4'>
					Продукт
					<ChevronDownIcon className='w-5 h-5' />
				</li>
				<li className='flex items-center gap-4'>
					Рішення
					<ChevronDownIcon className='w-5 h-5' />
				</li>
				<li>Ціни</li>
			</ul>
		</nav>
	)
}
