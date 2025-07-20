import { Container } from '@/components/layout/container'
import { ADVANTAGES } from './advantages.data'

export function Advantages() {
	return (
		<section>
			<Container>
				<header className='text-center space-y-3'>
					<h2 className='font-bold text-4xl'>Рішення</h2>
					<h3 className='font-medium text-lg'>Тільки те, що дійсно потрібно</h3>
				</header>
				<section className='grid grid-cols-3 mt-14 gap-y-24 max-lg:grid-cols-2 max-lg:text-center max-sm:grid-cols-1'>
					{ADVANTAGES.map(advantage => (
						<article key={advantage.id} className='space-y-2'>
							<h4 className='font-bold text-lg'>{advantage.title}</h4>
							<p className='tepxt-sm'>{advantage.description}</p>
						</article>
					))}
				</section>
			</Container>
		</section>
	)
}
