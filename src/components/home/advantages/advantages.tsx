import { Container } from '@/components/layout/container'
import { ADVANTAGES } from './advantages.data'
import { cn } from '@/lib/utils'

export function Advantages() {
	return (
		<section>
			<Container>
				<header className='text-center space-y-3'>
					<h2 className='font-bold text-4xl'>Рішення</h2>
					<h3 className='font-medium text-lg'>Тільки те, що дійсно потрібно</h3>
				</header>
				<section className='grid grid-cols-3 mt-14 max-lg:grid-cols-2 max-lg:text-center max-sm:grid-cols-1'>
					{ADVANTAGES.map((advantage, index) => (
						<article
							key={advantage.id}
							className={cn(
								'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
								(index === 0 || index === 4) &&
									'lg:border-l dark:border-neutral-800',
								index < 4 && 'lg:border-b dark:border-neutral-800'
							)}
						>
							{index < 4 && (
								<div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
							)}
							{index >= 4 && (
								<div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
							)}
							<div className='text-lg font-bold mb-2 relative z-10 px-10'>
								<div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center' />
								<span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100'>
									{advantage.title}
								</span>
							</div>
							<p className='text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10'>
								{advantage.description}
							</p>
						</article>
					))}
				</section>
			</Container>
		</section>
	)
}
