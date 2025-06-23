import { Suspense, lazy } from 'react'
import { Container } from '../layout/container'
import { Button } from '../ui/button'

// Lazy load the LavaLamp component
const LavaLamp = lazy(() =>
	import('../fluid-blob').then(mod => ({ default: mod.LavaLamp }))
)

export function Hero() {
	return (
		<section className='relative w-full min-h-screen'>
			<Suspense fallback={<div className='absolute inset-0'></div>}>
				<LavaLamp />
			</Suspense>

			<Container className='flex flex-col items-center justify-center gap-9 min-h-screen py-[82px] relative z-10'>
				<div className='flex flex-col items-center justify-center gap-8'>
					<h1 className='text-6xl font-black text-center text-black max-lg:text-5xl max-sm:text-3xl'>
						Керуй командою легко.
					</h1>
					<p className='text-lg font-medium text-center max-w-2/3 max-sm:max-w-full max-sm:text-base'>
						Все необхідне для управління проєктами в одному зрозумілому
						інтерфейсі. Для команд будь-якого розміру й досвіду.
					</p>
				</div>
				<div className='flex flex-col items-center justify-center gap-2'>
					<Button variant='primary'>Почати, це безкоштовно!</Button>
					<h2 className='text-xs font-medium text-center'>
						Налаштування роботи всього за 5 хвилин
					</h2>
				</div>
			</Container>
		</section>
	)
}
