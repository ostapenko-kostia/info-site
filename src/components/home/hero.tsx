import { Button } from '../ui/button'
import Orb from '../ui/orb/orb'
import RotatingText from '../ui/rotating-text/rotating-text'

export function Hero() {
	return (
		<section className='w-full h-screen relative bg-black'>
			<Orb hoverIntensity={0.2} rotateOnHover forceHoverState={false} hue={0} />
			<div className='absolute flex flex-col justify-center items-center gap-8 px-3 w-full top-1/2 -translate-y-1/2 left-0'>
				<h1 className='text-6xl font-black text-center max-lg:text-5xl max-sm:text-[26px] text-white inline-flex items-center gap-2'>
					Керуй
					<RotatingText
						texts={['командою', 'процесами', 'завданнями']}
						mainClassName='px-2 sm:px-2 md:px-3 bg-[linear-gradient(90deg,_#5C2DBB_0%,_#1566EA_100%)] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
						staggerFrom={'last'}
						staggerDuration={0.025}
						splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
						transition={{ type: 'spring', damping: 30, stiffness: 400 }}
						rotationInterval={2000}
					/>
				</h1>
				<p className='text-lg font-medium text-center max-w-2/3 max-sm:max-w-full max-sm:text-base text-white'>
					Все необхідне для управління проєктами в одному зрозумілому
					інтерфейсі. Для команд будь-якого розміру й досвіду.
				</p>
				<div className='flex flex-col items-center justify-center gap-2'>
					<Button variant='white'>Почати, це безкоштовно!</Button>
					<h2 className='text-xs font-medium text-center text-white'>
						Налаштування роботи всього за 5 хвилин
					</h2>
				</div>
			</div>
		</section>
	)
}
