import { Button } from '../ui/button'
import { LavaLamp } from '../ui/fluid-blob'

export function Hero() {
	return (
		// <section className='w-full min-h-screen flex flex-col justify-center items-center relative gap-8 px-3'>
		// 	<h1 className='text-6xl font-black text-center max-lg:text-5xl max-sm:text-3xl mix-blend-exclusion text-white'>
		// 		Керуй командою легко.
		// 	</h1>
		// 	<p className='text-lg font-medium text-center max-w-2/3 max-sm:max-w-full max-sm:text-base mix-blend-exclusion text-white'>
		// 		Все необхідне для управління проєктами в одному зрозумілому інтерфейсі.
		// 		Для команд будь-якого розміру й досвіду.
		// 	</p>
		// 	<div className='flex flex-col items-center justify-center gap-2'>
		// 		<Button variant='primary'>Почати, це безкоштовно!</Button>
		// 		<h2 className='text-xs font-medium text-center mix-blend-exclusion text-white'>
		// 			Налаштування роботи всього за 5 хвилин
		// 		</h2>
		// 	</div>
		// 	<LavaLamp />
		// </section>
		  <div className="h-screen w-screen flex flex-col justify-center items-center relative">
     <LavaLamp/>
    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
      Morphic Dreams
    </h1>
    <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed">
      Where thoughts take shape and consciousness flows like liquid mercury through infinite dimensions.
    </p>
    </div>
	)
}
